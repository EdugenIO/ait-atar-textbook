# Maintenance lab repair verification - 19 October 2026

Live reproduction before repair: Preview cleanup changed only feedback at the bottom of the page, outside the clicked section. Changing drive/operation and choosing reset retained those selections.

Fix: each workflow now has an adjacent live status; reset restores all dropdowns, checkboxes, scan/quarantine state, records, space and log; cleanup selection changes invalidate old confirmation. Log download has local feedback and a visible copy fallback. Versioned script/style filenames avoid reusing cached older assets.

Local browser checks: preview, review requirement, cleanup to 2300 MB, protection of Downloads, SSD rejection, HDD operation, scan/quarantine, deletion/older-backup restoration and full reset passed. Operation log downloaded to maintenance-practice-log.txt and its final restoration entries were inspected. Screen capture confirms preview feedback is visible beside the action controls.

Regression script: node scripts/check-maintenance-lab.mjs. It failed on the original missing local feedback before the fix and now checks all workflows, duplicate cleanup, guards, selection review and exported log contents.

The model changes fictional data only. Real OS maintenance is outside this test.
