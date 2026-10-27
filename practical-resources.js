export const practicalResources={
  "u1-projects": [["Unit 1 requirement-linked worked evidence", "practical-packs/unit1-evidence/planning.html"]],
  "u1-impacts": [["Unit 1 requirement-linked worked evidence", "practical-packs/unit1-evidence/rights.html"]],
  "u1-hardware": [["Unit 1 requirement-linked worked evidence", "practical-packs/unit1-evidence/hardware.html"]],
  "u1-typography": [["Unit 1 requirement-linked worked evidence", "practical-packs/unit1-evidence/typography.html"]],
  "u1-principles": [["Unit 1 requirement-linked worked evidence", "practical-packs/unit1-evidence/principles.html"]],
  "u1-elements": [["Unit 1 requirement-linked worked evidence", "practical-packs/unit1-evidence/elements.html"]],
  "u1-brief": [["Unit 1 requirement-linked worked evidence", "practical-packs/unit1-evidence/planning.html"]],
  "u4-impacts": [["Historical global access-restriction comparison", "practical-packs/worked-cases/global-access.html"]],
  "u4-data": [["Source verifiability, accuracy and currency case", "practical-packs/worked-cases/source-checking.html"]],
  "u3-hardware": [["Dated mobile-device trend: worked comparison", "practical-packs/worked-cases/mobile-trend.html"]],
  "u1-applications": [["Unit 1 requirement-linked worked evidence", "practical-packs/unit1-evidence/formats.html"],["Measured image/audio export workflow", "practical-packs/production-workflows/formats.html"],["Editable spreadsheet lookups, tasks and explained answers", "practical-packs/spreadsheet-lookups/index.html"]],
  "u2-data": [["File export and restore workflows", "practical-packs/production-workflows/index.html"],
    [
      "Maintenance practice lab",
      "practical-packs/maintenance-lab/index.html"
    ]
  ],
  "u4-web": [["Conflicting sources: five-document worked case", "practical-packs/worked-cases/source-checking.html"],["Web standards implementation pack", "practical-packs/web-standards/index.html"]],
  "u2-applications": [["Working animation, edited audio and exported media", "practical-packs/production-workflows/index.html"],["Web standards implementation pack", "practical-packs/web-standards/index.html"],
    [
      "Animation starter and reference frames",
      "practical-packs/animation-multimedia/animation.html"
    ]
  ],
  "u3-projects": [["Publication export and proofing pack", "practical-packs/publication-workflow/index.html"]],
  "u3-applications": [["Multi-track production and inspected delivery copy", "practical-packs/production-workflows/multitrack.html"],["Colour profiles, export settings and proofing", "practical-packs/publication-workflow/index.html"],
    [
      "Multi-track editing starter",
      "practical-packs/animation-multimedia/timeline.html"
    ]
  ],
  "u4-applications": [["Accessible tutorial page and browser checks", "practical-packs/web-standards/index.html"],
    [
      "Local response-handling lab",
      "practical-packs/response-lab/index.html"
    ]
  ],
  "u4-projects": [["Survey findings, implemented revision and retest model", "practical-packs/worked-cases/survey-revision.html"],
    [
      "Response review and evaluation lab",
      "practical-packs/response-lab/index.html"
    ]
  ]
};
const e=value=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
export function practicalResourceLinks(id){return practicalResources[id]?`<aside class="notice no-print"><strong>Practise with working resources</strong><ul>${practicalResources[id].map(([label,url])=>`<li><a href="${e(url)}">${e(label)} →</a></li>`).join('')}</ul><a href="practical-packs/index.html">Browse all practical resources</a></aside>`:'';}
