# Unit 3 · Build a multi-track publication

**Goal:** create and inspect a short actual sequence, reusable layout and interactive delivery. The source scenes are still cards, not supplied camera footage. Use an approved editor that supports still images, titles and multiple video/audio tracks.

## A. Plan the 12-second sequence
| Time | Base picture | Upper title layer | Audio |
|---|---|---|---|
| 0–4 s | scene-01.png | Repair cafe | narration-reference.wav + lowered supporting tone |
| 4–8 s | scene-02.png | Bring a small item | continuing narration + tone |
| 8–12 s | scene-03.png | Hall 2 · Saturday 10 am | narration ends, tone fades |

The scene cards already contain text. Position an added title where it does not obscure important content, or use a separate title panel. Do not assume that stacking tracks makes every layer visible.

## B. Editor walkthrough — Shotcut example
1. Create a new local project in a working folder and choose an appropriate 1280 × 720, 30 fps project mode for this exercise. Keep the source folder in a stable location.
2. Open Timeline and add a video track for the base cards. Import `scene-01.png`, `scene-02.png` and `scene-03.png`, append them in order and set each duration to four seconds. Inspect the total duration: **12 s = 360 frames at 30 fps**.
3. Add a second video track. Place a transparent colour clip or another supported transparent title source on it, add a text filter and set the title timing using the plan. Confirm that the lower picture remains visible. If your tool handles titles differently, document the equivalent operation.
4. Add separate audio tracks for `narration-reference.wav` and `ambience-tone.wav`. Align their starts at zero. Lower the supporting tone and listen to the combined output. The supplied reference mix shows one possible balance; using separate tracks preserves your ability to revise it.
5. Start with cuts between the base cards. Trial a dissolve/transition on a duplicate of the project. Overlaps can change sequence timing: recheck the total duration and title timing rather than assuming they stayed unchanged. Explain whether the transition helps this message.
6. Apply one purposeful effect on a duplicate clip, inspect the result and compare it with the original. Remove it if it reduces clarity. Record the decision.
7. Save the editable project and its linked-source locations. In Export, check **From: Timeline** where applicable, choose a supported delivery format and export a local copy. Verify output dimensions, duration, playback, intelligible speech and readable titles. This pack supplies inputs and a plan, not an already verified editor-native project.
8. Provide appropriate media alternatives: use the supplied narration text and include the on-screen event information in accessible text. If adding captions, check timing and ensure titles do not obscure them. No pre-timed caption file is claimed to match every edited export.

## C. Reusable publication layout
1. Open `templates/session-layout.svg` in a compatible vector editor. It provides separate background and content groups and named text elements. Duplicate it before editing.
2. Replace title, venue and time with the fictional brief. Create a second version with a deliberately longer title. Adjust frame size, type or line wrapping in your chosen editor so the information fits; do not simply crop the text.
3. Record a colour scheme and the roles of your background, images and labels. An SVG group is an organisation device, not proof that every application offers the same layer controls.
4. Export a display copy and prepare a print proof using the intended output requirements. Check fonts, profile handling, margins and actual-size readability. Do not apply a generic CMYK conversion without the printer’s requirements.
5. Complete the HTML session template from the Unit 2 guide. Use the exported sequence in an approved player or keep the separate audio/text example as a prototype. Test the real navigation and input methods; a screenshot alone is not an interactive publication.

**Evidence:** editable timeline/project, exported sequence, two template variants, output settings and a test/revision record. Application-specific project files and the final video are learner-produced outputs, not pre-generated files in the pack.

Official Shotcut guide: https://www.shotcut.org/howtos/Shotcut%20User%20Guide.pdf
