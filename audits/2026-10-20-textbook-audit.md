# Textbook audit — 20 October 2026

Baseline: d10c719, edition 0.35. Corrections prepared as edition 0.36. This is an editorial, source-integrity and bounded browser audit, not independent curriculum or WCAG certification.

## Outcome

The textbook is usable as a substantial classroom draft: 24 main chapters, all four units, 256 scheduled lessons, separate student/answer worksheets, visual practice and six practical packs. No blocking navigation or missing local media defects were found in the tested paths. Three minor presentation/documentation issues were corrected. Practical evidence and independent subject review remain the main completion gaps.

## What was actually checked

| Area | Check and evidence | Result / limit |
| --- | --- | --- |
| Source and resources | Generated 24 complete chapters and all 182 focused/support routes; inspected these plus 138 standalone HTML pages (344 total). Checked local href/src targets, static IDs and image alternatives. | No missing local targets, duplicate static IDs or missing image alternatives. This does not exercise every link interaction or validate every external destination. Machine-readable results: `2026-10-20-automated-inventory.json`. |
| Mobile layout | Opened all 24 main chapters at a 390 × 844 CSS-pixel viewport; checked document width and runtime IDs. | No document-level horizontal overflow or duplicate runtime IDs. Wide tables/diagrams scroll inside their regions; sampled regions have names and keyboard focus. Internal diagram scrolling is intentional, not a claim that every visual fits on one phone screen. |
| Practical pages | Inspected 20 observed library/guide/template/lab pages at the same mobile width. Checked page overflow, h1 count, control names and completed-image failures. | One h1 and no document overflow on each. The web-standards starter's unlabelled `people` field is an intentional exercise defect; its finished example has a label. It must not be counted as an unexplained production defect. |
| Text contrast | Screened displayed HTML text against computed opaque ancestor backgrounds on the 24 chapters and 20 practical pages. Used 4.5:1 for ordinary text, 3:1 for large text. | One small interface-example annotation measured about 4.45:1. Corrected the muted token and made the nested annotation 13px with ink colour. This screen excludes SVG text, translucent/gradient compositing and hidden disclosure text; it is not complete conformance testing. |
| Media structure | Checked 467 generated/standalone img occurrences, local image targets and alternative text; existing checks validate 80 unique bundled images across 332 render variants, image dimensions, SVG descriptions and PCM/reference media. | Two publication-template images lacked width/height reservations; corrected to their measured 1600 × 1000 source dimensions. Templates and matching portable archives updated together. Lazy images not requested in a viewport were not classified as broken. |
| Content | Editorial review of chapter explanations, goals, examples and checks, with attention to design terminology, lookup logic, storage/recovery, protocols, validation, service arithmetic and qualified legal claims. Reviewed the earlier 185-checkpoint inventory and remaining-work record. | No new factual blocker was established in the material inspected. Examples distinguish minimum requirements from usability, validation from truth, synchronisation from backup, SSL wording from modern TLS, 802.11 from 802.1X, and SLA response from restoration. This is not an exhaustive fresh reconciliation of every nested official syllabus item. |
| Reference currency | Spot-checked current official OAIC small-business guidance and IP Australia design-right enforcement guidance; consulted W3C motion guidance. | The existing qualified small-business and design-certification explanations remain supported by the checked official sources. All 63 unique external destinations were inventoried, not exhaustively tested for availability or legal completeness. |
| Practice and downloads | Existing checks cover 24 instructional activities, practice stimuli, answer separation, printable images, chapter/resource destinations, portable archives, animation and local response handling. | All automated checks and build passed. Automated print checks verify disclosure/answer handling; physical print proofs and a fresh page-by-page exported PDF review were not performed. |
| Timetable | Existing checks verify 64 × 55-minute lessons per unit, 16 teaching weeks and two separate exam weeks. | No pacing arithmetic regression. Actual classroom task completion and interruptions still need trial evidence. |

Additional browser checks: all 24 desktop chapter pages had no document overflow, missing in-page section targets or unlabelled form controls. The skip link focused `main`. A named phone-width SVG region accepted keyboard focus and ArrowRight moved its scroll position by 40px. The completed publication's audio loaded a 12-second track with controls, no autoplay and no media error; its transcript is alongside the player. The source image decoded at 1600 × 1000. Two representative generated process illustrations (network and recovery) were visually inspected; this is not a claim that every embedded label has been independently checked.

## Corrections in this batch

1. **Low-priority contrast/legibility:** the nested note in the Unit 3 interface comparison had a computed size around 10.8px and contrast about 4.45:1. The secondary-text token is now darker; this annotation uses 13px ink text. The intentionally weak example's information arrangement is preserved.
2. **Low-priority media stability:** the two media-starter publication templates now reserve the source image aspect ratio using width and height attributes. Updated the individual media ZIP and complete practical-library ZIP, including the nested media archive.
3. **Low-priority documentation:** README now leads with the current snapshot and explicitly labels earlier local/unpublished milestones as historical. These earlier statements do not describe today's deployment.
4. Added a repeatable `npm run audit` inventory that fails on missing local file targets, duplicate static IDs, missing alternatives or missing image dimensions. The audit is additional to the existing interaction checks.

## Open findings, in priority order

### P2 — Practical claims still need actual operational evidence

The maintenance resource is a model plus supervised follow-up guidance. It does not establish that a real approved utility and version restore were executed successfully. Supply a disposable working set, concrete before/after/restore steps and actual observation records. Native editor exports, printer-specific colour handling and physical proofs also remain unverified. Do not reclassify a supplied procedure as an executed result.

### P2 — Spreadsheet learning needs a complete editable exemplar

The chapter explains exact-match VLOOKUP/HLOOKUP and supplies data, but the resource gap remains a worked editable workbook with formulas, unknown/duplicate-code cases and safe whole-record sorting/filtering. The expected result should be inspectable, not only described. This is a depth gap, not evidence that the current formula examples are wrong.

### P2 — Reconcile required learning against sufficient evidence

The 185 inventory rows are grouped local checkpoints, not official syllabus codes or a completion percentage. Reconcile each nested requirement against explanation, worked operation and learner practice. Record partial depth and reviewer decisions. Existing chapter presence is not sufficient completion evidence.

### P2 — Finish accessibility and usability verification

The mobile and basic keyboard/contrast checks are useful but incomplete. A second browser, screen-reader tasks, 200%/400% zoom/reflow, SVG text legibility, focus behaviour across every lab, and exported/physical print output remain to be checked. Dense figures need explicit instruction that they can be scrolled or opened full-size; do not solve their readability by shrinking all labels.

### P3 — Improve evidence-to-revision and current case resources

Supply a fictional survey/observation set with worked analysis, limitations, justified changes and retests; add dated device/global cases with claim-level primary evidence. Keep supplier claims, illustrative results and measured observations distinct. Several chapters deliberately ask students to research; those prompts do not replace a worked case.

## References used in the spot checks

- [OAIC: small business](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business) supports the qualified turnover/exemption discussion; exceptions and coverage checks remain necessary.
- [IP Australia: applying for a design right](https://www.ipaustralia.gov.au/design-rights/how-to-apply-for-a-design-right) supports distinguishing registration from certification before enforcement.
- [W3C: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) informed motion review. The animation starter requires Play and supplies Pause; this does not certify every motion-related accessibility requirement.

Keep all chapters labelled classroom drafts until independent subject review and sufficient operational/classroom evidence support a status change.
