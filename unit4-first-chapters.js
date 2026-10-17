export const unit4Topics=[
  {
    "id": "u4-data",
    "unit": 4,
    "week": 1,
    "weeks": [
      1,
      2,
      3
    ],
    "prerequisite": "u2-data",
    "title": "Protecting data and planning recovery",
    "chapterIds": [
      "u4-data"
    ],
    "pages": "10–11",
    "intro": "A lost file can interrupt a whole organisation. Learn how backups, recovery plans and security controls protect information, then explain which choices fit a client’s needs.",
    "goals": [
      "Compare full, differential and incremental backups using a recovery scenario.",
      "Distinguish backup, archiving, audit trails and disaster recovery.",
      "Explain warehouses, marts, cloud storage and data mining.",
      "Match security controls to different risks."
    ],
    "retrieval": [
      "What is the difference between a claim and evidence that supports it?",
      "Why should a plan include checks as well as production tasks?"
    ],
    "vocabulary": [
      [
        "Disaster recovery plan",
        "A documented plan for restoring priority systems and data after disruption."
      ],
      [
        "Audit trail",
        "A record of events that helps trace actions and investigate changes."
      ],
      [
        "Full backup",
        "A copy of all data selected for that backup."
      ],
      [
        "Differential backup",
        "A copy of changes since the most recent full backup."
      ],
      [
        "Incremental backup",
        "A copy of changes since the previous backup in the chain."
      ],
      [
        "Archive",
        "Data kept for longer-term reference or retention rather than everyday use."
      ],
      [
        "Data warehouse",
        "An organised store combining data for reporting and analysis across an organisation."
      ],
      [
        "Data mart",
        "An analysis store focused on a particular department or subject."
      ],
      [
        "Data mining",
        "Analysing data to discover useful patterns and relationships."
      ],
      [
        "Encryption",
        "Transforming readable data into an encoded form that requires an appropriate key to recover."
      ],
      [
        "Digital signature",
        "Cryptographic evidence used to check data integrity and its association with a signing key."
      ],
      [
        "Digital certificate",
        "A digitally signed record binding a public key to an identified subject, such as a domain."
      ]
    ],
    "sections": [
      [
        "Start with what the client must recover",
        "A fictional community centre loses its booking computer. Staff need the booking list before they can reopen. Identify priority services, acceptable downtime and how much recent work could be lost. A disaster recovery plan records who acts, what to restore first, required equipment, contact details and how to check the result. Practise recovery with sample files so the plan is more than a document."
      ],
      [
        "Follow the backup starting point",
        "A full backup copies all selected data. A differential backup copies changes since the latest full backup. An incremental backup copies changes since the previous backup in its chain. Think: full = everything selected; differential = since full; incremental = since previous. The visual below uses a full backup followed by two change-only backups. Real tools may use different names or additional recovery mechanisms, so check their documentation."
      ],
      [
        "Plan the restore as well as the copy",
        "In a simple differential scheme, restore the full backup and the chosen later differential backup. In a simple incremental chain, restore the full backup and every required increment in order. A missing increment may break that recovery chain. Smaller individual backups do not guarantee faster recovery. Check the backup schedule, retention, protected copies and a trial restore against the client’s needs. A backup cannot recover changes made after its recovery point."
      ],
      [
        "Separate backup, archive and audit trail",
        "A backup supports recovery after loss or damage. An archive keeps records for later reference or retention. An audit trail records events, such as who changed a booking and when. These serve different purposes. An event log does not normally contain everything needed to restore the original files. Protect logs from unauthorised changes and access. A synchronised folder can copy accidental deletion too; check version and recovery arrangements before treating it as a backup."
      ],
      [
        "Compare storage by purpose and location",
        "A data warehouse brings data together for analysis across the organisation. A data mart focuses on a department or subject, such as programme attendance. A mart may use a warehouse or other sources. Cloud storage describes storing data using a provider’s remote infrastructure. A warehouse or mart can run in the cloud, so these are not three mutually exclusive choices. Compare access, cost, confidentiality, availability and recovery arrangements."
      ],
      [
        "Find patterns without inventing conclusions",
        "Data mining can reveal attendance patterns that help plan activities. A relationship in the data does not prove that one factor caused another. Check missing records, sample size, collection methods and alternative explanations. Use only appropriate data and permissions. For this chapter, make up attendance totals; do not collect real names or personal details."
      ],
      [
        "Match each control to a risk",
        "Passwords help authenticate users; unique credentials and multi-factor authentication can strengthen account protection. Biometrics use characteristics such as a fingerprint for an identity check. Firewalls filter network traffic using rules. Anti-virus software helps detect or block malicious software but cannot detect every threat. Give users only the access they need, maintain systems and combine controls. No single control stops every kind of loss or misuse."
      ],
      [
        "Keep encryption, signatures and certificates distinct",
        "Encryption protects confidentiality when keys and systems are managed properly. A digital signature helps verify that signed data has not changed and links it to a signing key; confidence in the signer also depends on trusted key identification. A certificate binds a public key to a subject under an issuer’s signature and needs appropriate validity and trust checks. A valid HTTPS connection protects data in transit; it does not prove that a website’s claims are true. Encryption cannot replace a backup or prevent an authorised user from misusing information."
      ],
      [
        "Check evidence before recommending a system",
        "Use a source log: record the author, date, claim and supporting evidence. Verifiability asks whether the claim can be checked. Accuracy asks whether it is correct. Currency asks whether it is up to date for this decision. Compare relevant primary documentation and record unknowns. A recent advertisement is not automatically accurate, and an older explanation of a stable concept is not automatically unusable."
      ]
    ],
    "worked": {
      "title": "Recover a Wednesday booking list",
      "steps": [
        [
          "Sunday",
          "Make full backup F of the selected booking data."
        ],
        [
          "Monday",
          "Record changes A and complete backup I1 in the incremental scheme, or D1 in the differential scheme."
        ],
        [
          "Tuesday",
          "Record new changes B and complete I2, or D2. D2 includes changes since Sunday."
        ],
        [
          "Wednesday failure",
          "The computer fails before another backup. The latest available recovery point is Tuesday’s completed backup."
        ],
        [
          "Incremental restore",
          "Use F → I1 → I2 in order. This simple chain needs both increments."
        ],
        [
          "Differential restore",
          "Use F → D2. D1 is not required for this recovery point."
        ],
        [
          "Check",
          "Open sample bookings, check expected records and report any work after the recovery point as potentially lost."
        ]
      ],
      "explanation": "These are alternative backup schemes, not instructions to mix both chains. The example assumes successful, usable backups and a supported restore process."
    },
    "misconception": [
      "“Cloud storage automatically means we have a tested backup.” Is that justified?",
      "No. Check retention, deletion behaviour, protected recovery copies and a successful restore. Remote location alone does not establish recoverability."
    ],
    "guided": {
      "prompt": "In the example, I1 is lost but F and I2 remain. Can you assume a complete Tuesday restore?",
      "answer": "No. The simple incremental chain requires I1 as well as I2. Check other recovery copies rather than claiming the chain is complete."
    },
    "practice": [
      [
        "Distinguish",
        "“Cloud storage automatically means we have a tested backup.” Is that justified?",
        "No. Check retention, deletion behaviour, protected recovery copies and a successful restore. Remote location alone does not establish recoverability."
      ],
      [
        "Apply",
        "In the example, I1 is lost but F and I2 remain. Can you assume a complete Tuesday restore?",
        "No. The simple incremental chain requires I1 as well as I2. Check other recovery copies rather than claiming the chain is complete."
      ],
      [
        "Compare",
        "Does a data mart have to be stored on the office computer?",
        "No. Its defining feature is its focused analysis purpose, not its physical location. It can be hosted in the cloud."
      ],
      [
        "Explain",
        "Will encrypting the only copy recover an accidentally deleted file?",
        "No. Encryption addresses confidentiality. Recovery needs a suitable backup or other tested recovery mechanism."
      ],
      [
        "Evaluate",
        "A chart links warm weather to higher attendance. Does it prove heat causes attendance?",
        "No. Check other factors, data quality and the study design before making a causal claim."
      ]
    ],
    "task": {
      "title": "Make a community-centre recovery proposal",
      "steps": [
        "Define priority data, acceptable downtime and acceptable data loss for a fictional centre.",
        "Draw alternative full-plus-differential and full-plus-incremental schedules.",
        "Explain the files needed for the same recovery point in each scheme.",
        "Choose storage and security controls, linking each choice to a risk.",
        "Write a short recovery checklist with owners and verification steps.",
        "Simulate a restore using disposable sample files in a separate folder; record results without changing original work."
      ],
      "evidence": "Backup/restore diagrams, control comparison, source log and a sample recovery record.",
      "success": [
        "The restore sequence matches the chosen scheme.",
        "Each security control has a stated purpose and limitation.",
        "The proposal distinguishes an intention from a tested recovery result."
      ],
      "answer": "A sound proposal prioritises bookings, sets recovery needs and identifies complete backup sets. It protects recovery copies and assigns roles. A sample restore provides limited evidence, while a written plan alone does not prove recovery will succeed."
    },
    "quiz": {
      "question": "Which set restores Tuesday in the simple differential example?",
      "options": [
        "F and D2.",
        "D1 and D2 without F.",
        "I2 alone."
      ],
      "answer": 0,
      "explanation": "D2 contains changes since F. Restore the full backup and the selected differential backup."
    },
    "recap": "Choose backups by reasoning backwards from recovery. Keep analysis storage, protection controls and evidence checks connected to the client’s actual needs.",
    "exit": "Explain one decision using the client need, your evidence and a limitation.",
    "downloads": [
      [
        "Unit 4 data and web practice",
        "unit4-data-web-practice.md"
      ]
    ],
    "references": [
      [
        "IBM: backup and restore",
        "https://www.ibm.com/think/topics/backup-and-restore"
      ],
      [
        "IBM: data marts",
        "https://www.ibm.com/think/topics/data-mart"
      ],
      [
        "ASD: security mitigation details",
        "https://www.cyber.gov.au/publication/strategies-to-mitigate-cyber-security-incidents-mitigation-details"
      ],
      [
        "MDN: TLS",
        "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security"
      ]
    ]
  },
  {
    "id": "u4-web",
    "unit": 4,
    "week": 4,
    "weeks": [
      4,
      5,
      6
    ],
    "prerequisite": "u4-data",
    "title": "Publishing reliable and accessible web information",
    "chapterIds": [
      "u4-data"
    ],
    "pages": "10–11",
    "intro": "A useful website needs clear content and dependable behaviour. Explore how people publish online, then check structure, accessibility, forms and browser compatibility.",
    "goals": [
      "Evaluate user-generated content and content-management tools.",
      "Explain HTML, CSS, Web 2.0 and clearly defined uses of Web 3.0.",
      "Apply relevant web standards and conventions.",
      "Test form validation, source quality and browser compatibility."
    ],
    "retrieval": [
      "What is the difference between a claim and evidence that supports it?",
      "Why should a plan include checks as well as production tasks?"
    ],
    "vocabulary": [
      [
        "User-generated content",
        "Content contributed by users, such as reviews, comments or uploaded media."
      ],
      [
        "HTML",
        "Hypertext Markup Language: markup that describes the structure and meaning of web content."
      ],
      [
        "CSS",
        "Cascading Style Sheets: rules controlling the presentation of web content."
      ],
      [
        "Content management system",
        "Software for creating, organising and publishing content, often with roles and revision tools."
      ],
      [
        "Web 2.0",
        "A label commonly used for participatory web services where users create, share and interact with content."
      ],
      [
        "Web 3.0",
        "An ambiguous label; define whether a source means semantic/linked data or decentralised web technologies."
      ],
      [
        "W3C",
        "World Wide Web Consortium: an organisation developing web standards and guidelines with its community."
      ],
      [
        "Form validation",
        "Checking submitted values against stated rules."
      ],
      [
        "Browser compatibility",
        "How well required content and functions work in specified browsers and environments."
      ],
      [
        "Internationalisation",
        "Designing a product so it can support different languages, regions and cultures."
      ]
    ],
    "sections": [
      [
        "Judge contributions as well as collecting them",
        "A fictional community centre wants visitors to suggest activities. User-generated content can add local knowledge and fresh perspectives. It can also contain mistakes, spam, abusive material or information the contributor should not share. Plan moderation, reporting, review responsibilities and accessible contribution methods. A high number of positive comments does not establish that a factual claim is accurate. Practise with invented comments only."
      ],
      [
        "Separate structure from appearance",
        "HTML marks up headings, paragraphs, lists, links and form controls. Files may use .html or .htm extensions. CSS controls presentation, including spacing, colours and layouts. A heading element tells a browser about structure; making a paragraph large and bold does not give it the same meaning. Use meaningful headings and descriptive links before polishing the appearance. JavaScript can add behaviour, but is not a replacement for clear HTML."
      ],
      [
        "Use web-generation labels carefully",
        "Web 2.0 commonly describes participation through shared content, comments and collaboration. Web 3.0 has more than one use: semantic or linked-data discussions focus on machine-readable relationships, while “Web3” often refers to decentralised services and blockchain. State which meaning your source uses and give a specific example. These labels describe ideas and trends; they are not precise version numbers that every website passes through. A website may combine several approaches."
      ],
      [
        "Choose a CMS for an actual workflow",
        "A content management system can provide templates, draft/publish states, roles, media libraries and revision history. Check which features the particular system offers. A centre might let volunteers draft notices while an editor approves publication. A CMS can reduce repeated work, but still needs maintenance, sensible permissions, content checks and accessible templates. Compare tools against the client brief rather than choosing the one with the longest feature list. No account is needed for this exercise."
      ],
      [
        "Connect standards to the person using the site",
        "W3C develops web standards and guidelines to support an interoperable web. The syllabus groups relevant work under Web Design and Applications: HTML/CSS, graphics, audio/video, accessibility, internationalisation and mobile web. Use an appropriate image format and text alternative; provide captions or other required media alternatives; identify the page language; allow text to resize and content to reflow. Keep controls usable with a keyboard. Conventions such as consistent navigation help people predict behaviour. A validator finding no markup errors does not prove complete accessibility or usability."
      ],
      [
        "Validate a value without claiming it is true",
        "A required-field check detects a missing value. A type or format check looks for the expected form, such as an email-shaped address. A range check can restrict a fictional group size to 1–20; a length check can limit a message. Clear labels, instructions and error messages help users recover. A well-formed email address may not exist or belong to the person entering it. Validation checks rules, not every aspect of real-world truth."
      ],
      [
        "Check both browser and server responsibilities",
        "Browser-side validation gives quick feedback, but can be bypassed. A real service must validate submitted data on the server too, and needs appropriate access, security and information-handling controls. This chapter uses an offline form specification and sample cases, not a live collection service. Do not enter real personal information. Distinguish validation from authentication and permission to use data."
      ],
      [
        "Test compatibility using repeatable tasks",
        "List the required tasks: read an activity, follow a link and correct an invalid form entry. Repeat them in the browsers and device contexts available to you. Record browser/version, viewport, input method, expected result and actual result. Test a narrow screen, text zoom, keyboard focus, media alternatives and error recovery. Explain differences and retest revisions. One passing browser trial does not establish that all browsers work. Mark unavailable environments as untested."
      ],
      [
        "Verify content before publishing",
        "Check the author, original evidence and relevant dates for claims about activities or services. Compare an announcement with the centre’s current approved schedule. A plausible page layout or valid HTTPS connection cannot establish that an event time is correct. Keep a source log and a review date, then publish only content that has met the agreed checks."
      ]
    ],
    "worked": {
      "title": "Test a fictional group-size field",
      "steps": [
        [
          "Rule",
          "The field is required and must contain a whole number from 1 to 20 inclusive."
        ],
        [
          "Empty",
          "Reject: explain that a group size is required."
        ],
        [
          "0 or 21",
          "Reject: explain the allowed range."
        ],
        [
          "1 and 20",
          "Accept under this field’s rules: both boundaries are included."
        ],
        [
          "2.5 or letters",
          "Reject: request a whole number in the allowed range."
        ],
        [
          "Server check",
          "A real collection service must repeat the rules on the server. A browser message alone cannot secure submitted data."
        ],
        [
          "Limit",
          "An accepted number does not prove that this many people will actually attend."
        ]
      ],
      "explanation": "Test valid, invalid and boundary cases. Explain what each test establishes and what it leaves unknown."
    },
    "misconception": [
      "“The form accepts an email address, so the address must be real.” Is that justified?",
      "No. A format check can accept a plausible address without proving existence or ownership."
    ],
    "guided": {
      "prompt": "The valid range is 1–20 whole people. Why test both 20 and 21?",
      "answer": "They test an allowed upper boundary and a value just outside it. The expected results are accept and reject."
    },
    "practice": [
      [
        "Distinguish",
        "“The form accepts an email address, so the address must be real.” Is that justified?",
        "No. A format check can accept a plausible address without proving existence or ownership."
      ],
      [
        "Apply",
        "The valid range is 1–20 whole people. Why test both 20 and 21?",
        "They test an allowed upper boundary and a value just outside it. The expected results are accept and reject."
      ],
      [
        "Explain",
        "Why is a large bold paragraph not a substitute for an HTML heading?",
        "Visual styling alone does not provide heading semantics for navigation and assistive technologies."
      ],
      [
        "Evaluate",
        "Does a CMS guarantee that published comments are accurate?",
        "No. Publishing tools and roles support a workflow; moderation and evidence checks are still needed."
      ],
      [
        "Transfer",
        "A page works with a mouse in one browser. What is still unknown?",
        "Other required browsers, keyboard use, narrow layouts, text enlargement and other relevant tasks need their own checks."
      ]
    ],
    "task": {
      "title": "Plan and test a community information page",
      "steps": [
        "Sketch an activity page with semantic headings, meaningful links and an accessible media alternative.",
        "Compare a CMS workflow with direct editing and choose suitable draft/review roles.",
        "Write one explained example each of Web 2.0 and a clearly defined meaning of Web 3.0.",
        "Specify an offline form using fictional values and clear rules.",
        "Create a test table with valid, invalid and boundary cases and expected outcomes.",
        "Review an existing local prototype in available browsers and input contexts; record untested cases and one revision."
      ],
      "evidence": "Page sketch, CMS comparison, source log, form test cases and compatibility/revision record.",
      "success": [
        "Standards and conventions are linked to user tasks.",
        "Validation rules and expected outcomes are explicit.",
        "The evaluation records actual observations and remaining gaps."
      ],
      "answer": "A sound plan uses meaningful structure and an editor review step. Its group-size tests include empty, 0, 1, 20, 21 and a fraction. Browser findings name their context. Unavailable trials remain untested rather than being reported as passed."
    },
    "quiz": {
      "question": "Which claim follows from a successful browser-side range check?",
      "options": [
        "The submitted value is guaranteed truthful.",
        "The value meets the tested range rule in that browser interaction.",
        "Server-side checking is unnecessary."
      ],
      "answer": 1,
      "explanation": "The observed check establishes the tested rule’s behaviour. It does not prove truthfulness or replace server validation."
    },
    "recap": "Publish through a clear review process. Use meaningful structure, relevant standards and explicit validation rules, then test behaviour in the intended contexts.",
    "exit": "Explain one decision using the client need, your evidence and a limitation.",
    "downloads": [
      [
        "Unit 4 data and web practice",
        "unit4-data-web-practice.md"
      ]
    ],
    "references": [
      [
        "W3C: web standards",
        "https://www.w3.org/standards/"
      ],
      [
        "W3C: accessibility fundamentals",
        "https://www.w3.org/WAI/fundamentals/"
      ],
      [
        "MDN: form validation",
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation"
      ]
    ]
  }
];
export const unit4Visuals={
  "u4-data": {
    "title": "Trace the files needed for recovery",
    "graphic": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Backup and restore comparison\"><table><caption>Alternative simple schemes: full on Sunday, changes on Monday and Tuesday</caption><thead><tr><th>Scheme</th><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Restore Tuesday</th></tr></thead><tbody><tr><th>Differential</th><td>F: full</td><td>D1: since F</td><td>D2: since F</td><td>F → D2</td></tr><tr><th>Incremental</th><td>F: full</td><td>I1: since F</td><td>I2: since I1</td><td>F → I1 → I2</td></tr></tbody></table></div><p><strong>Read the arrows:</strong> restore the full copy first, then the required changes in sequence.</p>",
    "caption": "A simplified recovery model. It assumes usable backups; actual software may have additional dependencies.",
    "predict": "I1 is missing. Which illustrated route still has its required backup set?",
    "answer": "The separate differential route uses F and D2. The incremental route shown needs I1 and cannot be assumed complete without it.",
    "change": "The failure occurs after new Wednesday edits but before the next backup. What is not protected by Tuesday’s recovery point?",
    "changeAnswer": "The Wednesday changes. Explain this possible data loss and choose a schedule that matches the client’s recovery needs."
  },
  "u4-web": {
    "title": "Follow a value through the validation checks",
    "graphic": "<div class=\"type-pair\"><div><strong>Browser feedback</strong><span>Enter value → check required/type/range → show a helpful error or allow submission.</span></div><div><strong>Real service</strong><span>Receive request → validate again on server → accept or reject under the service rules.</span></div></div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Boundary tests for a group-size field\"><table><caption>Whole-number group size: 1–20 inclusive</caption><thead><tr><th>Input</th><th>Expected</th><th>Reason</th></tr></thead><tbody><tr><td>Empty</td><td>Reject</td><td>Required</td></tr><tr><td>0 / 21</td><td>Reject</td><td>Outside range</td></tr><tr><td>1 / 20</td><td>Accept</td><td>Allowed boundaries</td></tr><tr><td>2.5</td><td>Reject</td><td>Not a whole number</td></tr></tbody></table></div>",
    "caption": "A static test plan, not a live form. Acceptance means the value meets these rules, not that the claim is true.",
    "predict": "Why should the server reject 21 even if the browser should have blocked it?",
    "answer": "Browser checks can be bypassed. The receiving service must enforce its own rules.",
    "change": "The allowed maximum becomes 30. Which tests should change?",
    "changeAnswer": "Update instructions and both validation layers. Test 30 as accepted and 31 as rejected; 21 now passes the range rule. Keep required, lower-boundary and whole-number checks."
  }
};
export const unit4Transfer={
  "u4-data": [
    "A fresh context: a museum collection",
    "A museum needs long-term records and rapid recovery after a failed drive.",
    "Explain why an archive and a recovery backup may both be needed.",
    "An archive preserves records for later reference; backups support recovery. Define retention and recovery needs, protect copies and test a restore. One label does not prove both purposes are met."
  ],
  "u4-web": [
    "A fresh context: a library workshop",
    "A workshop form allows 1–12 participants but a visitor reports that 12 is rejected.",
    "Propose tests and a correction without collecting real visitor details.",
    "Use fictional values 0, 1, 11, 12, 13 and a fraction. Check the inclusive upper bound in browser and server rules, correct the issue, and retest with accessible feedback."
  ]
};
