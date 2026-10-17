export const unit4NetworkTopics=[
  {
    "id": "u4-networks",
    "unit": 4,
    "week": 7,
    "weeks": [
      7,
      8
    ],
    "prerequisite": "u2-networks",
    "title": "Designing and justifying a secure LAN",
    "chapterIds": [
      "u4-networks"
    ],
    "pages": "11",
    "intro": "A network design should explain how people reach the services they need. Follow a request across the connections, compare protocols and link standards, then justify security and testing choices for a client.",
    "goals": [
      "Explain the different roles of TCP, IP, HTTP and HTTPS.",
      "Compare IEEE 802.11 wireless LAN and IEEE 802.3 Ethernet connections.",
      "Design a LAN using the client’s locations, devices and access needs.",
      "Justify firewall, password and physical-security measures, with a test plan."
    ],
    "retrieval": [
      "How do a switch, router and access point have different roles?",
      "Why does encryption not replace access control or recovery backups?"
    ],
    "vocabulary": [
      [
        "Protocol",
        "Agreed rules for communication between systems."
      ],
      [
        "TCP",
        "Transmission Control Protocol: provides a reliable, ordered byte stream between applications when a connection succeeds."
      ],
      [
        "IP",
        "Internet Protocol: provides addressing and forwarding of packets across interconnected networks without guaranteeing delivery."
      ],
      [
        "HTTP",
        "Hypertext Transfer Protocol: application-level rules for requests and responses involving web resources."
      ],
      [
        "HTTPS",
        "HTTP communicated over a secure transport, commonly using TLS, to protect data in transit and authenticate the server under the certificate trust model."
      ],
      [
        "TLS",
        "Transport Layer Security: a protocol that provides protected communication, including confidentiality and integrity, with authentication as configured."
      ],
      [
        "IEEE 802.11",
        "A family of standards for wireless local area networking."
      ],
      [
        "IEEE 802.3",
        "A family of standards for Ethernet networking."
      ],
      [
        "Firewall",
        "A control that permits or blocks network traffic according to configured rules."
      ],
      [
        "Physical security",
        "Measures controlling physical access to equipment, spaces and connections."
      ],
      [
        "Network segmentation",
        "Separating network traffic and access into controlled groups or networks."
      ]
    ],
    "downloads": [
      [
        "Unit 4 LAN design and troubleshooting practice",
        "unit4-network-practice.md"
      ]
    ],
    "sections": [
      [
        "Translate the centre’s needs into a network brief",
        "A fictional community centre has two fixed office computers, a wired printer, one roaming staff laptop and visitors using their own devices. Staff need shared local files and a web booking service. Visitors need internet access but must not reach staff files. Record room positions, cable routes, expected simultaneous use, budget and access needs. Ask what must still work during an internet outage. Mark missing information as unknown rather than inventing measurements."
      ],
      [
        "Give each protocol a distinct job",
        "Think of a web interaction as several jobs working together. HTTP describes the application’s request and response. In a common HTTP/1.1 or HTTP/2 connection, TCP supplies a reliable ordered stream: it tracks data and can retransmit missing material. IP addresses and forwards the packets between networks. IP alone does not guarantee delivery or order. TCP cannot promise success if the connection fails permanently. TCP/IP names a suite of protocols; it is not one rule doing every job."
      ],
      [
        "Compare HTTP and HTTPS accurately",
        "HTTPS protects HTTP communication in transit using secure transport. Modern implementations use TLS; the syllabus’s wording refers to the older SSL terminology. Protection includes confidentiality and integrity, with server authentication through certificate checks. It does not prove the page’s claims are true or protect every stored copy after receipt. HTTP/3 uses QUIC over UDP rather than TCP, so do not claim all web traffic uses TCP. For this chapter’s simplified journey, assume HTTP/2 over TLS over TCP/IP."
      ],
      [
        "Compare the link standards for each location",
        "IEEE 802.3 covers Ethernet; IEEE 802.11 covers wireless LANs. The syllabus uses “802.11x” as a broad wireless label: here it refers to the 802.11 family, not the separate 802.1X access-control standard. Fixed desks and a printer can use Ethernet links to a switch. A roaming staff laptop can use an access point connected to the LAN. Check relevant hardware support, installation, distance, interference, capacity and mobility. A stated link rate is not a guaranteed application transfer rate."
      ],
      [
        "Draw roles, routes and boundaries",
        "Place the office computers and printer on a staff network. Connect wired endpoints to a switch and wireless endpoints through an access point. A router links networks and the upstream service; some appliances combine router, switch, wireless and firewall roles. Draw visitor access as a separate controlled network or service. A guest name alone does not prove isolation: the equipment must support and enforce the required separation. Label connections and explain where access is allowed or blocked."
      ],
      [
        "Combine firewall, account and physical controls",
        "Use firewall rules to allow required traffic and block unwanted routes, including visitor access to staff resources. Use unique credentials, suitable password practices and multi-factor authentication where supported. Give staff only the permissions needed for their roles. Keep network equipment in a controlled space and protect accessible ports and cabling. A firewall cannot stop someone simply taking an unprotected device, and a locked cupboard cannot correct an overly permissive rule. Check each control against a specific risk."
      ],
      [
        "Plan capacity and availability without overpromising",
        "Count required switch ports and check compatible link speeds and any power requirements. Consider simultaneous use and the upstream connection, not just one device’s advertised maximum. Check access-point placement with a site survey or representative coverage trial; a drawing cannot prove signal strength. The central switch, access point and router create different dependencies. Local file sharing may continue during an upstream outage if local equipment, addressing and required services remain available. Backups and recovery need their own plan."
      ],
      [
        "Troubleshoot from observations",
        "If local printing works but an external booking page does not, some local paths are working. The observations do not establish one cause. Compare another authorised device, the same service and another approved external destination. Inspect reported connection and service status through normal authorised checks. A problem could involve a particular service, name resolution, access rules or an upstream link. Record evidence before changing anything. Classroom work uses fictional observations or an approved lab; do not disable real security controls."
      ],
      [
        "Justify the proposal with checks",
        "For each requirement, name the design choice, explain its effect, identify a trade-off and state the evidence needed. Test staff access to authorised files and printing. Test that visitors have the intended external access and cannot reach staff resources. Check wireless use in the required rooms, relevant application behaviour and recovery procedures. Record expected and actual results, versions, conditions, revisions and untested cases. A diagram is a proposal until its claims have suitable evidence."
      ]
    ],
    "worked": {
      "title": "Propose a LAN for the community centre",
      "steps": [
        [
          "Requirements",
          "Two office computers and one printer need fixed connections; a staff laptop needs mobility. Visitors must not access staff files."
        ],
        [
          "Local layout",
          "Use a central switch for the fixed devices. Connect an appropriate access point for the staff laptop. Confirm ports, compatibility and installation constraints."
        ],
        [
          "Visitor boundary",
          "Use supported network separation and access rules for visitor internet access. Label the boundary; do not assume another network name alone provides isolation."
        ],
        [
          "External route",
          "Connect through the router and suitable upstream service equipment. Use HTTPS for the booking-service interaction."
        ],
        [
          "Protection",
          "Specify firewall restrictions, unique staff credentials and controlled physical access to equipment. Plan file recovery separately."
        ],
        [
          "Evidence",
          "Check staff tasks, visitor isolation, required room coverage and external access. Record failed and untested items separately."
        ],
        [
          "Limit",
          "No site measurements or configuration tests are supplied. This is a justified draft proposal, not a verified installation."
        ]
      ],
      "explanation": "Each component and control has a reason tied to a requirement. The visitor boundary needs explicit configuration and testing, not merely a label on a picture."
    },
    "misconception": [
      "An HTTPS page must be honest and safe in every respect.",
      "HTTPS protects a connection. It does not establish the truth of the content, the suitability of the service or the safety of all stored information."
    ],
    "guided": {
      "prompt": "The staff printer works, but the booking website fails on one laptop. Does this prove that the router has failed?",
      "answer": "No. Local printing confirms some local communication, not the whole route. Compare authorised devices and services, then inspect relevant connection, application and upstream evidence. Do not replace a device or disable controls on the strength of one symptom."
    },
    "practice": [
      [
        "Distinguish",
        "Which jobs belong to TCP and IP?",
        "TCP supplies a reliable ordered byte stream between applications when the connection succeeds. IP addresses and forwards packets without itself guaranteeing delivery or order."
      ],
      [
        "Compare",
        "Why might one design use Ethernet for desks and wireless for a roaming laptop?",
        "The fixed devices do not need mobility; wireless supports movement. Compare installation, coverage, interference, capacity and required equipment for the actual site."
      ],
      [
        "Trace",
        "Which simplified path can a staff laptop use to reach the external booking service?",
        "Laptop → access point → switch → router → upstream network → service, with return traffic following permitted routes. Actual devices may combine roles."
      ],
      [
        "Evaluate",
        "Is a visitor Wi-Fi name enough evidence that staff files are isolated?",
        "No. The underlying separation and access rules must be supported, configured and tested."
      ],
      [
        "Explain",
        "Why do passwords, firewalls and a locked equipment area complement each other?",
        "They address different risks: authentication/access, traffic control and physical access. None replaces the others or proves complete security."
      ],
      [
        "Diagnose",
        "Staff files are accessible but only one external service fails. What can you conclude?",
        "Some local services work. The failure is not yet localised; compare the affected service and relevant paths before attributing a cause."
      ]
    ],
    "task": {
      "title": "Draw, justify and review the centre’s LAN",
      "steps": [
        "Turn the fictional brief into requirements and a list of questions needing confirmation.",
        "Draw the local wired and wireless connections, component roles, visitor boundary and upstream route.",
        "Annotate the roles of TCP/IP and HTTPS in the assumed web-service journey.",
        "Compare Ethernet and wireless for two different client tasks.",
        "Add firewall, credential and physical-security choices, linking each to a risk.",
        "Write expected-result tests for staff tasks, visitor isolation, coverage and an upstream outage.",
        "Use the supplied troubleshooting scenario to write evidence-based next checks and revise one unsupported claim."
      ],
      "evidence": "Annotated LAN diagram, protocol explanation, connection comparison, security reasoning and a test/troubleshooting log.",
      "success": [
        "Routes, component roles and visitor boundaries are clear.",
        "Protocol and standard comparisons distinguish their purposes and limits.",
        "Recommendations include evidence, trade-offs and remaining unknowns."
      ],
      "answer": "A defensible proposal links fixed devices through a switch, supports staff mobility with a checked access-point arrangement and uses enforced visitor separation. It justifies each control, explains the assumed HTTP/2/TLS/TCP/IP journey and records untested coverage and configuration claims."
    },
    "quiz": {
      "question": "A valid HTTPS connection most directly supports which claim?",
      "options": [
        "All content on the page is correct.",
        "The connection has transport protection under its security and trust checks.",
        "The organisation no longer needs backups."
      ],
      "answer": 1,
      "explanation": "HTTPS protects communication in transit. Content accuracy, stored-data handling, access and recovery are separate questions."
    },
    "recap": "Start with tasks and boundaries. Give protocols and link standards distinct jobs, combine appropriate controls and test the claims behind your LAN proposal.",
    "exit": "Trace one request from the staff laptop to the booking service. Explain one protocol role, one boundary and one check.",
    "references": [
      [
        "IETF: TCP specification, RFC 9293",
        "https://www.rfc-editor.org/rfc/rfc9293.html"
      ],
      [
        "IEEE: 802 networking working groups",
        "https://ieee802.org/"
      ],
      [
        "MDN: transport-layer security",
        "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security"
      ],
      [
        "MDN: HTTP overview",
        "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"
      ]
    ]
  }
];
export const unit4NetworkVisuals={
  "u4-networks": {
    "title": "Follow a request through roles and boundaries",
    "graphic": "<div class=\"network-diagram\"><p><strong>Staff request to the external service</strong></p><p>Laptop ⇄ access point ⇄ switch ⇄ router/firewall ⇄ upstream network ⇄ booking service</p><p><strong>Visitor boundary:</strong> permitted external access; blocked access to staff files.</p><p><strong>Assumed protocol stack:</strong> HTTP/2 → TLS → TCP → IP → local link technology.</p></div>",
    "caption": "A simplified logical journey. The stack shows cooperating roles, not extra physical boxes; actual devices may combine functions. HTTP/3 uses a different transport arrangement.",
    "predict": "Does the visitor boundary shown here prove that isolation works?",
    "answer": "No. The equipment must enforce suitable separation and access rules, and tests must check allowed and blocked paths.",
    "change": "The upstream internet link fails. Must every local task stop?",
    "changeAnswer": "Not necessarily. Local printing or file access may continue if their local equipment and required services remain available. Identify each actual dependency."
  }
};
export const unit4NetworkTransfer={
  "u4-networks": [
    "A fresh context: a museum kiosk",
    "Museum visitors need a web guide, while staff manage a local collection database.",
    "Propose a boundary and explain what you would test.",
    "Provide controlled visitor access that cannot reach staff collection resources. Test permitted guide access and blocked staff routes, then record configuration, conditions and remaining gaps."
  ]
};
export const unit4NetworkDiagrams={
  "u4-networks": [
    {
      "after": 1,
      "title": "Keep communication jobs distinct",
      "nodes": [
        [
          "HTTP",
          "Request or respond to a web resource."
        ],
        [
          "TCP",
          "Provide a reliable ordered stream in this assumed connection."
        ],
        [
          "IP",
          "Address and forward packets between networks."
        ]
      ],
      "prompt": "Which of these roles by itself encrypts the traffic?",
      "answer": "None of these three roles alone supplies the TLS protection in the example. HTTPS includes a secure transport; do not confuse TCP reliability with encryption.",
      "kind": "comparison"
    },
    {
      "after": 3,
      "title": "Compare links against the task",
      "nodes": [
        [
          "Fixed desk",
          "Evaluate Ethernet installation and capacity."
        ],
        [
          "Roaming laptop",
          "Evaluate wireless coverage, mobility and interference."
        ],
        [
          "Visitor access",
          "Check enforced separation, not just the Wi-Fi name."
        ]
      ],
      "prompt": "Does a wireless signal reaching a room prove adequate service under load?",
      "answer": "No. Test the required task with representative users, devices and conditions. Signal presence alone does not establish usable capacity.",
      "kind": "comparison"
    }
  ]
};
export const unit4NetworkReinforcement={
  "u4-networks": {
    "context": "A visitor-network claim",
    "mistake": "The guest network has a different Wi-Fi name, so staff files must be unreachable.",
    "correction": "A separate name alone does not establish isolation. Check supported network separation and access rules, then test that visitor access to staff resources is blocked.",
    "steps": [
      "Task: a staff laptop opens the external booking service.",
      "Connection route to the upstream network: ____________________.",
      "Checks: confirm the intended HTTPS service and authorised access."
    ],
    "completion": "For the illustrated topology: laptop → access point → switch → router/firewall → upstream network. Check each required link and policy; actual equipment may combine roles.",
    "annotations": [
      "Link the component choice to a specific task, location or boundary.",
      "The final statement separates a proposed design from measured or tested evidence."
    ]
  }
};
export const unit4NetworkPlacement={
  "u4-networks": {
    "asset": "network",
    "title": "Trace staff and visitor routes",
    "note": "The picture shows a simple physical layout. Add the centre’s staff/visitor boundaries to your own diagram and explain how they will be enforced and tested."
  }
};
