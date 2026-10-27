# Chapter image diversity · edition 0.44

The main repetition came from seven process WebPs assigned to 24 different chapters. The project illustration appeared in six chapters; design, rights and media each appeared in four; computer, network and recovery each appeared in two.

Seventeen reused placements now have original topic-specific SVG illustrations. Seven original WebPs remain, each in one matching chapter: Unit 1 brief, elements, hardware and impacts; Unit 2 networks; Unit 3 applications; Unit 4 data. This gives 24 distinct process images rather than renaming or recolouring identical artwork.

The replacements use different teaching compositions: balance comparison, actual typography specimen, vector/pixel enlargement, criterion/revision pair, crop/resample branches, data lifecycle, frame/tween lanes, prerequisite graph, interface wireframe, mobile/fixed role comparison, separate rights decisions, Gantt/resource plan, CMS/page specimen, staff/visitor boundaries, cloud questions, tutorial storyboard and service/evaluation evidence.

The [gallery](../assets/processes/index.html) links all 24 images and chapters. SVGs have original-textbook credits; retained generated WebPs keep their AI-generation credits. Descriptive alternatives, dimensions, concept-specific numbered explanations and limitations are retained. The same chapter intentionally uses its image in full reading, focused walkthrough and offline worksheets. That continuity is not counted as cross-topic repetition.

`scripts/check-process-diversity.mjs` verifies distinct paths and SHA-256 hashes for the 24 process images, accurate SVG/WebP data types in downloaded worksheets, original-SVG attribution, and the full main-chapter `<img>` inventory. The current inventory has 97 different image files and no file reused across different main chapters. Inline HTML/SVG visual blocks, logos and repeated views of the same chapter are outside that file-based comparison. File/hash uniqueness does not alone establish pedagogical quality or demographic representation.

All automated checks passed. The resource audit inspected 667 pages with no broken local links, duplicate IDs or missing image alternatives/dimensions. Browser review confirmed 24 gallery cards and 24 distinct image sources, checked all 17 new SVGs for text outside their rendered canvas, visually inspected the gallery and a publishing illustration, and verified a hardware walkthrough uses its new topic image with the correct credit. At 390 px the gallery used one column without page-wide overflow; the viewport override was reset. These are bounded Chromium observations, not universal accessibility or cross-browser approval.

Regenerate the original assets/metadata/gallery with `node scripts/build-process-variants.mjs`, then run the normal checks/build/audit. The build includes `process-variants.js`, and all eight offline worksheets embed the appropriate SVG or WebP bytes.
