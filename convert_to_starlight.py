#!/usr/bin/env python3
"""Convert Mintlify MDX files to Starlight format."""

import os
import re
from pathlib import Path

def convert_file(content: str) -> str:
    """Convert Mintlify MDX syntax to Starlight syntax."""

    # Remove icon from frontmatter (Starlight doesn't use it the same way)
    content = re.sub(r"^icon: '[^']+'\n", "", content, flags=re.MULTILINE)

    # Convert CardGroup to CardGrid
    content = re.sub(r'<CardGroup[^>]*>', '<CardGrid>', content)
    content = content.replace('</CardGroup>', '</CardGrid>')

    # Convert Card components - keep title, remove icon and href for now
    def convert_card(match):
        attrs = match.group(1)
        inner = match.group(2)

        # Extract title
        title_match = re.search(r'title="([^"]+)"', attrs)
        title = title_match.group(1) if title_match else "Card"

        # Extract href if present
        href_match = re.search(r'href="([^"]+)"', attrs)
        href = href_match.group(1) if href_match else None

        if href:
            return f'<LinkCard title="{title}" href="{href}" description="{inner.strip()}" />'
        else:
            return f'<Card title="{title}">\n{inner}\n</Card>'

    content = re.sub(r'<Card([^>]*)>(.*?)</Card>', convert_card, content, flags=re.DOTALL)

    # Convert Steps/Step to Starlight Steps format
    content = content.replace('<Steps>', '<Steps>')
    content = content.replace('</Steps>', '</Steps>')

    def convert_step(match):
        title = match.group(1)
        inner = match.group(2).strip()
        return f'<Step title="{title}">\n{inner}\n</Step>'

    content = re.sub(r'<Step title="([^"]+)">\s*(.*?)\s*</Step>', convert_step, content, flags=re.DOTALL)

    # Convert Tabs/Tab to Starlight format
    content = content.replace('<Tabs>', '<Tabs>')
    content = content.replace('</Tabs>', '</Tabs>')
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
    content = re.sub(r'<Note>\s*', ':::note\n', content)
    content = re.sub(r'\s*</Note>', '\n:::\n', content)
    content = re.sub(r'<Warning>\s*', ':::caution\n', content)
    content = re.sub(r'\s*</Warning>', '\n:::\n', content)
    content = re.sub(r'<Info>\s*', ':::tip\n', content)
    content = re.sub(r'\s*</Info>', '\n:::\n', content)

    # Remove Frame tags (just use img directly)
    content = content.replace('<Frame>', '')
    content = content.replace('</Frame>', '')

    # Remove Icon components
    content = re.sub(r'<Icon[^/]*/>', '', content)

    # Update image paths
    content = content.replace('src="/images/', 'src="../../assets/')
    content = content.replace('alt="', 'alt="')

    # Clean up extra blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    return content

def main():
    source_dir = Path('.')
    target_dir = Path('starlight-docs/src/content/docs')

    # Directories to convert
    dirs = ['introduction', 'platform', 'architecture', 'ip', 'security', 'api-reference', 'guides']

    for dir_name in dirs:
        source_path = source_dir / dir_name
        target_path = target_dir / dir_name

        if not source_path.exists():
            print(f"Skipping {dir_name} - not found")
            continue

        target_path.mkdir(parents=True, exist_ok=True)

        for mdx_file in source_path.glob('*.mdx'):
            print(f"Converting {mdx_file}")

            content = mdx_file.read_text()
            converted = convert_file(content)

            # Write to target (keep .mdx extension for Starlight)
            target_file = target_path / mdx_file.name
            target_file.write_text(converted)
            print(f"  -> {target_file}")

if __name__ == '__main__':
    main()
