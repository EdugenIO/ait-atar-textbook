# Spreadsheet practical delivery · edition 0.37

Unit 1 applications now has an editable four-sheet workbook, a student task sheet, explained answers, a recovery CSV and portable ZIP. The chapter, weeks 9–10 sessions, print worksheets and practical library point to the pack. Activities fit the existing eight 55-minute sessions; no teaching or exam weeks are added.

## Checks and evidence

- Authored with the bundled `@oai/artifact-tool` runtime using `scripts/create-lookup-workbook.mjs`; visually inspected all four rendered tabs, including adjusted horizontal-table spacing.
- Recalculated vertical/horizontal examples; changed source quantity 12→15 and restored it; changed a duplicate record and swapped complete duplicate rows to confirm first-match behaviour (8→80), then restored the original records.
- Checked the independent solution in memory, then cleared result cells before export. Checked exact allow-list of four deliberate #N/A cells; no other formula errors were accepted.
- Verified whole-record quantity reorder preserves totals, then restored the source order. Expected filtered quantity 98 and record count 4 are calculated from the supplied six-record data; these are expected results, not an observed native filter execution.
- `scripts/check-lookup-workbook.py` reads the delivered XLSX with Python standard-library ZIP/XML tools: formula text and cached values, trailing-space preservation, blank practice cells, exact deliberate errors, table/autoFilter metadata, CSV record count and totals. This independently verifies the exported file.
- Export validator passed for SHA-256 `9f43d74ffff5be6c6805e88eacdf404d51b6f9f028c7397c1f0aad6683580c3a`. The full textbook suite and new eight-session/worksheet integration check passed; static build and ZIP integrity checks passed. The automated inventory inspected 347 pages with no broken local links, duplicate static IDs or missing image alternatives/dimensions.
- In-app browser inspection confirmed the guide's narrow-column presentation, worked instructions, explained answers and Week 9 lesson 1's workbook/chapter links. This limited browser check is not a cross-browser or assistive-technology assessment.
- The artifact runtime reported exit status 1 despite completing the assertions, rendering and export. Its four deliberate error-cell cases were explicitly checked; the independent exported-file validator is the decisive output check. Do not interpret that runtime exit status as a successful command.

## Limits

Native Excel/LibreOffice opening, sorting/filtering and locale behaviour still require an installed-application/classroom trial. No macros or real personal data are supplied. Workbook examples do not establish full syllabus coverage, accessibility conformance or independent teacher approval. The compact legacy/current-format comparison remains future work.
