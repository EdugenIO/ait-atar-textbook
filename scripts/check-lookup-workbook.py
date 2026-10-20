"""Read-only verification of the actual exported OOXML workbook; no Office dependency."""
from pathlib import Path
from xml.etree import ElementTree as ET
import zipfile
import csv
import hashlib

root = Path(__file__).resolve().parent.parent
pack = root / 'practical-packs/spreadsheet-lookups'
ns = {'x': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with zipfile.ZipFile(pack / 'campaign-lookups.xlsx') as z:
    assert z.testzip() is None
    workbook = ET.fromstring(z.read('xl/workbook.xml'))
    names = [s.attrib['name'] for s in workbook.findall('x:sheets/x:sheet', ns)]
    assert names == ['Worked lookups', 'Investigate', 'Practice', 'Sort and filter']
    sheets = [ET.fromstring(z.read(f'xl/worksheets/sheet{i}.xml')) for i in range(1, 5)]
    cells = [{c.attrib['r']: c for c in s.findall('.//x:c', ns)} for s in sheets]
    def val(sheet, addr):
        cell = cells[sheet].get(addr)
        return None if cell is None else cell.findtext('x:v', default=None, namespaces=ns)
    def formula(sheet, addr):
        return cells[sheet][addr].findtext('x:f', default=None, namespaces=ns)
    assert formula(0, 'F8') == 'VLOOKUP(E8,$A$8:$C$10,3,FALSE)'
    assert formula(0, 'G18') == 'HLOOKUP(F18,$B$18:$D$19,2,FALSE)'
    assert [val(0, a) for a in ['F8', 'F9', 'F10', 'G18', 'G19', 'G20']] == ['12', '8', '30'] * 2
    assert val(1, 'A13') == 'P01 ' and val(1, 'E11') == 'P01 '
    assert [val(1, a) for a in ['F8', 'G8', 'F10', 'F11', 'F12']] == ['8', '2', '0', '99', '12']
    errors = {(names[i], a, val(i, a)) for i, cs in enumerate(cells) for a, c in cs.items() if c.get('t') == 'e'}
    assert errors == {('Worked lookups', 'F11', '#N/A'), ('Worked lookups', 'G21', '#N/A'), ('Investigate', 'F9', '#N/A'), ('Investigate', 'F13', '#N/A')}
    for addr in ['F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'G20']:
        assert val(2, addr) in (None, '') and formula(2, addr) is None, addr
    assert [val(3, a) for a in ['G8', 'G9', 'G10']] == ['106', '106', '6']
    assert formula(3, 'G9') == 'SUBTOTAL(109,D8:D13)'
    assert formula(3, 'G10') == 'SUBTOTAL(103,A8:A13)'
    table = ET.fromstring(z.read('xl/tables/table1.xml'))
    assert table.get('ref') == 'A7:D13' and table.find('x:autoFilter', ns).get('ref') == 'A7:D13'
    assert sheets[3].find('x:tableParts', ns) is not None
with (pack / 'campaign-resources.csv').open(newline='', encoding='utf-8') as f:
    rows = list(csv.DictReader(f))
assert len(rows) == 6 and sum(int(r['Quantity']) for r in rows) == 106
visible = [r for r in rows if int(r['Quantity']) > 10]
assert len(visible) == 4 and sum(int(r['Quantity']) for r in visible) == 98
print('Passed: exported formulas/caches, four deliberate errors, trailing spaces, blank practice, table filter metadata and CSV totals.')
print('Workbook SHA-256:', hashlib.sha256((pack / 'campaign-lookups.xlsx').read_bytes()).hexdigest())
print('Native Excel/LibreOffice interaction was not exercised by this check.')
