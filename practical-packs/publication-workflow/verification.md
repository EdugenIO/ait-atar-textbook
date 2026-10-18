# Verification · 18 October 2026

Executed checks:
- Opened raster assets with Pillow/LittleCMS and read actual embedded ICC descriptions. Master, screen JPEG and low-resolution example contain sRGB; untagged PNG has no embedded ICC.
- Checked raster dimensions and file byte counts against asset-evidence.json. Screen reference is 1260 × 888 and below the fictional 500000-byte limit.
- Visually inspected the actual screen JPEG: title, date, venue, joining instruction and palette are present and not clipped.
- Calculator numerical checks: 2520 pixels at 210 mm = 304.8 PPI; 420 pixels at 210 mm = 50.8 PPI. Zero/negative/invalid inputs return guidance.
- In-app browser at local preview: entered 420 and 210, activated Calculate, observed 50.8 result; changed placed width to 0 and observed recovery guidance.
- Site link checks and ZIP integrity checks run separately in release checks.

Not executed: Photoshop/InDesign desktop operations, PDF/X validation or a printer-specific PDF export, calibrated soft proof, physical proof, printer approval, independent classroom/curriculum review. These remain explicit learner/teacher/printer tasks. The screen graphic is an actual export; the print workflow is a supplied procedure with unresolved real output conditions, not an approved production file.
