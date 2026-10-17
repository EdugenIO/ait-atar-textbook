export const unit4LearningTopics=[
  {
    "id": "u4-applications",
    "unit": 4,
    "week": 6,
    "weeks": [
      6,
      13,
      14
    ],
    "prerequisite": "u4-web",
    "title": "Creating online tutorials and data-collection forms",
    "chapterIds": [
      "u4-applications"
    ],
    "pages": "12",
    "intro": "A learning resource should help someone complete a task, not just watch information. Build a short tutorial, provide useful practice and collect only the information needed for a clear purpose.",
    "goals": [
      "Explain how digital communication can support learning.",
      "Choose available online-software functions for an audience and task.",
      "Create a tutorial with a model, supported practice and useful feedback.",
      "Build and test a fictional-data form with clear instructions and appropriate handling."
    ],
    "retrieval": [
      "Why does a correct format not prove a form value is true?",
      "What is the difference between accessibility and availability?"
    ],
    "vocabulary": [
      [
        "Learning objective",
        "A clear statement of what a learner should be able to do after an activity."
      ],
      [
        "Synchronous communication",
        "Communication that takes place at the same time, such as a live discussion."
      ],
      [
        "Asynchronous communication",
        "Communication accessed at different times, such as a recorded tutorial or forum."
      ],
      [
        "Scaffolding",
        "Temporary support that helps a learner complete a task before working more independently."
      ],
      [
        "Feedback",
        "Information that helps someone understand and improve their reasoning or performance."
      ],
      [
        "Form field",
        "A control used to enter or choose a value."
      ],
      [
        "Data minimisation",
        "Limiting collected information to what is needed for a stated purpose."
      ],
      [
        "Response validation",
        "Checking entered values against specified rules before accepting them."
      ],
      [
        "Test case",
        "A defined input or action with an expected outcome used to check behaviour."
      ]
    ],
    "demo": "unit4-learning-demo.html",
    "downloads": [
      [
        "Tutorial and form planning practice",
        "unit4-learning-practice.md"
      ],
      [
        "Offline tutorial and form demonstration",
        "unit4-learning-demo.html"
      ]
    ],
    "sections": [
      [
        "Start with one task the learner can complete",
        "The fictional community centre needs a guide for volunteers choosing an activity session and checking a group size. Write a narrow objective: the learner can select a listed workshop and enter a whole-number group size from 1 to 12. Avoid a vague goal such as “understand computers”. Identify what learners already know, which terms need explanation and the devices or access needs they may have. Define success before choosing a tool."
      ],
      [
        "Match digital communication to the learning need",
        "A live demonstration can let learners ask immediate questions, but depends on a shared time and connection. A recorded or text tutorial can be revisited at different times, but needs a way to resolve confusion. A discussion space can support explanations between peers, with moderation and clear participation expectations. Choose a combination that serves the task. A video call, a document or a forum is not automatically educational simply because it is online."
      ],
      [
        "Choose functions available in an approved tool",
        "A shared document may offer headings, images, comments and version history. A presentation tool may support links, speaker notes and media. A learning platform may organise resources and discussion; a form tool may supply field types and validation. Check the actual tool’s available functions, export options, access permissions and accessibility. Use an existing approved classroom tool if one is available. The downloadable local demonstration provides a no-account alternative for exploring the same decisions."
      ],
      [
        "Use explain, show, try and review",
        "Explain the goal in plain language. Show one complete example and say why each choice is made. Give a similar task with a small amount of help, then a new task the learner can attempt independently. Feedback should identify the rule or reasoning and suggest a next action. “Wrong” alone does not explain how to improve. Keep practice optional and free of marks or progress tracking in this textbook."
      ],
      [
        "Break the tutorial into useful chunks",
        "For this task, use three chunks: choose a workshop, enter a group size, then check and correct the values. Keep instructions close to the relevant control. A numbered screenshot can help with an unfamiliar interface, but should identify the version and be updated if the interface changes. Use readable headings, meaningful links and concise sentences. Ask the learner to predict a result before opening an explanation rather than adding more text for every possible situation."
      ],
      [
        "Plan alternatives and learner control",
        "A text tutorial can work without audio. If using video with relevant speech or sounds, provide checked captions; ensure essential visual information is also available through appropriate description or another suitable alternative. A transcript does not always replace every requirement for the media. Let learners pause, replay or revisit steps where the medium supports it. Check keyboard operation, focus, text enlargement and narrow-screen layout. Do not assume one successful mouse trial establishes complete accessibility."
      ],
      [
        "Design the collection purpose before the fields",
        "A real session request might need information that lets staff handle that request. For classroom practice, the form needs only an invented workshop selection and a group size: it needs no name, email, health details or uploaded file. For any real collection, explain the purpose, intended recipients, access and handling arrangements before release. Check the tool’s settings and relevant organisational requirements. Do not collect extra details just because a form template includes the fields."
      ],
      [
        "Give fields clear labels, rules and recovery help",
        "Use visible labels connected to their controls and identify required fields. Put the whole-number range beside the group-size field before users enter a value. If it is invalid, say what needs to change and where, while preserving other useful entries. Do not communicate errors through colour alone. A helpful message is “Enter a whole number from 1 to 12”, rather than “Invalid input”. The demonstration uses a check button and descriptive messages; it does not send a booking request."
      ],
      [
        "Test valid, invalid and boundary values",
        "Write expected results before testing. For a required group size from 1 to 12, check empty, 0, 1, 12, 13, 2.5 and letters. Test a missing workshop too. Record whether instructions, errors and correction work with keyboard use and in available browsers. Browser-side checks support immediate feedback but can be bypassed: a real receiving service needs server-side validation and appropriate security. The local demo has no server submission and cannot demonstrate those server checks."
      ],
      [
        "Keep evidence and review the result",
        "Ask a trial learner to complete the tutorial task without pointing at the answer. Record where they hesitate, what they do and whether the result meets the objective. Review the feedback wording and the form’s expected results. Revise one issue and repeat the relevant check. If an approved online tool is used, inspect its actual sharing and response-storage settings as well. A local demonstration does not establish that an online deployment has the same behaviour or permissions."
      ]
    ],
    "worked": {
      "title": "Teach a volunteer to check an activity request",
      "steps": [
        [
          "Objective",
          "Select a listed workshop and check a whole-number group size from 1 to 12 using fictional values."
        ],
        [
          "Model",
          "Choose Design workshop and enter 4. Explain that 4 is a whole number within the stated range."
        ],
        [
          "Guided trial",
          "Keep the workshop selected and try 13. Predict the message, check it and explain the upper boundary."
        ],
        [
          "Correction",
          "Replace 13 with 12. Explain why the upper boundary is included and check again."
        ],
        [
          "Independent trial",
          "Choose Media workshop, predict what happens with 2.5 and then correct it to a valid whole number."
        ],
        [
          "Feedback",
          "Explain the violated rule and give a clear next action without deleting unrelated entries."
        ],
        [
          "Limit",
          "A valid practice value meets the stated rules; it does not reserve a place, prove attendance or verify server-side handling."
        ]
      ],
      "explanation": "The sequence moves from an explained model to supported correction and independent use of the same rules."
    },
    "misconception": [
      "A tutorial is effective if every learner has opened the page.",
      "Opening a page does not demonstrate the intended task. Observe the task and use the result to improve the explanation and support."
    ],
    "guided": {
      "prompt": "A learner enters 13 when the allowed group size is 1–12. Write feedback that helps them recover.",
      "answer": "Explain the range beside the field: “Enter a whole number from 1 to 12.” Keep the selected workshop and allow the learner to correct the value, then check again. Do not rely on a red border or a message saying only “wrong”."
    },
    "practice": [
      [
        "Plan",
        "What is more useful than “learn how forms work” as an objective for this tutorial?",
        "For example: select a listed workshop and enter a whole-number group size from 1 to 12, using the instructions to correct an invalid value. This can be observed."
      ],
      [
        "Compare",
        "When could an asynchronous tutorial be useful, and what support might it still need?",
        "It can be revisited at a convenient time and pace. Learners may still need clear examples, alternatives and an appropriate way to ask questions."
      ],
      [
        "Apply",
        "Why leave real names and email addresses out of this practice form?",
        "They are not needed for the learning task. Fictional workshop and size values let students explore behaviour without collecting personal information."
      ],
      [
        "Test",
        "What should happen for 12, 13 and 2.5 under the stated rule?",
        "Accept 12 as an included boundary. Reject 13 as above the range and 2.5 as not a whole number. Also test empty and lower-boundary cases."
      ],
      [
        "Evaluate",
        "A form tool shows no keyboard focus. Can correct validation compensate?",
        "No. Keyboard interaction needs its own attention. Validation behaviour and accessible operation are related but distinct checks."
      ],
      [
        "Distinguish",
        "Does the offline demo establish that an online form stores responses safely?",
        "No. The demo does not submit or store responses. A real service needs its actual data flow, permissions, retention and receiving-side behaviour checked."
      ]
    ],
    "task": {
      "title": "Build a small tutorial and fictional-data form",
      "steps": [
        "Define an audience, prerequisite and observable task objective.",
        "Choose an approved available tool or the local demonstration as a starting point; justify relevant functions.",
        "Write a concise explanation and complete model, then a guided and independent practice task.",
        "Provide suitable media alternatives and check the instructions with keyboard, enlarged text and narrow layout.",
        "Specify only the fictional fields needed for practice, with labels, rules and clear error messages.",
        "Run the planned valid, invalid and boundary cases and record expected versus observed results.",
        "Observe a trial learner, revise an issue and retest. If using an online tool, inspect sharing and response-handling settings without collecting personal data."
      ],
      "evidence": "Tutorial plan and resource, field specification, test log and an observation/revision record.",
      "success": [
        "The resource helps a learner complete the stated task.",
        "Fields and feedback use clear rules and support recovery.",
        "Evaluation distinguishes local observations from untested online and server behaviour."
      ],
      "answer": "A suitable tutorial models Design workshop with 4, guides correction of 13 to 12 and asks the learner to reason about 2.5 independently. Its form needs no personal details, has explicit labels and errors, and is checked with planned cases and learner observations."
    },
    "quiz": {
      "question": "Which observation most directly checks this tutorial’s objective?",
      "options": [
        "The page has an attractive illustration.",
        "A learner selects a workshop and corrects an invalid group size using the guide.",
        "The resource contains many slides."
      ],
      "answer": 1,
      "explanation": "The learner’s task addresses the intended outcome. Appearance and length alone do not show that the objective was met."
    },
    "recap": "Begin with a learner task, choose useful functions, model the reasoning and provide supported practice. Collect only needed information and test both form behaviour and the learning experience.",
    "exit": "Explain one tutorial revision using the observed difficulty, the change and a retest.",
    "references": [
      [
        "W3C: form labels",
        "https://www.w3.org/WAI/tutorials/forms/labels/"
      ],
      [
        "W3C: form validation and feedback",
        "https://www.w3.org/WAI/tutorials/forms/validation/"
      ],
      [
        "W3C: accessible media planning",
        "https://www.w3.org/WAI/media/av/planning/"
      ]
    ]
  }
];
export const unit4LearningVisuals={
  "u4-applications": {
    "title": "Connect the learning sequence to the form rules",
    "graphic": "<div class=\"type-pair\"><div><strong>Learn the process</strong><span>Explain the objective → model Design + 4 → predict Design + 13 → correct to 12 → try a new case.</span></div><div><strong>Check the values</strong><span>Workshop selected? Whole number? Between 1 and 12 inclusive? Explain any error and let the learner correct it.</span></div></div><p><strong>Keep the conclusions separate:</strong> a value passing the rules is not proof that a real booking exists or that learning transfers to every context.</p>",
    "caption": "A teaching sequence and validation plan for fictional values. The separate downloadable demo checks values locally without sending or storing them.",
    "predict": "Why include the correction from 13 to 12 instead of showing only a valid example?",
    "answer": "The learner sees which rule failed and how to recover. Comparing a value just outside the boundary with the valid boundary makes the rule explicit.",
    "change": "The maximum becomes 10. What needs to change?",
    "changeAnswer": "Update the instructions, validation rules, worked examples and expected tests. A real receiving service also needs matching server-side rules."
  }
};
export const unit4LearningTransfer={
  "u4-applications": [
    "A fresh context: a library printing guide",
    "The library needs a tutorial for choosing a printer and requesting 1–8 sample copies.",
    "Adapt the model, form rules and boundary tests.",
    "Use fictional printer selections and copy counts, update instructions and checks to 1–8 inclusive, and test empty, 0, 1, 8, 9 and a fraction. Observe an independent correction and inspect the actual tool’s access and handling arrangements."
  ]
};
export const unit4LearningDiagrams={
  "u4-applications": [
    {
      "after": 1,
      "title": "Compare communication modes",
      "nodes": [
        [
          "Live",
          "Shared time; immediate discussion; connection and scheduling needs."
        ],
        [
          "Recorded or text",
          "Revisit at different times; plan a route for questions."
        ],
        [
          "Discussion space",
          "Peer explanations; moderation and participation support."
        ]
      ],
      "prompt": "Does choosing a live tool automatically make the explanation effective?",
      "answer": "No. Match the communication to an objective, model the task and check what learners can do.",
      "kind": "comparison"
    },
    {
      "after": 3,
      "title": "Reduce support as the learner gains independence",
      "nodes": [
        [
          "Show",
          "Explain the complete Design + 4 example."
        ],
        [
          "Try with support",
          "Predict and correct 13 using the range rule."
        ],
        [
          "Apply",
          "Choose another workshop and explain a new value."
        ]
      ],
      "prompt": "What evidence shows more than simply watching the model?",
      "answer": "Observe the learner applying the rules to a new case and explaining a correction without being given each step.",
      "kind": "flow"
    }
  ]
};
export const unit4LearningReinforcement={
  "u4-applications": {
    "context": "A form feedback message",
    "mistake": "The group-size field turns red, so users have all the information needed to fix any error.",
    "correction": "Colour alone does not explain which rule failed. Provide an associated text message with the expected whole-number range and preserve useful entries so the user can correct the field.",
    "steps": [
      "Rule: a workshop is required and group size must be a whole number from 1 to 12.",
      "Upper-boundary pair and expected outcomes: ____________________.",
      "Recovery check: correct the invalid value without losing the selected workshop."
    ],
    "completion": "Test 12 as accepted and 13 as rejected, then change 13 to 12 and check again. Test the other required, type and boundary cases too.",
    "annotations": [
      "The model states why the input meets a rule, rather than asking the learner to copy it blindly.",
      "The final limit separates successful validation from real-world truth and untested service behaviour."
    ]
  }
};
export const unit4LearningPlacement={
  "u4-applications": {
    "asset": "media",
    "title": "Turn source material into a learning resource",
    "note": "The media workflow can produce a tutorial with suitable alternatives. A polished video is only one option: choose text, images or other available functions that help the learner complete the task."
  }
};
