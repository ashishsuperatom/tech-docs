#!/usr/bin/env python3
"""Simplify MDX by removing Card components and using plain markdown."""

import re
from pathlib import Path

def simplify_mdx(content: str) -> str:
    """Remove Card/CardGrid components and convert to plain markdown."""

    # Remove imports
    content = re.sub(r"^import \{ .* \} from '@astrojs/starlight/components';\n", "", content, flags=re.MULTILINE)

    # Remove CardGrid tags
    content = re.sub(r'<CardGrid[^>]*>', '', content)
    content = re.sub(r'</CardGrid>', '', content)

    # Convert Card to bullet points
    def card_to_markdown(match):
        attrs = match.group(1)
        inner = match.group(2).strip()

        title_match = re.search(r'title="([^"]+)"', attrs)
        title = title_match.group(1) if title_match else ""

        # Clean inner content
        inner = re.sub(r'\s+', ' ', inner)

        if title:
            return f"- **{title}**: {inner}"
        else:
            return f"- {inner}"

    content = re.sub(r'<Card\s+([^>]*)>(.*?)</Card>', card_to_markdown, content, flags=re.DOTALL)

    # Convert LinkCard to markdown links
    def linkcard_to_markdown(match):
        attrs = match.group(0)
        title_match = re.search(r'title="([^"]+)"', attrs)
        href_match = re.search(r'href="([^"]+)"', attrs)
        desc_match = re.search(r'description="([^"]+)"', attrs)

        title = title_match.group(1) if title_match else "Link"
        href = href_match.group(1) if href_match else "/"
        desc = desc_match.group(1) if desc_match else ""

        return f"- [{title}]({href}) - {desc}"

    content = re.sub(r'<LinkCard[^/]*/>', linkcard_to_markdown, content)

    # Clean up blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    return content


def main():
    docs_dir = Path('starlight-docs/src/content/docs')

    for mdx_file in docs_dir.rglob('*.mdx'):
        if mdx_file.name == 'index.mdx':
            continue  # Skip the main index which uses proper Starlight components

        content = mdx_file.read_text()

        if '<Card' in content or '<CardGrid' in content or '<LinkCard' in content:
            print(f"Simplifying {mdx_file}")
            simplified = simplify_mdx(content)
            mdx_file.write_text(simplified)


if __name__ == '__main__':
    main()
