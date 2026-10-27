"""Build portable archives with public links for destinations outside each archive."""
from pathlib import Path
from urllib.parse import urlsplit
import re
import zipfile
import sys

repository = Path(__file__).resolve().parent.parent
root = repository / 'practical-packs'
website = 'https://edugenio.github.io/ait-atar-textbook/'

def portable_html(source, included_root, destination):
    text = source.read_text(encoding='utf-8')
    def rewrite(match):
        link = match.group(1)
        parts = urlsplit(link)
        if parts.scheme or parts.netloc or not parts.path:
            return match.group(0)
        target = (source.parent / parts.path).resolve()
        if not target.is_relative_to(included_root) or target == destination:
            public = website + target.relative_to(repository).as_posix()
            if parts.query:
                public += '?' + parts.query
            if parts.fragment:
                public += '#' + parts.fragment
            return 'href="' + public + '"'
        return match.group(0)
    return re.sub(r'href="([^"]+)"', rewrite, text)

folders = ['media-starter', 'maintenance-lab', 'response-lab', 'animation-multimedia', 'web-standards', 'publication-workflow', 'spreadsheet-lookups', 'production-workflows', 'worked-cases', 'unit1-evidence', 'unit2-evidence', 'unit3-evidence', 'unit4-evidence']
selected = sys.argv[1:] or folders
assert all(folder in folders for folder in selected), 'Unknown practical pack'
for folder in selected:
    destination = root / (folder + '-v1.zip')
    included_root = root / folder
    with zipfile.ZipFile(destination, 'w', zipfile.ZIP_DEFLATED) as archive:
        for source in sorted(included_root.rglob('*')):
            if not source.is_file():
                continue
            relative = source.relative_to(root).as_posix()
            if source.suffix == '.html':
                archive.writestr(relative, portable_html(source, included_root, destination))
            else:
                archive.write(source, relative)
        for notice in ['LICENSE.md', 'LICENSE-CODE.txt', 'LICENSE-CONTENT.txt']:
            archive.write(repository / notice, folder + '/' + notice)

destination = root / 'practical-resources-v1.zip'
with zipfile.ZipFile(destination, 'w', zipfile.ZIP_DEFLATED) as archive:
    for source in sorted(root.rglob('*')):
        if not source.is_file() or source == destination:
            continue
        relative = source.relative_to(repository).as_posix()
        if source.suffix == '.html':
            archive.writestr(relative, portable_html(source, root, destination))
        else:
            archive.write(source, relative)
    for notice in ['LICENSE.md', 'LICENSE-CODE.txt', 'LICENSE-CONTENT.txt']:
        archive.write(repository / notice, 'practical-packs/' + notice)

for source in sorted(root.glob('*.zip')):
    with zipfile.ZipFile(source) as archive:
        assert archive.testzip() is None, source
        assert all('..' not in Path(name).parts for name in archive.namelist()), source
        for notice in ['LICENSE.md', 'LICENSE-CODE.txt', 'LICENSE-CONTENT.txt']:
            expected = ('practical-packs' if source.name == 'practical-resources-v1.zip' else source.stem.removesuffix('-v1')) + '/' + notice
            assert archive.read(expected) == (repository / notice).read_bytes(), (source, notice)
        print(source.name, len(archive.namelist()), 'files; integrity checked')
