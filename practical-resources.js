export const practicalResources={
  "u2-data": [
    [
      "Maintenance practice lab",
      "practical-packs/maintenance-lab/index.html"
    ]
  ],
  "u4-web": [["Web standards implementation pack", "practical-packs/web-standards/index.html"]],
  "u2-applications": [["Web standards implementation pack", "practical-packs/web-standards/index.html"],
    [
      "Animation starter and reference frames",
      "practical-packs/animation-multimedia/animation.html"
    ]
  ],
  "u3-projects": [["Publication export and proofing pack", "practical-packs/publication-workflow/index.html"]],
  "u3-applications": [["Colour profiles, export settings and proofing", "practical-packs/publication-workflow/index.html"],
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
  "u4-projects": [
    [
      "Response review and evaluation lab",
      "practical-packs/response-lab/index.html"
    ]
  ]
};
const e=value=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
export function practicalResourceLinks(id){return practicalResources[id]?`<aside class="notice no-print"><strong>Practise with working resources</strong><ul>${practicalResources[id].map(([label,url])=>`<li><a href="${e(url)}">${e(label)} →</a></li>`).join('')}</ul><a href="practical-packs/index.html">Browse all practical resources</a></aside>`:'';}
