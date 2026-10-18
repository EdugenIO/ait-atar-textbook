# AIT textbook: chapter variety and engagement plan

Status: proposed implementation plan, based on inspection of the shared renderer and chapter/support data. No student-facing changes made by this plan.

## Problem and intended result

All 24 chapters use the same long sequence in student-ui.js: objectives, retrieval, scheduled lessons, explanatory sections, process illustration, section diagrams, chapter visual, vocabulary, worked example, reinforcement activities, misconception, guided practice, practice questions, independent task, transfer practice, quick check, recap and exit question. This guarantees consistency but also makes every topic feel alike. Multiple support layers can repeat the same decision. Some chapters have both a practical-resource panel and a second starter-pack link.

Keep predictable navigation and accurate curriculum coverage. Make the reading experience vary with the concept. Replace redundant material rather than adding another engagement layer. Preserve a public textbook with no accounts, grading, tracking or required submissions.

## 1. Audit and edit before adding features

Create a row for each of the 24 chapters recording: essential concepts, repeated explanations, overlapping questions, current visuals, proposed signature experience, practical links, syllabus mapping and review status. Distinguish useful spaced retrieval from immediate duplication. Retain retrieval that asks students to recall or use an earlier idea; cut blocks that restate the preceding explanation without a new purpose.

Merge repeated instructions, remove duplicate pack links, and move printing, downloads and session planning into a compact resource area. Put a short chapter contents menu near the opening. Keep terminology and explicit explanations available beside the activity.

Done when every existing content block has a keep, revise, move or remove decision, with a coverage destination for every essential concept. Do not delete coverage solely to meet a word-count target.

## 2. Pilot three different chapter experiences

Build typography first, then data recovery, then digital participation. These test visual exploration, a technical process and a discussion-based topic before changing the whole book.

- Typography: one poster with editable alignment, size and spacing; compare the starting and revised layout. A short worked comparison explains why a change helps in its intended context. Provide an equivalent static comparison in print.
- Data recovery: a selectable backup/recovery timeline. Students choose a failure point and inspect which versions can be recovered and what work would be lost. State the backup assumptions clearly; provide a printable scenario and explanation.
- Digital participation: a fictional scenario with different perspectives and constraints. Reveal the consequences of plausible choices and compare trade-offs, without scores or a single artificial winning answer. Source any current factual case studies separately.

Each pilot has a concrete opening problem, concise explanation, one signature experience, one supported task, one application task and a short recap. Keep additional questions as optional practice where useful. Do not force every chapter to have the same number of sections or interactions.

Review all three pilots on desktop, narrow mobile and printed student/answer copies before rollout. Ask a teacher and a small student group whether they can explain the target idea and identify where the page repeats itself; record this review as pending until it happens.

## 3. Chapter-by-chapter rollout

| Chapter | Proposed signature experience | Intended learning action |
|---|---|---|
| u1-brief | Annotated client request | Separate audience, purpose, constraints and missing information |
| u1-elements | Same message, different visual treatments | Observe how an element changes communication |
| u1-principles | Before/after composition comparison | Explain grouping, hierarchy and emphasis |
| u1-typography | Live typography and layout sandbox | Change one variable and explain its effect |
| u1-hardware | Client requirements and device comparison | Justify a choice using relevant specifications |
| u1-applications | File/output preview and editable spreadsheet example | Connect operations to a usable output |
| u1-impacts | Publication decision trail | Check permission, attribution and communication choices |
| u1-projects | A brief developing into a visual plan | Trace the reason for each planning decision |
| u2-data | Compression comparison and version history | Compare trade-offs and select an appropriate version |
| u2-networks | Follow a request through a small-business network | Explain the role of each component |
| u2-impacts | Data-sharing scenario | Compare privacy needs and access barriers |
| u2-applications | Annotated business communication makeover | Select a format and improve the message |
| u2-projects | Prototype, feedback and revision sequence | Connect a revision to observed evidence |
| u3-design | Interface task walkthrough with alternative screens | Explain usability and accessibility choices |
| u3-hardware | Weighted client decision comparison | See how priorities change the recommendation |
| u3-impacts | Collaboration and reuse scenario | Explain rights, responsibilities and consequences |
| u3-applications | Existing timeline lab embedded in a worked story | Explain sequencing, layers and media choices |
| u3-projects | Dependency and milestone walkthrough | Explain the effect of a delayed task |
| u4-data | Backup and recovery timeline | Identify recoverable versions and potential data loss |
| u4-web | Inspect and improve a sample web page | Connect accessibility and reliability issues to fixes |
| u4-networks | Annotated LAN and request-path walkthrough | Explain placement, connections and security boundaries |
| u4-impacts | Contrasting stakeholder perspectives | Explain effects using context and evidence |
| u4-applications | Existing response lab request/validation journey | Follow input through validation, storage and review |
| u4-projects | Service options and evaluation evidence | Justify a recommendation and acknowledge limitations |

Roll out by unit after pilot review: Unit 1, Unit 2, Unit 3, Unit 4. Work in batches of three to five related chapters. Each batch must pass content and navigation review before publication. Integrate existing practical labs rather than creating competing versions of them.

## 4. Shared implementation rules

Keep the page shell, headings, glossary links and resource navigation consistent. Allow topic-specific blocks in the chapter body rather than appending every support module automatically. Reuse only a small set of accessible primitives: comparisons, annotated figures, step-through sequences, parameter controls and scenario reveals. Author their content for each topic.

Each control must change something meaningful, show its effect, have a reset where appropriate and work with a keyboard. No autoplay, decorative animation, forced timing, points, badges or completion tracking. Respect reduced-motion preferences. Provide clear labels, visible focus and a readable static alternative. Keep content usable when an interactive feature is unavailable.

Diagrams should explain a relationship, sequence, scale or decision. Avoid presenting every topic as a generic row of boxes. Use sample outputs, annotated screens, timelines and comparisons where they better communicate the idea. Images and figures need appropriate descriptions; generated imagery must not substitute for technically accurate diagrams.

## 5. Acceptance and publication

For every revised chapter verify:

- Essential concepts and syllabus mappings remain represented; technical claims and examples are checked.
- Each core activity has a distinct learning purpose; duplicate explanations and links have been resolved.
- The signature experience demonstrates an idea that students can explain afterwards.
- Language suits Years 11–12 while preserving correct subject vocabulary.
- Keyboard use, focus, mobile layout, enlarged text and reduced motion work where applicable.
- Student printouts contain a useful static activity and no practice answers; answer copies explain the reasoning.
- Existing glossary, deep links, practical downloads and home navigation still work.
- Ordinary clicks never trigger printing; only explicit print controls do.
- There are no accounts, grading, analytics or required response collection introduced by this redesign.

Run the existing checks and build, add behaviour checks for substantive interactions, and manually inspect the changed pages. Publish each reviewed batch with a short change record. Automated checks do not constitute teacher or student review.

## Immediate next deliverable

A redesigned Typography, grids and composition pilot, plus a before/after content inventory showing which blocks were combined, moved or removed. Review its reading flow and interaction before extending the pattern. This plan itself does not authorise claiming improved learning outcomes; those require classroom evidence.
