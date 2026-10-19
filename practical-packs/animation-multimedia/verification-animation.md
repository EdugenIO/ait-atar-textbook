# Animation playback repair - 19 October 2026

Live reproduction: the original default used 24 identical x=40 positions. Play reached 2 seconds/frame 24 but still showed x=40. Loading the reference reached x=540, demonstrating that the playback engine ran but the default appeared broken.

Repair: load moving reference positions initially; keep the stationary example behind an explicitly labelled control; Play validates and applies current edits; immediate playback feedback above the stage; seek slider; queued animation frames cancelled on pause/reset/data/mode changes; pause/play availability reflects state; wider SVG viewBox preserves the wheel at allowed edge positions. Still-frame export explicitly identifies its output.

Local browser: default completed at x=540; invalid text was rejected; stationary control explained no movement; tween seek to 2 seconds showed x=540; SVG export downloaded and was inspected. Regression script checks intermediate movement, pause/resume, final position, input handling, tween midpoint, static exercise and export.

Command: node scripts/check-animation-playback.mjs. The same regression failed against the original stationary default before the fix.

Timing is a browser teaching model, not a guarantee of exact display refresh or editor-native output. SVG download contains one frame, not a full video.
