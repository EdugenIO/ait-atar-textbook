# Practical workflows and worked cases · edition 0.39

27 October 2026 · extends the edition 0.38 audit without changing the 256-session timetable or exam reserves.

## Delivered

Two packs close the resource-authoring portion of the selected audit batch. They do not close native application/classroom verification or independent syllabus approval.

### Production workflows

`practical-packs/production-workflows/index.html` supplies four complete student pathways: image/audio format export; a two-second animation; multi-track publication production; and disposable-file version recovery with a separate supervised OS-utility follow-up. Each includes source inputs, explained operations, an actual reference output, a guided check, an independent transfer and a blank observation record.

- Five 800 × 500 raster exports were actually created and reopened: PNG 111,188 bytes; JPEG 28,592; BMP 1,200,054; LZW TIFF 145,236; palette GIF 76,247. These measurements describe these settings and source, not universal format rankings. The vector source remains available; CGM compatibility is explicitly unverified.
- The actual animated GIF has 24 frames and a 2000 ms cycle. Its stored holds repeat 80/80/90 ms because GIF uses centiseconds; the nominal 12 fps calculation is distinguished from identical per-frame timing.
- Voice and supporting tone were mixed as separate sources, with voice gain 0.85, tone 0.12 and a final fade. The 44.1 kHz, 16-bit PCM reference contains 529,200 frames (12 seconds), maximum absolute sample 19,561 and no samples at the clipping limit. WAV, MP3 and WMA delivery copies all decoded successfully. Human intelligibility and native-player support remain learner checks.
- A real H.264/AAC MP4 was exported: 1280 × 720, 30 fps, 360 decoded video frames and 12 seconds. Start/middle/end decoded frames were visually inspected for readable event content and title placement. Titles, source assets and timings remain separately specified in editable JSON; the file is correctly labelled a specification rather than a native Shotcut project.
- A fresh temporary directory was used for an actual ZIP backup, replacement of a disposable working file and restore. Restored bytes match the approved version-1 digest and differ from version 2. This demonstrates integrity and the recovery-point limit; it does not claim File History, actual OS cleanup, drive optimisation or a malware scan.

Reference generation used Python standard-library file operations, Pillow and FFmpeg. The FFmpeg helper was installed only into a temporary workspace directory, not as a system application. Desktop-editor instructions refer to official Shotcut/Audacity guidance and ask learners to record their installed versions; no GUI open/save session was performed here. Printer profile selection and physical proof approval remain outside this batch.

### Four worked cases

`practical-packs/worked-cases/index.html` supplies:

1. **Mobile trend, Unit 3 hardware:** a bounded 2022/2024 Wi-Fi 11-inch iPad Pro comparison using Apple specifications, with comparable conditions, an accessory constraint, calculated 22 g/approximately 4.7% mass difference, client trade-offs, unknowns and an independent transfer. It is a historical trend case, not a latest-device or purchase recommendation.
2. **Global access restrictions, Unit 4 impacts:** a dated comparison of Wikimedia's 2019 China and 2020 Turkey accounts. Source perspective, the difference between a court decision and network restoration, historical scope and a justified learning-delivery fallback are explicit. No current-country availability claim is made.
3. **Source checking, Unit 4 managing data:** five original fictional records distinguish a superseded approval, current approval, newer derivative repost, unsupported marketing claim and higher-numbered unapproved draft. The worked decision traces authority and status instead of choosing the newest timestamp.
4. **Survey → revision → retest, Unit 4 projects:** 24 paired fictional response rows for 12 invented participants, observation/client notes, actual before/after prototype files, worked calculations and a new transfer task. Completion is 8/12 before and 12/12 after (33.3 percentage points); mean ease is 2.5 then 4.0; median times including timeouts are 30.5 and 21.5 seconds. The case explains order effects, small convenience samples and why the data are not a real study or causal proof.

Primary case references checked 27 October 2026: [Apple 2022 specifications](https://support.apple.com/en-us/111842), [Apple 2024 specifications](https://support.apple.com/en-us/119892), [Wikimedia 17 May 2019](https://wikimediafoundation.org/news/2019/05/17/wikimedia-foundation-urges-chinese-authorities-to-lift-block-of-wikipedia-in-china/) and [Wikimedia 15 January 2020](https://wikimediafoundation.org/news/2020/01/15/access-to-wikipedia-restored-in-turkey-after-more-than-two-and-a-half-years/). Cases request review before reuse and by 27 April 2027. No product or source-image artwork was copied from those sites.

## Integration and verification

Linked from nine relevant chapters, applicable session pages, student/answer worksheets and the practical library. Individual and complete-library ZIPs include the new material. Current area findings and checkpoint reconciliation distinguish newly supplied resources from remaining native-tool checks; the earlier audit remains dated history.

`scripts/check-practical-workflows.mjs` checks bound file hashes, actual GIF frame/delay blocks, PCM duration and sample peak, survey counts/means/medians, recovery digests and lesson integration. `audits/2026-10-27-practical-file-evidence.json` binds the supplied media and data to actual sizes and SHA-256 digests. FFmpeg export/decode checks and visual frame inspection were performed separately from the browser/Node checks.

Regeneration: run `scripts/build-production-references.py --ffmpeg PATH` with Pillow and an approved FFmpeg executable; run `scripts/build-workflow-pages.py` and `scripts/build-worked-cases.py` for authored pages and case fixtures. Reference-image typography uses Arial when available, with a fallback; regenerated files require new measurements/hashes and review. Normal site build/check does not install or execute FFmpeg.

Release checks passed: the full textbook suite, build and expanded resource inventory. The inventory inspected 620 pages with no broken local resources, duplicate static IDs, missing image alternatives or missing image dimensions. ZIP integrity checks passed for both new packs and the complete library. Browser checks observed video metadata at 12 seconds/1280 × 720 with no media error; opened the guided frame-count answer; activated the before prototype's disclosure by keyboard and confirmed the revised prototype displays a labelled venue. Format and device-case pages had no page-wide horizontal overflow at a 390 px viewport, and the reference image loaded. Viewport override was reset. These limited checks do not establish all-browser, human listening or assistive-technology approval.

## Remaining checks

- Learner editor-native animation, audio/video and publication source projects, actual export inspection and recorded revisions.
- Supervised actual OS-utility operation and native drive-aware maintenance in an approved disposable environment.
- Printer-specific colour/output approval, broader browser/player/assistive-technology trials and classroom evidence.
- Exact nested syllabus reconciliation and independent subject review.

The supplied reference results must not be copied into a learner's observed-result log. Use the independent tasks within existing lessons; no extra project or exam-week instruction is added.
