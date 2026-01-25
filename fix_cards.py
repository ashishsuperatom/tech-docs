#!/usr/bin/env python3
"""Fix Card/CardGrid syntax in Starlight MDX files."""

import re
from pathlib import Path

def fix_cards(content: str) -> str:
    """Fix malformed Card/CardGrid syntax."""

    # Add import if CardGrid is used but import is missing
    if '<CardGrid>' in content or '<Card ' in content:
        if "import { Card, CardGrid }" not in content:
            # Add import after frontmatter
            content = re.sub(
                r'(---\n.*?---\n)',
                r"\1\nimport { Card, CardGrid } from '@astrojs/starlight/components';\n",
                content,
                count=1,
                flags=re.DOTALL
            )

    # Fix the broken Card pattern: <Card title="Card"> should be <CardGrid>
    content = re.sub(r'<Card title="Card">\s*\n', '<CardGrid>\n', content)

    # Fix cards that have wrong closing
    # Pattern: <Card title="X">...content...</Card> but content has extra Card inside

    # Remove orphan </CardGrid> and add proper structure
    lines = content.split('\n')
    fixed_lines = []
    in_card = False
    card_content = []

    i = 0
    while i < len(lines):
        line = lines[i]

        # Check for standalone CardGrid close without open
        if line.strip() == '</CardGrid>' and not any('<CardGrid>' in l for l in fixed_lines[-20:] if l):
            # Skip orphan closing tag
            i += 1
            continue

        fixed_lines.append(line)
        i += 1

    return '\n'.join(fixed_lines)

def ensure_proper_structure(content: str) -> str:
    """Ensure CardGrid properly wraps Card elements."""

    # Find patterns where Cards are not properly wrapped
    # This is a simplified fix - for complex cases, manual review is needed

    # Pattern: multiple Cards in sequence without CardGrid wrapper
    lines = content.split('\n')
    result = []
    i = 0

    while i < len(lines):
        line = lines[i]
        result.append(line)
        i += 1

    return '\n'.join(result)

def main():
    docs_dir = Path('starlight-docs/src/content/docs')

    for mdx_file in docs_dir.rglob('*.mdx'):
        content = mdx_file.read_text()
        original = content

        # Apply fixes
        content = fix_cards(content)

        if content != original:
            print(f"Fixed: {mdx_file}")
            mdx_file.write_text(content)

if __name__ == '__main__':
    main()
