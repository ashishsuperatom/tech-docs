#!/usr/bin/env python3
"""Fix missing CardGrid closing tags in MDX files."""

import re
from pathlib import Path

def fix_cardgrid_tags(content: str) -> str:
    """Add missing </CardGrid> tags after Card elements."""

    lines = content.split('\n')
    result = []
    open_cardgrids = 0
    i = 0

    while i < len(lines):
        line = lines[i]

        # Count CardGrid opens
        opens_in_line = line.count('<CardGrid>')
        closes_in_line = line.count('</CardGrid>')

        open_cardgrids += opens_in_line - closes_in_line

        result.append(line)

        # If we have open CardGrids, look for the end of card content
        if open_cardgrids > 0:
            # Check if this is a Card closing or the last Card in a group
            if '</Card>' in line or '/>' in line:
                # Look ahead to see if next non-empty line is not a Card
                j = i + 1
                while j < len(lines) and lines[j].strip() == '':
                    j += 1

                if j < len(lines):
                    next_line = lines[j].strip()
                    # If next line is a new section (##) or empty/other content, close CardGrid
                    if (next_line.startswith('##') or
                        next_line.startswith('---') or
                        (not next_line.startswith('<Card') and
                         not next_line.startswith('<LinkCard') and
                         not next_line == '' and
                         not next_line.startswith('</CardGrid'))):
                        # Add closing tag
                        result.append('</CardGrid>')
                        open_cardgrids -= 1
                elif j >= len(lines):
                    # End of file, close any open CardGrids
                    result.append('</CardGrid>')
                    open_cardgrids -= 1

        i += 1

    # Close any remaining open CardGrids
    while open_cardgrids > 0:
        result.append('</CardGrid>')
        open_cardgrids -= 1

    return '\n'.join(result)


def main():
    docs_dir = Path('starlight-docs/src/content/docs')

    for mdx_file in docs_dir.rglob('*.mdx'):
        content = mdx_file.read_text()

        # Check if file has mismatched tags
        opens = content.count('<CardGrid>')
        closes = content.count('</CardGrid>')

        if opens != closes:
            print(f"Fixing {mdx_file} (opens={opens}, closes={closes})")
            fixed = fix_cardgrid_tags(content)
            mdx_file.write_text(fixed)


if __name__ == '__main__':
    main()
