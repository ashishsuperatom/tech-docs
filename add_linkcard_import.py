#!/usr/bin/env python3
"""Add LinkCard import to files that use it."""

import re
from pathlib import Path

def add_linkcard_import(content: str) -> str:
    """Add LinkCard import if file uses it but doesn't import it."""

    if '<LinkCard' not in content:
        return content

    # Check if already imported
    if 'LinkCard' in content and "from '@astrojs/starlight/components'" in content:
        # Check if LinkCard is in the import
        import_match = re.search(r"import \{ ([^}]+) \} from '@astrojs/starlight/components'", content)
        if import_match and 'LinkCard' in import_match.group(1):
            return content
        elif import_match:
            # Add LinkCard to existing import
            old_import = import_match.group(0)
            components = import_match.group(1)
            new_import = f"import {{ {components}, LinkCard }} from '@astrojs/starlight/components'"
            return content.replace(old_import, new_import)

    # No starlight import exists, add one
    import_line = "\nimport { LinkCard } from '@astrojs/starlight/components';\n"

    # Add after frontmatter
    content = re.sub(r'(---\n.*?---\n)', r'\1' + import_line, content, count=1, flags=re.DOTALL)

    return content


def main():
    docs_dir = Path('starlight-docs/src/content/docs')

    for mdx_file in docs_dir.rglob('*.mdx'):
        content = mdx_file.read_text()

        if '<LinkCard' in content:
            updated = add_linkcard_import(content)
            if updated != content:
                print(f"Updated: {mdx_file}")
                mdx_file.write_text(updated)


if __name__ == '__main__':
    main()
