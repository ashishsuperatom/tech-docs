#!/usr/bin/env python3
"""Re-convert Mintlify MDX to Starlight with proper Card handling."""

import re
from pathlib import Path

def convert_file(content: str) -> str:
    """Convert Mintlify MDX to Starlight format."""

    # Remove icon from frontmatter
    content = re.sub(r"^icon: '[^']+'\n", "", content, flags=re.MULTILINE)

    # Add Starlight imports at the top (after frontmatter)
    has_cards = '<CardGroup' in content or '<Card' in content
    has_tabs = '<Tabs>' in content or '<Tab ' in content
    has_steps = '<Steps>' in content

    imports = []
    if has_cards:
        imports.append("Card, CardGrid, LinkCard")
    if has_tabs:
        imports.append("Tabs, TabItem")
    if has_steps:
        imports.append("Steps")

    if imports:
        import_line = f"\nimport {{ {', '.join(imports)} }} from '@astrojs/starlight/components';\n"
        content = re.sub(r'(---\n.*?---\n)', r'\1' + import_line, content, count=1, flags=re.DOTALL)

    # Convert CardGroup to CardGrid - extract cols if present
    content = re.sub(r'<CardGroup\s+cols=\{?\d+\}?>', '<CardGrid>', content)
    content = re.sub(r'<CardGroup[^>]*>', '<CardGrid>', content)
    content = content.replace('</CardGroup>', '</CardGrid>')

    # Convert Card with href to LinkCard
    def convert_card_with_href(match):
        attrs = match.group(1)
        title_match = re.search(r'title="([^"]+)"', attrs)
        href_match = re.search(r'href="([^"]+)"', attrs)
        title = title_match.group(1) if title_match else "Link"
        href = href_match.group(1) if href_match else "/"
        # Get inner content for description
        inner = match.group(2).strip() if match.group(2) else ""
        # Clean up inner content
        inner = re.sub(r'<[^>]+>', '', inner).strip()
        inner = inner[:100] if len(inner) > 100 else inner
        return f'<LinkCard title="{title}" href="{href}" description="{inner}" />'

    # First handle Cards with href (convert to LinkCard)
    content = re.sub(
        r'<Card\s+([^>]*href="[^"]+[^>]*)>(.*?)</Card>',
        convert_card_with_href,
        content,
        flags=re.DOTALL
    )

    # Now handle regular Cards (keep as Card but fix structure)
    def convert_card(match):
        attrs = match.group(1)
        inner = match.group(2).strip()

        title_match = re.search(r'title="([^"]+)"', attrs)
        icon_match = re.search(r'icon="([^"]+)"', attrs)

        title = title_match.group(1) if title_match else "Card"
        icon = icon_match.group(1) if icon_match else None

        # Clean up the inner content - remove nested tags
        inner = re.sub(r'\s+', ' ', inner)

        if icon:
            return f'<Card title="{title}" icon="{icon}">\n    {inner}\n  </Card>'
        else:
            return f'<Card title="{title}">\n    {inner}\n  </Card>'

    content = re.sub(
        r'<Card\s+([^>]*)>(.*?)</Card>',
        convert_card,
        content,
        flags=re.DOTALL
    )

    # Convert Tabs/Tab
    content = re.sub(r'<Tab title="([^"]+)">', r'<TabItem label="\1">', content)
    content = content.replace('</Tab>', '</TabItem>')

    # Convert AccordionGroup/Accordion to details/summary
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
    content = re.sub(r'<Note>\s*', '\n:::note\n', content)
    content = re.sub(r'\s*</Note>', '\n:::\n', content)
    content = re.sub(r'<Warning>\s*', '\n:::caution\n', content)
    content = re.sub(r'\s*</Warning>', '\n:::\n', content)
    content = re.sub(r'<Info>\s*', '\n:::tip\n', content)
    content = re.sub(r'\s*</Info>', '\n:::\n', content)

    # Remove Frame tags
    content = content.replace('<Frame>', '')
    content = content.replace('</Frame>', '')

    # Remove Icon components
    content = re.sub(r'<Icon[^/]*/>\s*', '', content)

    # Update image paths
    content = content.replace('src="/images/', 'src="../../assets/')

    # Clean up extra blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    # Fix any remaining broken Card/CardGrid patterns
    # Remove orphan closing tags
    content = re.sub(r'^\s*</CardGrid>\s*$', '', content, flags=re.MULTILINE)

    # Ensure CardGrid has proper content
    def fix_cardgrid(match):
        inner = match.group(1)
        # Check if inner has proper Card elements
        if '<Card' in inner:
            return f'<CardGrid>\n{inner}\n</CardGrid>'
        else:
            return inner  # Remove empty CardGrid

    content = re.sub(r'<CardGrid>\s*(.*?)\s*</CardGrid>', fix_cardgrid, content, flags=re.DOTALL)

    return content.strip() + '\n'


def main():
    source_dir = Path('.')
    target_dir = Path('starlight-docs/src/content/docs')

    dirs = ['introduction', 'platform', 'architecture', 'ip', 'security', 'api-reference', 'guides']

    for dir_name in dirs:
        source_path = source_dir / dir_name
        target_path = target_dir / dir_name

        if not source_path.exists():
            continue

        target_path.mkdir(parents=True, exist_ok=True)

        for mdx_file in source_path.glob('*.mdx'):
            print(f"Converting {mdx_file}")
            content = mdx_file.read_text()
            converted = convert_file(content)
            target_file = target_path / mdx_file.name
            target_file.write_text(converted)

if __name__ == '__main__':
    main()
