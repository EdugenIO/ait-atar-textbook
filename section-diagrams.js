import {unit4ProjectDiagrams} from './unit4-project-chapter.js?v=0.26';
import {unit4LearningDiagrams} from './unit4-learning-chapter.js?v=0.26';
import {unit4ImpactsDiagrams} from './unit4-impacts-chapter.js?v=0.26';
import {unit4NetworkDiagrams} from './unit4-network-chapter.js?v=0.26';
export const sectionDiagrams={
...unit4NetworkDiagrams,
...unit4ImpactsDiagrams,
...unit4LearningDiagrams,
...unit4ProjectDiagrams,
  "u1-brief": [
    {
      "after": 1,
      "title": "Connect the people to the purpose",
      "nodes": [
        [
          "Client",
          "Requests the resource"
        ],
        [
          "Audience",
          "Uses the resource"
        ],
        [
          "Purpose",
          "The change it should help achieve"
        ]
      ],
      "prompt": "The client asks for a guide, but who must use it?",
      "answer": "The intended audience. Check their task and context with the client.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Turn a need into a check",
      "nodes": [
        [
          "Need",
          "Visitors must find the venue."
        ],
        [
          "Criterion",
          "A visitor can locate the venue from the session details."
        ],
        [
          "Evidence",
          "Observe a visitor attempt that task."
        ]
      ],
      "prompt": "Does adding a venue icon prove the criterion is met?",
      "answer": "No. Observe whether the intended user can find and understand the venue information.",
      "kind": "comparison"
    }
  ],
  "u1-elements": [
    {
      "after": 1,
      "title": "Use space to show a group",
      "nodes": [
        [
          "Separate items",
          "Title     Time     Venue"
        ],
        [
          "Group related items",
          "Session title / time + venue"
        ],
        [
          "Check",
          "Can readers match details to the right session?"
        ]
      ],
      "prompt": "What could happen if the venue is closer to another session?",
      "answer": "Readers may associate it with the wrong session. Adjust grouping and check the result.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Distinguish texture from form",
      "nodes": [
        [
          "Texture",
          "A surface quality: smooth, rough or patterned."
        ],
        [
          "Form",
          "A three-dimensional shape, or an illusion of volume."
        ],
        [
          "Example",
          "A flat drawing can suggest both through marks and shading."
        ]
      ],
      "prompt": "Does a texture pattern automatically make an object three-dimensional?",
      "answer": "No. Texture concerns surface quality; form concerns volume. They can appear together.",
      "kind": "comparison"
    }
  ],
  "u1-principles": [
    {
      "after": 1,
      "title": "Direct attention deliberately",
      "nodes": [
        [
          "User task",
          "Find the changed venue"
        ],
        [
          "Design choice",
          "Give the venue message stronger contrast and scale"
        ],
        [
          "Intended effect",
          "The important message attracts attention"
        ]
      ],
      "prompt": "What should be prominent if readers need the new venue?",
      "answer": "The changed venue message. Check it at the actual viewing size.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Show a reading path",
      "nodes": [
        [
          "First",
          "Event name"
        ],
        [
          "Next",
          "Time and venue"
        ],
        [
          "Then",
          "Action or contact details"
        ]
      ],
      "prompt": "Does this path need a moving animation?",
      "answer": "No. Placement, spacing, alignment and emphasis can guide the eye in a static layout.",
      "kind": "comparison"
    }
  ],
  "u1-typography": [
    {
      "after": 1,
      "title": "Align for scanning",
      "nodes": [
        [
          "Shared edge",
          "Headings and body text start consistently"
        ],
        [
          "Related columns",
          "Each price stays associated with its item"
        ],
        [
          "Check",
          "Find one item and its price"
        ]
      ],
      "prompt": "Why can almost-aligned prices be confusing?",
      "answer": "Inconsistent alignment makes scanning harder and can weaken the association between item and price.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Read in context",
      "nodes": [
        [
          "Phone",
          "Narrow lines and changing text size"
        ],
        [
          "Poster",
          "Read at the intended distance"
        ],
        [
          "Check",
          "Actual output size and audience task"
        ]
      ],
      "prompt": "Will readable text on a large monitor always work on a phone?",
      "answer": "No. Check line length, size, spacing and reflow in the intended context.",
      "kind": "comparison"
    }
  ],
  "u1-hardware": [
    {
      "after": 1,
      "title": "Follow a simplified CPU cycle",
      "nodes": [
        [
          "Fetch",
          "Get the next instruction"
        ],
        [
          "Decode",
          "Interpret what it requires"
        ],
        [
          "Execute",
          "Carry out the operation"
        ]
      ],
      "prompt": "Where does this sequence continue after execution?",
      "answer": "The processor continues with the next instruction as directed by the programme. This is a simplified teaching model.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Keep working memory and storage distinct",
      "nodes": [
        [
          "RAM",
          "Holds active working data; normally volatile."
        ],
        [
          "Secondary storage",
          "Keeps saved files without continuous power."
        ],
        [
          "Workflow",
          "Load a file into memory → edit → save changes to storage."
        ]
      ],
      "prompt": "Does adding storage alone provide more working RAM?",
      "answer": "No. They have different roles. Check the workload and both resources.",
      "kind": "comparison"
    }
  ],
  "u1-applications": [
    {
      "after": 1,
      "title": "Choose a graphic for its job",
      "nodes": [
        [
          "Photograph",
          "Compare suitable raster formats and quality settings."
        ],
        [
          "Logo or diagram",
          "Vector artwork can scale without pixelation of its shapes."
        ],
        [
          "Delivery",
          "Check support, appearance and file size."
        ]
      ],
      "prompt": "Can a vector file still contain a pixel-based image?",
      "answer": "Yes. Embedded raster content retains its own resolution limits. Inspect the actual asset.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Make the asset trail visible",
      "nodes": [
        [
          "Original",
          "Keep an unchanged source"
        ],
        [
          "Working copy",
          "Use meaningful names and versions"
        ],
        [
          "Delivery",
          "Export and check the required format"
        ]
      ],
      "prompt": "Which copy should you keep when an export is too small?",
      "answer": "Keep the original and editable working source so a suitable export can be made again.",
      "kind": "comparison"
    }
  ],
  "u1-impacts": [
    {
      "after": 1,
      "title": "Check a reuse claim",
      "nodes": [
        [
          "Proposed use",
          "Name the asset and intended use"
        ],
        [
          "Basis",
          "Check permission, licence or an applicable exception"
        ],
        [
          "Record",
          "Keep the terms and required credit"
        ]
      ],
      "prompt": "Does naming the creator by itself establish permission?",
      "answer": "No. Attribution and permission answer different questions. Check the actual basis for reuse.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Keep a source trail",
      "nodes": [
        [
          "Claim",
          "What the resource says"
        ],
        [
          "Source record",
          "Who published it, where and when"
        ],
        [
          "Verification",
          "Check evidence and relevant currency"
        ]
      ],
      "prompt": "Can a polished page replace a source record?",
      "answer": "No. Presentation does not establish the origin or accuracy of a claim.",
      "kind": "comparison"
    }
  ],
  "u1-projects": [
    {
      "after": 1,
      "title": "Connect a criterion to evidence",
      "nodes": [
        [
          "Need",
          "Explain the audience task"
        ],
        [
          "Criterion",
          "State an observable result"
        ],
        [
          "Test",
          "Compare the observed result with the criterion"
        ]
      ],
      "prompt": "Is “make it good” an observable criterion?",
      "answer": "No. Specify what the intended user should be able to do or perceive.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Build consistency into a style guide",
      "nodes": [
        [
          "Typography",
          "Define heading and body roles"
        ],
        [
          "Colour",
          "Define readable foreground/background combinations"
        ],
        [
          "Layout",
          "Repeat spacing, alignment and control treatments"
        ]
      ],
      "prompt": "Why document roles rather than just list favourite fonts?",
      "answer": "Roles explain how choices should be used consistently for the audience and task.",
      "kind": "comparison"
    }
  ],
  "u2-data": [
    {
      "after": 1,
      "title": "Separate cropping and resampling",
      "nodes": [
        [
          "Crop",
          "Remove image edges; change what is included."
        ],
        [
          "Resample",
          "Change pixel dimensions; calculate a new pixel grid."
        ],
        [
          "Check",
          "Inspect composition and detail at the delivery size."
        ]
      ],
      "prompt": "Which operation changes pixel dimensions by calculating a new grid?",
      "answer": "Resampling. Cropping selects a smaller region rather than simply scaling the whole image.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Run a fair format comparison",
      "nodes": [
        [
          "Keep constant",
          "Same source, dimensions and viewing conditions"
        ],
        [
          "Change",
          "One format or quality setting"
        ],
        [
          "Compare",
          "File size, visible detail and required support"
        ]
      ],
      "prompt": "Why change one setting at a time?",
      "answer": "It makes the effect easier to attribute to that setting. Record other differences if they cannot be held constant.",
      "kind": "comparison"
    }
  ],
  "u2-networks": [
    {
      "after": 1,
      "title": "Compare the connection trade-off",
      "nodes": [
        [
          "Copper Ethernet",
          "Consider distance, installation and electrical interference."
        ],
        [
          "Fibre",
          "Consider capacity, distance, equipment and installation cost."
        ],
        [
          "Wireless",
          "Consider mobility, coverage, interference and security."
        ]
      ],
      "prompt": "Does wireless remove the need to check location?",
      "answer": "No. Coverage, obstacles and interference depend on the actual site.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Read the role of each connection",
      "nodes": [
        [
          "Internet ↔ router",
          "Connect the LAN to another network"
        ],
        [
          "Switch ↔ wired devices",
          "Connect devices within the LAN"
        ],
        [
          "Access point ↔ wireless devices",
          "Provide wireless access to the LAN"
        ]
      ],
      "prompt": "Is a switch by itself the same as an internet connection?",
      "answer": "No. Local connectivity and upstream internet service are different parts of the design. Devices may combine several roles.",
      "kind": "comparison"
    }
  ],
  "u2-impacts": [
    {
      "after": 1,
      "title": "Separate access and use",
      "nodes": [
        [
          "Can access",
          "A person or system can obtain the data"
        ],
        [
          "May use",
          "The proposed purpose has an appropriate basis"
        ],
        [
          "Should collect",
          "Only the information needed for that purpose"
        ]
      ],
      "prompt": "Does access to a shared folder settle every reuse decision?",
      "answer": "No. Check the intended purpose, permissions and information-handling requirements.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Look for barriers in the whole task",
      "nodes": [
        [
          "Equipment",
          "A suitable device"
        ],
        [
          "Connection",
          "Affordable, reliable access"
        ],
        [
          "Participation",
          "Skills, accessible content and support"
        ]
      ],
      "prompt": "Is providing a device enough to remove every barrier?",
      "answer": "No. Connectivity, skills, accessibility and support may still limit participation.",
      "kind": "comparison"
    }
  ],
  "u2-applications": [
    {
      "after": 1,
      "title": "Build motion from changing frames",
      "nodes": [
        [
          "Frame 1",
          "Object at the left"
        ],
        [
          "Frame 2",
          "Object nearer the centre"
        ],
        [
          "Frame 3",
          "Object farther right"
        ]
      ],
      "prompt": "What creates the apparent movement during playback?",
      "answer": "The sequence of changed images displayed over time. Timing and the size of each change affect the result.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Connect a control to an outcome",
      "nodes": [
        [
          "Label",
          "View opening hours"
        ],
        [
          "Action",
          "Open the hours destination"
        ],
        [
          "Check",
          "Keyboard and pointer reach the same useful result"
        ]
      ],
      "prompt": "Does a button-shaped rectangle prove the action works?",
      "answer": "No. Test the implemented behaviour, label and input methods.",
      "kind": "comparison"
    }
  ],
  "u2-projects": [
    {
      "after": 1,
      "title": "Agree before building",
      "nodes": [
        [
          "Brief",
          "Problem, audience and required outcomes"
        ],
        [
          "Scope",
          "Deliverables, constraints and exclusions agreed with the client"
        ],
        [
          "Evidence",
          "How each requirement will be checked"
        ]
      ],
      "prompt": "What should happen when a requested feature changes the agreed scope?",
      "answer": "Review its effects and agree an updated plan rather than silently adding it.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Check resources against overlapping tasks",
      "nodes": [
        [
          "Task A",
          "Needs the editing computer"
        ],
        [
          "Task B",
          "Needs the same computer at the same time"
        ],
        [
          "Plan",
          "Reschedule or provide another suitable resource"
        ]
      ],
      "prompt": "Do independent tasks always run in parallel?",
      "answer": "No. They can still compete for the same person, device or other limited resource.",
      "kind": "comparison"
    }
  ],
  "u3-design": [
    {
      "after": 1,
      "title": "Explain a visual relationship",
      "nodes": [
        [
          "Element",
          "Larger, darker venue heading"
        ],
        [
          "Principle",
          "Emphasis within a clear hierarchy"
        ],
        [
          "User task",
          "Find the venue in the session details"
        ]
      ],
      "prompt": "What evidence would check the intended effect?",
      "answer": "Observe a visitor locating the venue in the actual interface; do not treat the design label as proof.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Choose controls for the situation",
      "nodes": [
        [
          "Phone",
          "Readable labels and usable touch targets"
        ],
        [
          "Keyboard",
          "Logical focus and operable controls"
        ],
        [
          "Return route",
          "A clear way back to the programme"
        ]
      ],
      "prompt": "Why check a return route as well as the destination?",
      "answer": "Users need to continue or recover without becoming stuck. Test the whole task.",
      "kind": "comparison"
    }
  ],
  "u3-hardware": [
    {
      "after": 1,
      "title": "Connect a number to a workload",
      "nodes": [
        [
          "Specification",
          "Advertised battery runtime"
        ],
        [
          "Conditions",
          "Workload, brightness and connectivity in the source test"
        ],
        [
          "Evidence",
          "Representative use for this client"
        ]
      ],
      "prompt": "Can “all day” alone establish a six-hour field requirement?",
      "answer": "No. Check conditions and collect evidence relevant to the required workload.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Pass essentials before ranking extras",
      "nodes": [
        [
          "Required app",
          "Supported? If unknown, investigate."
        ],
        [
          "Essential use",
          "Meets mobility and runtime requirements?"
        ],
        [
          "Optional benefit",
          "Then compare useful extras."
        ]
      ],
      "prompt": "Can more RAM cancel a required-app compatibility failure?",
      "answer": "No. A larger unrelated specification does not repair that essential failure.",
      "kind": "comparison"
    }
  ],
  "u3-impacts": [
    {
      "after": 1,
      "title": "Keep the rights record with the asset",
      "nodes": [
        [
          "Asset",
          "Identify the file and creator"
        ],
        [
          "Terms",
          "Record the permitted use and conditions"
        ],
        [
          "Output",
          "Check this publication fits those terms"
        ]
      ],
      "prompt": "Does a commission alone settle every ownership question?",
      "answer": "No. Check the agreement and relevant rights before deciding.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Use an appropriate response route",
      "nodes": [
        [
          "Concern",
          "Record the issue without spreading the allegation"
        ],
        [
          "Support",
          "Seek appropriate trusted or specialist help"
        ],
        [
          "Response",
          "Consider correction/removal or legal routes as relevant"
        ]
      ],
      "prompt": "Does a complaint guarantee a particular legal outcome?",
      "answer": "No. Context, applicable requirements, evidence and procedures affect the outcome.",
      "kind": "comparison"
    }
  ],
  "u3-applications": [
    {
      "after": 1,
      "title": "Read a layered timeline",
      "nodes": [
        [
          "Upper video track",
          "Titles or overlays where visible"
        ],
        [
          "Base video track",
          "Scenes beneath the overlay"
        ],
        [
          "Combined output",
          "Check timing, compositing and readability"
        ]
      ],
      "prompt": "What should be checked if a title hides important content?",
      "answer": "Adjust placement or timing and inspect the combined export in the intended player.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Balance speech and supporting sound",
      "nodes": [
        [
          "Narration",
          "Keep the message intelligible"
        ],
        [
          "Music / effects",
          "Support rather than mask speech"
        ],
        [
          "Alternatives",
          "Check captions and other needed media alternatives"
        ]
      ],
      "prompt": "Does adding captions remove the need to check the audio mix?",
      "answer": "No. Check both the listening experience and the required alternatives.",
      "kind": "comparison"
    }
  ],
  "u3-projects": [
    {
      "after": 1,
      "title": "Choose an approach for the uncertainty",
      "nodes": [
        [
          "Unclear interaction",
          "Trial a prototype and collect feedback."
        ],
        [
          "Well-defined stages",
          "Use planned activities and review points."
        ],
        [
          "Both",
          "Control changes and keep evidence."
        ]
      ],
      "prompt": "Can a structured approach still include revision?",
      "answer": "Yes. Planned stages can include review and revision; the approaches are not absolute opposites.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Check dependencies and capacity together",
      "nodes": [
        [
          "Dependency",
          "Prototype and assets ready before full build"
        ],
        [
          "Capacity",
          "People and equipment available when required"
        ],
        [
          "Schedule",
          "Then set feasible task periods and review points"
        ]
      ],
      "prompt": "Why are neat Gantt bars not enough?",
      "answer": "They do not establish that dependencies, durations and resource availability are realistic.",
      "kind": "comparison"
    }
  ],
  "u4-data": [
    {
      "after": 1,
      "title": "Remember the backup reference point",
      "nodes": [
        [
          "Full",
          "All selected data"
        ],
        [
          "Differential",
          "Changes since the last full backup"
        ],
        [
          "Incremental",
          "Changes since the previous backup in the chain"
        ]
      ],
      "prompt": "Which reference point stays fixed until the next full backup?",
      "answer": "The reference point for differential backups. In the simple scheme, each differential accumulates changes since that full backup.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Three records, three purposes",
      "nodes": [
        [
          "Backup",
          "Recover after loss or damage"
        ],
        [
          "Archive",
          "Keep records for longer-term reference"
        ],
        [
          "Audit trail",
          "Trace events and changes"
        ]
      ],
      "prompt": "Which record normally tells you who changed a booking?",
      "answer": "The audit trail. It does not normally contain a complete restorable copy of the booking system.",
      "kind": "comparison"
    }
  ],
  "u4-web": [
    {
      "after": 1,
      "title": "Separate web structure and presentation",
      "nodes": [
        [
          "HTML",
          "Meaning: heading, paragraph, link, labelled control"
        ],
        [
          "CSS",
          "Presentation: spacing, type, colour and layout"
        ],
        [
          "Browser",
          "Combines them into a rendered page"
        ]
      ],
      "prompt": "Does styling a paragraph as large text make it a semantic heading?",
      "answer": "No. Use the appropriate heading markup as well as suitable styling.",
      "kind": "flow"
    },
    {
      "after": 3,
      "title": "Plan a content approval route",
      "nodes": [
        [
          "Contributor",
          "Draft an activity notice"
        ],
        [
          "Editor",
          "Check facts, rights and accessibility"
        ],
        [
          "Publisher",
          "Release the approved version and retain history"
        ]
      ],
      "prompt": "Does every CMS enforce this exact workflow automatically?",
      "answer": "No. Check available roles and configure the process for the client. Tools do not replace review.",
      "kind": "comparison"
    }
  ]
};
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sequenceDiagrams=new Set(['u4-applications:3','u1-principles:1','u1-principles:3','u1-hardware:1','u1-applications:3','u1-impacts:1','u1-impacts:3','u1-projects:1','u2-data:3','u2-applications:1','u2-applications:3','u2-projects:1','u3-design:1','u3-hardware:1','u3-projects:3','u4-web:3']);
export function sectionDiagram(topicId,index){
 const diagram=sectionDiagrams[topicId]?.find(d=>d.after===index);
 if(!diagram)return '';
 return `<figure class="lesson-diagram"><figcaption><strong>Picture the idea · ${escape(diagram.title)}</strong></figcaption><ol class="diagram-nodes ${sequenceDiagrams.has(topicId+':'+index)?'flow':'comparison'}">${diagram.nodes.map(([label,text])=>`<li><strong>${escape(label)}</strong><span>${escape(text)}</span></li>`).join('')}</ol><p class="diagram-prompt"><strong>Pause and explain:</strong> ${escape(diagram.prompt)}</p><details class="answer"><summary>Check your reasoning</summary><p>${escape(diagram.answer)}</p></details></figure>`;
}
