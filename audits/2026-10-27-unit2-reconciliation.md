# Unit 2 individual content reconciliation · edition 0.41

27 October 2026 · Year 11 syllabus effective from 2026, `2013/35758[v5]`, printed pp. 11–13. Checked against the current [official SCSA syllabus](https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0006/1232466/Applied-Information-Technology-ATAR-Year-11-Syllabus-for-teaching-from-2026.PDF) and the supplied local extraction.

## Scope and structure

The [readable map](unit2-reconciliation.html), [CSV](unit2-requirements.csv) and [structured hierarchy](unit2-requirements.json) preserve Unit 2 source order, page references, parent/child relationships and direct explanation/model/independent-task/check links. Labels are review paraphrases; local IDs are not official SCSA codes.

**89 rows comprise 34 top-level content bullets, 53 second-level bullets and two nested HTML/CSS entries.** There are 16 parent context rows and 73 leaves. Separate source-text counting found 39 top-level markers, including five introductory area labels that are excluded from the content register. Parent rows are context, not extra assessed outcomes or completion credits.

Every content row has authored evidence locations. This establishes a traceable authoring register, not demonstrated student proficiency, school-program compliance or independent teacher approval. Whole-course assessment/resource policies are not fully represented by this content-only map. Units 1–2 now have this detailed treatment; Units 3–4 retain the broader earlier inventory.

## Targeted teaching fixes

Eight original worked guides supplement the five existing Unit 2 chapters. They extend current tasks rather than adding assessed projects or teaching weeks.

| Guide | Addition and independent application |
|---|---|
| File optimisation | Connects compression purpose/types/bytes, cropping, resampling and screen/print conditions to the actual existing exports. An 800 × 500 image has one quarter the pixels of 1600 × 1000, not necessarily one quarter the bytes. Learners create and inspect two output-specific copies. |
| Versions, cloud and maintenance | Contrasts shared approval/version history, sync and independent backup. Explicitly distinguishes cleanup/cache, HDD fragmentation, drive-aware SSD handling and malware/virus/spyware/spam roles. Learners retain a version/restore record and a separate supervised utility log. |
| LAN design | Models every named medium/component and distinguishes physical star/wireless links from client-server/peer sharing organisation. Original SVG shows provider/service equipment, router, switch, PCs/NICs, server, printer, access point and a roaming laptop. Learners draw a justified new proposal with units and practical limits. |
| Privacy and access | Follows collection, use, authorised staff access versus individual information-access requests, identity risks and disposal. Links digital-resource, skill and web-app barriers to a coordinated fallback. Privacy Act coverage remains an explicit check, not a blanket small-business claim. |
| Commerce and dependence | Separates 24/7 request availability from staff response windows, retail opportunities from guaranteed profit, and visual communication from accessible equivalents and continuity planning. |
| Animation and audio | Connects frame-by-frame, tween and working button decisions to actual software practice. Editing, conversion and exporting remain distinct; the learner must retain sources and inspect delivered files. Existing verified media references are reused. |
| Web and collaboration | Supplies a functional three-page fictional shop reference with relative links and shared CSS, an original navigation map, responsive cards and visible keyboard focus. Learners modify content/media, map every route and retain collaboration/approval decisions. |
| Project management | Gives requirement → action/owner → dependency/time/resource → actual output → check → revision/retest → handover evidence, including resource conflicts and delayed approvals. A plan alone cannot demonstrate a working product. |

## Specific remaining operational gap

`U2-DATA-S2` is explicitly flagged: **actual supervised OS-utility use remains unperformed**. The existing virtual lab, utility guide, disposable ZIP restore and new worked decision model are useful teaching resources; none establishes that a learner has operated an actual OS maintenance utility. A teacher-approved training environment, actual operation and recorded observations are still needed. Native learner animation/audio/web outputs and broader classroom/assistive-technology checks remain unverified too.

Current [OAIC small-business guidance](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business) was checked on 27 October 2026. The privacy model asks for a coverage determination and current procedure rather than offering a comprehensive legal decision. All shop, booking and collaboration examples use invented details and collect no personal information.

## Integration and verification

Links are provided from all five Unit 2 chapters, matching session companions, both Unit 2 worksheets, the practical library and audit/coverage pages. Individual and full-library archives include the pack. The existing 64 × 55-minute Unit 2 lessons and two exam-reserve weeks are preserved.

The regression check validates the 34/53/2 hierarchy, 73 leaves, unique IDs/parents, correct chapter-section destinations, worked/task/check anchors, explicit utility gap, named media/components/formats, three-way reference-page routes, CSS breakpoint/focus rules and lesson integration. Full textbook checks, build, resource audit, ZIP integrity and browser checks are required before publishing. These establish bounded integrity and behaviour, not SCSA approval or actual learner achievement.

Regeneration uses `python scripts/build-unit2-reconciliation.py` and the shared `scripts/reconciliation_common.py`, then `python scripts/package-practical.py unit2-evidence`. After changes run the complete checks/build/audit and inspect the pages. Next substantive batch: Unit 3 individual requirements and targeted fixes, followed by Unit 4.

Release verification: the full automated suite, build and resource audit passed. The inventory inspected 645 pages and found no broken local resources, duplicate static IDs or missing image alternatives/dimensions; ZIP integrity checks passed. Browser checks confirmed 89 rendered requirement rows, the explicit utility-gap label, a rate requirement opening its specific explanation, Home → Services → Contact → Home navigation and keyboard activation. At 390 px, the reference cards used one column without page-wide horizontal overflow; the temporary viewport override was reset. The LAN diagram was visually reviewed and revised to use separate spokes from the switch, avoiding a shared-bus interpretation. These checks do not establish all-browser, assistive-technology or actual learner-performance approval.
