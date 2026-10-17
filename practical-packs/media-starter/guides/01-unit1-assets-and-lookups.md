# Unit 1 · Assets, formats and spreadsheet lookups

**Goal:** prepare a readable event asset and an exact-match resource register. Use an image/vector editor and spreadsheet application already approved for your class. Keep the source folder unchanged; put your own work in a separate working folder.

## A. Inspect before choosing
1. Open `source/repair-cafe-master.png`. It is an original 1600 × 1000-pixel teaching illustration, not a photograph. Identify raster pixels and locate the small venue/time line.
2. Open `source/reuse-mark.svg` in a compatible vector editor or browser. Compare its shapes with the raster master. Explain why changing an extension does not convert either representation.
3. Use **Save As** for an editable working copy. Export one suitable PNG and one JPEG delivery copy using the same pixel dimensions. Record format, dimensions, quality settings, bytes and the readability of the small text. Menu labels vary by editor; locate Export and the format/quality options in your installed version.
4. Inspect at the actual delivery size. Explain a choice for a web notice and for a print proof. Do not treat the smallest file as automatically best. Preserve the source so another export remains possible.

**Checkpoint:** source stays 1600 × 1000; file extensions match their actual format; small text is checked in the exported copy. No universal expected file size is supplied because encoder settings differ.

## B. Build the actual lookup table
1. Import `templates/campaign-resources.csv` into a spreadsheet. Confirm A1:C4 has headers Code, Asset, Quantity and three complete records.
2. In E1 enter Test code and F1 enter Quantity. Put P01, A02, V03 and X99 in E2:E5.
3. In F2 enter `=VLOOKUP(E2,$A$2:$C$4,3,FALSE)` and fill down to F5. Some locale settings use semicolons instead of commas.
4. Predict, then verify: **12, 8, 30, #N/A**. X99 must stay a missing-code case, not silently become 0.
5. On another sheet put P01, A02, V03 in B1:D1 and 12, 8, 30 in B2:D2. Use `=HLOOKUP("A02",$B$1:$D$2,2,FALSE)` and check the result **8**.
6. Select the entire reference table and sort Quantity ascending. Check **A02–Audio–8, P01–Poster–12, V03–Video–30**. Filter Quantity greater than 10: only P01 and V03 should remain visible. Remove the filter and check all records return.
7. Add meaningful headings, units and readable number formatting. Save the workbook in the application’s editable format; a CSV does not retain multiple sheets and formulas as a full workbook does.

**Evidence:** editable workbook, export comparison and one explained missing-code test. A hand trace can support understanding but does not replace performing the software steps when that skill is being practised.
