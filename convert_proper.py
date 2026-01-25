#!/usr/bin/env python3
"""Properly convert Mintlify MDX to Starlight, keeping ALL content including diagrams."""

import re
import os
from pathlib import Path

def convert_to_starlight(content: str) -> str:
    """Convert Mintlify MDX to Starlight format, keeping all content."""

    # Remove icon from frontmatter
    content = re.sub(r"^icon: '[^']+'\n", "", content, flags=re.MULTILINE)

    # Track what components we need
    needs_card = '<Card' in content or '<CardGroup' in content
    needs_tabs = '<Tabs>' in content
    needs_linkcard = False

    # Convert CardGroup to CardGrid
    content = re.sub(r'<CardGroup\s+cols=\{\d+\}>', '<CardGrid>', content)
    content = re.sub(r'<CardGroup[^>]*>', '<CardGrid>', content)
    content = content.replace('</CardGroup>', '</CardGrid>')

    # Convert Card with href to LinkCard
    def convert_card_href(match):
        nonlocal needs_linkcard
        attrs = match.group(1)
        inner = match.group(2).strip()

        title_match = re.search(r'title="([^"]+)"', attrs)
        href_match = re.search(r'href="([^"]+)"', attrs)

        if href_match:
            needs_linkcard = True
            title = title_match.group(1) if title_match else "Link"
            href = href_match.group(1)
            desc = re.sub(r'<[^>]+>', '', inner).strip()[:100]
            return f'<LinkCard title="{title}" href="{href}" description="{desc}" />'
        else:
            title = title_match.group(1) if title_match else "Card"
            icon_match = re.search(r'icon="([^"]+)"', attrs)
            icon = icon_match.group(1) if icon_match else None
            if icon:
                return f'<Card title="{title}" icon="{icon}">\n\t\t{inner}\n\t</Card>'
            else:
                return f'<Card title="{title}">\n\t\t{inner}\n\t</Card>'

    content = re.sub(r'<Card\s+([^>]*)>(.*?)</Card>', convert_card_href, content, flags=re.DOTALL)

    # Convert Tabs/Tab to Starlight format
    content = re.sub(r'<Tab title="([^"]+)">', r'<TabItem label="\1">', content)
    content = content.replace('</Tab>', '</TabItem>')

    # Convert Steps - to ordered list with bold titles
    def convert_step(match):
        title = match.group(1)
        inner = match.group(2).strip()
        return f'1. **{title}**\n\n   {inner}\n'

    def convert_steps_block(match):
        inner = match.group(1)
        steps = re.sub(r'<Step title="([^"]+)">\s*(.*?)\s*</Step>', convert_step, inner, flags=re.DOTALL)
        return steps

    content = re.sub(r'<Steps>\s*(.*?)\s*</Steps>', convert_steps_block, content, flags=re.DOTALL)

    # Convert Accordion to details/summary
    content = content.replace('<AccordionGroup>', '')
    content = content.replace('</AccordionGroup>', '')

    def convert_accordion(match):
        attrs = match.group(1)
        inner = match.group(2).strip()
        title_match = re.search(r'title="([^"]+)"', attrs)
        title = title_match.group(1) if title_match else "Details"
        return f'<details>\n<summary>{title}</summary>\n\n{inner}\n\n</details>'

    content = re.sub(r'<Accordion([^>]*)>(.*?)</Accordion>', convert_accordion, content, flags=re.DOTALL)

    # Convert Note/Warning/Info to Starlight aside syntax
    content = re.sub(r'<Note>\s*', ':::note\n', content)
    content = re.sub(r'\s*</Note>', '\n:::\n', content)
    content = re.sub(r'<Warning>\s*', ':::caution\n', content)
    content = re.sub(r'\s*</Warning>', '\n:::\n', content)
    content = re.sub(r'<Info>\s*', ':::tip\n', content)
    content = re.sub(r'\s*</Info>', '\n:::\n', content)

    # Remove Frame tags but keep content
    content = re.sub(r'<Frame[^>]*>', '', content)
    content = content.replace('</Frame>', '')

    # Remove Icon components
    content = re.sub(r'<Icon[^/]*/>\s*\n?', '', content)

    # KEEP Mermaid diagrams as-is (will add plugin support)
    # Don't convert them - just leave the ```mermaid blocks

    # Update image paths - use public folder path
    content = re.sub(r'<img src="/images/([^"]+)"([^>]*)alt="([^"]*)"([^>]*)>',
                     r'![\3](/images/\1)', content)
    content = re.sub(r'<img src="/images/([^"]+)"[^>]*>',
                     r'![Image](/images/\1)', content)

    # Build imports
    imports = []
    if needs_card:
        imports.append('Card')
        imports.append('CardGrid')
    if needs_linkcard:
        imports.append('LinkCard')
    if needs_tabs:
        imports.append('Tabs')
        imports.append('TabItem')

    if imports:
        import_line = f"\nimport {{ {', '.join(imports)} }} from '@astrojs/starlight/components';\n"
        content = re.sub(r'(---\n.*?---\n)', r'\1' + import_line, content, count=1, flags=re.DOTALL)

    # Clean up multiple blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    return content.strip() + '\n'


def main():
    source_dirs = ['introduction', 'platform', 'ip', 'architecture', 'security', 'api-reference', 'guides']
    target_base = Path('starlight-docs/src/content/docs')

    for dir_name in source_dirs:
        source_dir = Path(dir_name)
        if not source_dir.exists():
            continue

        target_dir = target_base / dir_name
        target_dir.mkdir(parents=True, exist_ok=True)

        for mdx_file in source_dir.glob('*.mdx'):
            print(f"Converting: {mdx_file}")
            content = mdx_file.read_text()
            converted = convert_to_starlight(content)

            target_file = target_dir / mdx_file.name
            target_file.write_text(converted)


if __name__ == '__main__':
    main()
