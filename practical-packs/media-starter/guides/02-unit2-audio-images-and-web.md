# Unit 2 · Export, edit and author

**Goal:** make and check actual delivery files. Use approved available applications; no install or account is required by the pack.

## A. Image experiment
1. Duplicate `source/repair-cafe-master.png` into your working folder. In your editor, crop one copy to focus on the useful objects. Explain any information the crop removes; do not present a crop without needed event details as a complete poster.
2. From a fresh copy, use the image-size/resampling control to make an **800 × 500** version. The pixel count changes from 1,600,000 to 400,000: one quarter of the original. File bytes need not fall to one quarter.
3. Export two same-size JPEG copies at different quality settings. Compare bytes and small-text detail at the same viewing size. Keep the unaltered master and record which variable changed.
4. Make an online delivery choice and a print-proof choice. Inspect each in its actual use; do not try to recover detail simply by changing a resolution label.

## B. Audio walkthrough — Audacity example
1. Open the supplied `source/narration-raw.wav` using File → Open, or import it into an empty approved editor. The source includes exactly one added second of silence at each end, around synthetic narration that may contain its own short pauses.
2. Save an editable project in your working folder. In Audacity, project saving is separate from exporting audio.
3. Zoom into the timeline. Select and remove only the deliberately added first second, then remove the deliberately added final second. Keep every spoken word. Your result should be about **11.868 seconds** if only those additions were removed.
4. Listen for complete words and joins. You may add a brief fade at an appropriate quiet edge, but do not fade away the spoken message. Keep comfortable playback volume.
5. Import `source/ambience-tone.wav` as a second track. It is a generated practice tone, not a location recording or song. Name the tracks Voice and Supporting tone. Use the tone track’s gain/volume control to lower it beneath the voice; start with about −9 dB and adjust by listening.
6. Preview the combined tracks. Check that the tone does not mask speech and that the output does not clip. Record the settings rather than claiming one value works for every recording.
7. Save the editable project. In Audacity use **File → Export Audio** to export a local WAV delivery copy. Listen to that exported file independently. Compare with `source/reference-mix.wav`, a supplied illustrative mix, while explaining why your exact waveform may differ.
8. Keep `source/narration-script.txt` as the text equivalent. The supporting tone carries no additional message.

## C. Responsive publication
1. Open `templates/session-template.html` in a browser and an approved text or web editor. Make a working copy without moving its source assets; if you relocate the HTML, update its relative paths.
2. Replace the marked title, venue and time placeholders with the fictional brief: Repair cafe, Hall 2, Saturday 10 am. Keep the fictional-event notice.
3. Trace and test Overview → Session details → Overview and Overview → Audio and transcript → Overview.
4. Inspect the HTML headings/links and the CSS `.facts` two-column layout. At a narrow width the columns stack. Test actual keyboard links, browser zoom and media playback.
5. Compare with `templates/completed-publication.html` after attempting your changes. Preserve your source and test the delivery copy.

**Evidence:** exports and settings, editable audio project, WAV delivery, completed linked HTML and a test/revision log. The pack does not claim an Audacity project was produced for you: you create and retain that editable project.

Official references (menu wording can vary by version):
- https://support.audacityteam.org/basics/audacity-editing
- https://support.audacityteam.org/basics/saving-and-exporting-projects
- https://support.audacityteam.org/audio-editing/mixing-and-panning-tracks
