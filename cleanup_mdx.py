#!/usr/bin/env python3
"""Clean up MDX files to use only Starlight-native components."""

import re
from pathlib import Path

def cleanup_mdx(content: str) -> str:
    """Convert to clean Starlight MDX."""

    # Remove Frame tags completely (just keep the img inside)
    content = re.sub(r'<Frame>\s*', '', content)
    content = re.sub(r'\s*</Frame>', '', content)

    # Convert Tabs/Tab to Starlight Tabs/TabItem
    has_tabs = '<Tabs>' in content or '<Tab ' in content
    content = re.sub(r'<Tab title="([^"]+)">', r'<TabItem label="\1">', content)
    content = content.replace('</Tab>', '</TabItem>')

    # Convert Steps/Step to Starlight format
    has_steps = '<Steps>' in content
    content = re.sub(r'<Step title="([^"]+)">', r'### \1\n', content)
    content = content.replace('</Step>', '')
    content = content.replace('<Steps>', '')
    content = content.replace('</Steps>', '')

    # Convert Accordion to details/summary (native HTML)
    content = content.replace('<AccordionGroup>', '')
    content = content.replace('</AccordionGroup>', '')

    def convert_accordion(match):
        attrs = match.group(1)
        inner = match.group(2).strip()
        title_match = re.search(r'title="([^"]+)"', attrs)
        title = title_match.group(1) if title_match else "Details"
        return f'<details>\n<summary>{title}</summary>\n\n{inner}\n\n</details>'

    content = re.sub(r'<Accordion([^>]*)>(.*?)</Accordion>', convert_accordion, content, flags=re.DOTALL)

    # Remove Icon components
    content = re.sub(r'<Icon[^/]*/>\s*\n?', '', content)

    # Convert LinkCard to markdown links
    def linkcard_to_md(match):
        full = match.group(0)
        title_match = re.search(r'title="([^"]+)"', full)
        href_match = re.search(r'href="([^"]+)"', full)
        desc_match = re.search(r'description="([^"]*)"', full)

        title = title_match.group(1) if title_match else "Link"
        href = href_match.group(1) if href_match else "/"
        desc = desc_match.group(1) if desc_match else ""

        if desc:
            return f'- [{title}]({href}) — {desc}'
        else:
            return f'- [{title}]({href})'

    content = re.sub(r'<LinkCard[^/]*/>', linkcard_to_md, content)

    # Update image paths for Starlight
    content = re.sub(r'<img src="../../assets/([^"]+)"([^>]*)>',
                     r'![Image](../../assets/\1)', content)
    content = re.sub(r'<img src="/images/([^"]+)"([^>]*)>',
                     r'![Image](../../assets/\1)', content)

    # Add Starlight imports if needed
    imports_needed = []
    if has_tabs:
        imports_needed.append('Tabs, TabItem')

    if imports_needed:
        import_line = f"\nimport {{ {', '.join(imports_needed)} }} from '@astrojs/starlight/components';\n"
        # Add after frontmatter if not already present
        if '@astrojs/starlight/components' not in content:
            content = re.sub(r'(---\n.*?---\n)', r'\1' + import_line, content, count=1, flags=re.DOTALL)

    # Clean up multiple blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    return content.strip() + '\n'


def main():
    docs_dir = Path('starlight-docs/src/content/docs')

    for mdx_file in docs_dir.rglob('*.mdx'):
        content = mdx_file.read_text()
        cleaned = cleanup_mdx(content)

        if content != cleaned:
            print(f"Cleaned: {mdx_file}")
            mdx_file.write_text(cleaned)


if __name__ == '__main__':
    main()
