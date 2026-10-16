# AIT ATAR textbook website plan

Prepared 16 October 2026. Status: initial scaffold built and repository created at https://github.com/EdugenIO/ait-atar-textbook. GitHub Pages workflow targets https://edugenio.github.io/ait-atar-textbook/.

## Goal and hosting

Create a companion textbook for Western Australian Applied Information Technology ATAR Years 11 and 12 at https://edugenio.github.io/ait-atar-textbook/.

Use a separate repository named `ait-atar-textbook` under the existing `edugenio` GitHub account. A GitHub Pages project site provides the intended path while allowing independent content updates and deployment. Confirm the existing CS repository's framework, licence and deployment setup before reusing its components. The CS site was retrieved during implementation: static HTML/CSS/JavaScript, hash navigation, bookshelf sidebar, serif headings and paper/green palette. The AIT scaffold follows this structure with newly authored code.

## 1. Establish the curriculum baseline

- Use the supplied Year 11 syllabus for teaching from 2026 and the official Year 12 syllabus for teaching from 2027 as the selected curriculum baseline.
- The user selected the Year 12 syllabus for teaching from 2027 on 16 October 2026. Its document identifier is 2013/35142[v6]. Display this baseline on the site; the older Year 12 attachment is historical reference only.
- Build a coverage register with one row per syllabus knowledge/skill requirement and nested requirement: internal ID, syllabus version, unit, content area, source page, requirement, chapter, practical activity, review question and review status. Internal IDs must be clearly distinguished from official SCSA codes.
- Keep required learning separate from optional enrichment and software-specific tutorials.
- Write original explanations, diagrams and practice questions. Link to official syllabuses and exam resources, and record attribution/licensing for reused assets.

Official course page: https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/technologies/applied-information-technology

## 2. Site structure

Primary navigation: Home | Year 11 | Year 12 | Projects | Revision | Glossary | Syllabus coverage.

Organise chapters by unit, with content-area tags for cross-topic browsing. The following are proposed chapter groups, not an exhaustive syllabus mapping.

| Year/unit | Official unit title | Proposed chapter groups |
| --- | --- | --- |
| Year 11, Unit 1 | Media information and communication technologies | Design concepts; hardware and software selection; impacts of technology; media application skills; planning and producing digital solutions |
| Year 11, Unit 2 | Digital technologies in business | Managing data; networks; business technology impacts; business application skills; client projects and evaluation |
| Year 12, Unit 3 | Evolving digital technologies | Design relationships and interfaces; device specifications and usability; intellectual property and technology impacts; multimedia and digital publishing; project approaches and planning |
| Year 12, Unit 4 | Digital technologies within a global society | Data management and security; web standards and online systems; networks and LAN design; global technology impacts; online application skills; outsourcing, service agreements and evaluation |

Year 12 learners should have links back to relevant Year 11 prerequisite lessons. The Year 12 content-area destinations and printed page references use the selected 2027 syllabus.

## 3. Standard lesson design

Each lesson includes:

1. Learning goals, syllabus mapping and prerequisite links.
2. Plain-language explanation and key vocabulary.
3. Annotated visual or worked example in a realistic client context.
4. Guided practical activity where applicable, with starter assets and expected evidence.
5. Common misconceptions and comparison examples.
6. Retrieval questions and application questions with explanations or marking guidance.
7. Summary, next lesson and source links.

Teach concepts independently of a particular application, with optional application-specific walkthroughs. Date screenshots and tutorials that may become outdated.

## 4. Practical and revision resources

Suggested original project briefs:

- Unit 1: produce a media campaign for a school or community event.
- Unit 2: develop a business communication package with a network proposal.
- Unit 3: create an interactive publication or multimedia product for a client.
- Unit 4: propose a secure online information solution, including LAN design and evaluation.

Supply reusable client briefs, storyboards, site maps, Gantt charts, asset/source logs, test plans and evaluation templates. Projects are learning resources; school assessment outlines remain a separate teacher responsibility.

Build a question bank tagged by year, unit, topic, syllabus requirement, command verb and difficulty. Include multiple choice, short answer, extended response and integrated client scenarios. Distinguish original practice material from official past papers; link to official papers and marking keys.

## 5. Technical approach

- First inspect the CS site's source and reuse suitable navigation, typography and lesson components where permitted. Choose the framework after that audit.
- Prefer a static site for GitHub Pages, with lessons stored separately from UI components in Markdown/MDX or structured data supported by the chosen framework.
- Configure the deployment base as `/ait-atar-textbook/`; use base-aware asset and internal links.
- Match routing to the existing site's approach where practical. Hash routing is compatible with Pages; clean URLs require generated pages or an intentional fallback.
- Include responsive navigation, keyboard support, readable contrast, image alternatives, search, breadcrumbs and printable lessons.
- Optional later features: browser-local bookmarks, progress and quiz history. Use an AIT-specific storage namespace because GitHub Pages project sites share an origin.
- Deploy through GitHub Actions with a build and link check. Include the supported syllabus version, content update dates and a correction/report link.

## 6. Delivery milestones

| Milestone | Deliverable | Completion check |
| --- | --- | --- |
| 1. Curriculum and site audit | Syllabus comparison, coverage register, CS component audit and agreed contents | Every syllabus requirement has a planned destination; supported teaching years recorded |
| 2. Site foundation | Repository, navigation, lesson template, styling and Pages workflow | Build succeeds; preview works under the project path; mobile and keyboard navigation checked |
| 3. Pilot lessons | One complete Year 11 lesson and one complete Year 12 lesson, each with activity and questions | Review depth, layout, terminology and answer quality before scaling |
| 4. Year 11 textbook | Units 1 and 2, two project briefs, glossary and revision | All Year 11 coverage rows have reviewed learning resources |
| 5. Year 12 textbook | Units 3 and 4, two project briefs and scenario practice | All selected Year 12 coverage rows reviewed; prerequisites linked |
| 6. Publication review | Content audit, link/asset checks, accessibility review and release | No missing required topics or placeholder lessons; deployment and refresh links work |

Build the complete structure first, then finish one unit at a time. Mark incomplete sections clearly during development. Do not label the textbook complete until both knowledge and practical skills are covered.

## Next implementation step

The CS source structure has been inspected, the companion repository scaffolded, and two draft pilot lessons created. Expand the 20-row section register into a requirement-by-requirement mapping, review the pilots, then author Unit 1 in depth.


