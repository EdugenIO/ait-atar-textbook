"""Explicit review locators for the 2027 Unit 4 content outline, not coverage inference."""
from reconciliation_common import publish,R
from html import escape as H
P=R/'practical-packs/unit4-evidence';P.mkdir(parents=True,exist_ok=True)
source='https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0006/1273182/Applied-Information-Technology-ATAR-Year-12-Syllabus-for-teaching-from-2027.PDF'
bridges={}
def bridge(key,title,chapter,section,models,steps,checks,question,answer,extra=''):
 extra+='<h3>Check your reasoning</h3><p>'+H(question)+'</p><details><summary>Compare your explanation</summary><p>'+H(answer)+'</p></details>'
 bridges[key]=dict(title=title,chapter=chapter,section=section,models=models,task='Work through these steps for your own version of the community-centre brief. Retain your own output and actual observations, separately from the supplied model.',practice_extra='<ol>'+''.join('<li>'+H(s)+'</li>' for s in steps)+'</ol>',checks=checks,extra=extra)

bridge('recovery','Choose recovery sets and match controls to risks','u4-data','follow-the-backup-starting-point',[
 ['Client recovery need','Bookings are the fictional centre’s priority. Specify tolerable loss and interruption, owners, recovery order, protected copies and a representative restore test. A plan is broader than choosing backup software.'],
 ['Worked restore chain','F is Sunday’s full backup; I1 is Monday’s changes since F; I2 is Tuesday’s changes since I1. Tuesday incremental recovery needs F + I1 + I2 in order. Tuesday differential D2 includes changes since F, so use F + D2. Neither I2 alone nor D2 alone establishes a complete restore.'],
 ['Archive and audit','An archive supports longer-term retention/reference; it is not automatically a current recovery copy. An audit trail records actions and times; permissions, review and protection of the log matter. It does not restore missing content by itself.'],
 ['Storage purpose/location','A warehouse combines data for wider reporting; a mart focuses on a subject or department. Cloud describes a service/location arrangement, not a guarantee of an analytical structure or independent backup. A warehouse or mart can be hosted in the cloud.'],
 ['Mining and secure processing','Mining searches for patterns; a correlation in bookings does not establish its cause or justify collecting more personal information. Apply appropriate access and security controls during processing as well as storage. The map flags the source indentation around this group for subject review.'],
 ['Password / firewall / biometric / anti-virus','Passwords support authentication; a firewall applies traffic rules; biometrics use physical/behavioural traits in an authentication process; anti-virus detects/blocks some malicious software. None alone supplies every access, recovery or confidentiality requirement.'],
 ['Encryption / signature / certificate','Encryption protects confidentiality when keys and endpoints are handled appropriately. A digital signature supports integrity and signer verification; it does not automatically hide the message. A digital certificate binds a public key to an asserted identity under a trust framework; validate that trust rather than treating the word certificate as proof of content truth.']],
 ['Specify priority data, recovery objectives, owners and protected backup locations for an invented centre.',
  'Construct both recovery sets above and explain the consequence of losing I1. Use the existing recovery lab to test your reasoning; label simulation results as simulation.',
  'Create a warehouse/mart/cloud comparison and one justified mining question. Explain a pattern limitation and a control for each relevant risk.',
  'Use approved disposable data for any actual restore exercise, compare recovered contents and record the environment, result, revision and retest.'],
 ['Keep a complete restore-set explanation and separately labelled actual or simulated observations.','Retain risk → control → limitation reasoning for all seven named controls.','Never treat an audit trail or a synchronised copy as automatic disaster recovery.'],
 'Tuesday’s incremental file is intact but Monday’s required incremental file is missing. Is Tuesday’s state established?',
 'No. The stated chain requires Monday’s changes too. Recover a complete available set or state the missing-data limit.',
 '<p><a href="../../index.html#topic/u4-data/recovery-lab">Interactive recovery lab</a> · <a href="../production-workflows/recovery.html">Actual disposable ZIP-restore reference</a></p>')

bridge('web','Apply web conventions and test the actual page','u4-web','connect-standards-to-the-person-using-the-site',[
 ['Participation and CMS','Visitor contributions may add knowledge and freshness, but need consent/purpose, moderation and accuracy checks. A CMS can support draft/publish states, roles, templates and revisions; a volunteer’s draft is not approved simply because it is in the system.'],
 ['HTML and web labels','HTML (.html/.htm) describes content structure; CSS controls presentation. Web 2.0 commonly describes participatory services. Web 3.0 is ambiguous: distinguish semantic/linked data from decentralised Web3 claims rather than treating them as one mandatory upgrade.'],
 ['Concrete semantic example','An event has a stable identifier, title, start time and venue relationship that software can interpret. This is a machine-readable relationship example, not evidence that a blockchain or a particular CMS is needed. An unstructured comment remains user-generated content even without that data model.'],
 ['Standards and conventions','W3C develops standards/guidelines with its community. The syllabus’s Web Design and Applications label spans HTML/CSS, graphics, audio/video, accessibility, internationalisation and mobile web; it is not a single checklist whose completion proves accessibility. Current W3C navigation may organise these topics differently.'],
 ['Six application checks','Use semantic headings and CSS; choose suitable graphics and useful alternatives; supply relevant media captions/text equivalents; test keyboard operation and focus; declare document/phrase language and unambiguous dates; test reflow and touch/keyboard at narrow sizes. The supplied web pack gives editable examples, not full conformance approval.'],
 ['Internationalisation','UTF-8 supports multiple scripts; language declarations identify text language rather than translate it. “4 May 2027” avoids the ambiguity of 04/05/2027; date markup can carry a machine-readable value. For another locale, check translated wording, text expansion, date/time conventions and direction where applicable.'],
 ['Validation and compatibility','A required whole-number group size 1–20 rejects blank, 0, 21 and 2.5; 1 and 20 are boundary passes. Browser feedback is bypassable, so a receiving service needs independent validation. Passing a syntax/range rule does not prove identity or real-world truth. Repeat required tasks in named browsers and record unavailable environments as untested.']],
 ['Copy the existing web-standards starter and implement semantic structure, graphics/media alternatives, language/date markup, labels, help and reflow as relevant to the brief.',
  'Write a small CMS draft/review/publish scenario, plus a participatory content example and a specifically defined Web 3.0 example; identify moderation and evidence limits.',
  'Test blank, invalid, fractional and boundary form values, keyboard/error recovery, narrow/wide layouts and text enlargement. Record actual results.',
  'Repeat the same tasks in a second available browser; if unavailable, leave the compatibility row unverified. Revise a failing issue and repeat its check.'],
 ['Retain edited source, output and a six-topic standards application record.','Record browser/version, viewport, input method and expected/observed result.','Keep browser preview separate from receiving-side and approved online operation.'],
 'A validator reports no HTML errors. Does that establish that a visitor using a keyboard can finish the task?',
 'No. Markup validation and task/accessibility observations answer different questions. Test the actual controls and route.',
 '<p><a href="../web-standards/index.html">Editable implementation and validation pack</a> · <a href="https://www.w3.org/standards/">W3C standards</a> · <a href="https://www.w3.org/International/quicktips/">W3C internationalisation guidance</a>. Primary guidance checked 27 October 2026.</p>')

bridge('sources','Resolve source conflicts before publishing','u4-web','verify-content-before-publishing',[
 ['Worked evidence choice','The existing five-source fictional case has an older approved schedule, a current approved revision, a newer stale repost, an unsupported supplier claim and an unapproved draft. The approved revision is the basis for the current venue decision; the newest timestamp alone does not decide it.'],
 ['Verifiability','Trace authorship, original record, approval and the exact claim. A source can be verifiably a supplier’s statement while its claimed productivity gain remains unsupported.'],
 ['Accuracy','Compare the claim with relevant evidence and resolve discrepancies. A professional layout, HTTPS connection or repeated repost does not verify a venue or causal conclusion.'],
 ['Currency','Consider publication/access dates, version and whether a record is superseded or approved. A high revision number on an unapproved draft does not make it the current published instruction.']],
 ['Inspect the linked source register without opening the supplied decision first. Choose a publication basis and explain it using all three evidence questions.',
  'Compare your reasoning with the worked decision. Identify what would need to change if the coordinator approved the later draft.',
  'Evaluate one teacher-approved claim using two primary sources. Record exact claim, dates, evidence, discrepancies, decision and remaining uncertainties.',
  'Update all affected outputs after an approved revision and check that stale details are removed. Retain the previous decision as a versioned record.'],
 ['Source log with explicit verifiability, accuracy and currency findings.','Separate supplied invented records from real checked sources.','Pause unresolved conflicting claims rather than choosing a convenient answer.'],
 'Can the newer repost override the current approved schedule solely because it is newer?',
 'No. Trace its basis, approval status and evidence; a later timestamp can repeat stale content.',
 '<p><a href="../worked-cases/source-checking.html">Five-source worked case, register and independent transfer</a></p>')

bridge('network','Draw and justify the centre LAN','u4-networks','draw-roles-routes-and-boundaries',[
 ['Client brief','Fixed staff desks need reliable file/print access; a roaming volunteer needs wireless coverage; visitors need internet access without staff-file access. Identify endpoints, services, media, capacity and access boundaries before choosing equipment.'],
 ['Protocol jobs','IP supports addressing/routing; TCP supplies a reliable ordered byte stream for applications that use it; HTTP defines web exchanges. HTTPS protects HTTP communication through secure transport, using TLS in modern deployments. The syllabus’s SSL wording is legacy terminology. Not every web version uses TCP.'],
 ['Link standards','Compare IEEE 802.3 Ethernet for fixed points with the IEEE 802.11 wireless LAN family for mobility. The syllabus label “802.11x” is treated as its broad wireless wording, not the different IEEE 802.1X authentication standard. Advertised link rates are not guaranteed application throughput.'],
 ['Proposed design','The diagram proposes staff Ethernet through a switch, staff and guest wireless roles and an upstream router/firewall. Guest separation is a configuration requirement, not a result established by drawing separate boxes or creating two Wi-Fi names.'],
 ['Layered controls','Firewall rules constrain traffic; account/password controls constrain authorised use; physical security protects equipment/ports. A firewall does not decide every user’s file permission, and a locked room does not replace account controls.'],
 ['Justification and tests','Explain each choice against the brief and a trade-off. Tests include staff printing, authorised file access, guest-to-staff denial, permitted guest internet, coverage and representative load. Label proposed and observed results separately; no real network configuration is supplied by this drawing.']],
 ['Define your changed centre brief and draw endpoints, links, service roles, upstream boundary and intended staff/guest separation.',
  'Annotate protocol and link-standard choices, plus firewall, account and physical controls. Justify at least one media and one security trade-off.',
  'Write expected tests for allowed and denied paths, coverage and capacity. Obtain approval before any classroom network operation.',
  'If only designing, mark actual configuration and network-test results unverified. If an approved lab is available, record its actual settings/results and revise/retest a failed check.'],
 ['A labelled learner LAN and brief-linked justification, not an unannotated copied diagram.','Expected and actual allowed/denied path results remain separate.','No claim that guest isolation or coverage is established by a proposal.'],
 'Two SSIDs have different names. Has isolation from staff files been demonstrated?',
 'No. The required separation needs appropriate configuration and observed permitted/denied-path tests.',
 '<figure><a href="centre-lan.svg"><img src="centre-lan.svg" width="960" height="530" alt="Proposed centre LAN: staff PCs and server use a switch, staff wireless and guest wireless connect through configured network boundaries to a router and upstream internet. Guest access to staff resources must be denied and tested."></a><figcaption>Conceptual proposal, not a tested configuration. Open the SVG at full size to inspect labels.</figcaption></figure>')

bridge('policy','Evaluate conduct, cloud handling and global participation','u4-impacts','ask-four-separate-cloud-questions',[
 ['Information and conduct','Identify personal/sensitive information and confidential organisational material without treating the terms as identical. A code of conduct explains expected behaviour, responsibilities and escalation. A code does not itself create permission for unrestricted monitoring.'],
 ['Workplace elements','State work hours and response expectations; approved email/internet use; employee privacy; and what monitoring is proposed, why, who accesses records and applicable notice/authority. Acknowledging a code does not settle all legal requirements. Real policy requires the organisation’s current review.'],
 ['Four cloud questions','Confidentiality: who can read it? Sensitivity: what harm could disclosure cause? Accessibility: can authorised users use it with their abilities and tools? Availability: is the service reachable when required? Avoid using accessibility and availability as synonyms.'],
 ['Responsibility and global handling','Assign account/access review, backup, incident handling and export/deletion responsibilities. Check hosting/subprocessors, applicable obligations and an approved fallback before deciding to store real data. The exercise uses invented information and makes no legal compliance determination.'],
 ['Censorship and global markets','Use the linked dated access-restriction case to compare authority and affected-party perspectives. Keep historical dates and scope distinct from present availability. Global services may expand resource access and outsourcing options while creating coordination, language, access and continuity costs; productivity needs a stated comparison.'],
 ['Participation and web change','User contribution can increase local knowledge and misinformation. Semantic relationships can support reuse of structured content; decentralised Web3 introduces different governance/key/access questions. Define the meaning before evaluating its impact, and do not assume a technology label guarantees trust.']],
 ['Draft an invented centre code covering all five workplace elements and identify what needs current organisational/legal review.',
  'Classify three fictional information assets and answer the four cloud questions separately, including owner and fallback.',
  'Use the historical access case, then compare two primary accounts of a teacher-approved dated restriction. Explain impacts without asserting current access everywhere.',
  'Compare an in-house, local and global workflow against the same brief, with a productivity measure, knowledge-access effect and participation risk.'],
 ['A complete five-element conduct draft with explicit limits.','Separate cloud confidentiality, sensitivity, accessibility and availability findings.','Dated source scope, perspectives, assumptions and a justified fallback.'],
 'The cloud service is online. Does that prove every authorised learner can use it?',
 'No. Availability is separate from permissions, device/app support, language and accessibility barriers.',
 '<p><a href="../worked-cases/global-access.html">Historical access-restriction comparison</a></p>')

bridge('learning','Teach one task and trace a fictional response','u4-applications','use-explain-show-try-and-review',[
 ['Learning purpose','The centre wants volunteers to find the approved venue and report a fictional practice result. A short demonstration supports sequence; a text guide supports scanning/offline access; a live session supports questions but needs scheduling and an accessible alternative.'],
 ['Online functions','Choose available approved features such as content pages, captions, comments, quiz feedback or revision history for the learning need. Document permissions, supported devices and what the learner actually does. A screenshot of a tool is not evidence of operating its functions.'],
 ['Explain → show → try → review','State the task, model the steps, let the learner try an equivalent example, then offer explanatory feedback and a retry. Retain control over pacing and equivalent text; avoid asking for personal information just to demonstrate a form.'],
 ['Collection lifecycle','Define purpose and minimum fictional fields first. Distinguish browser validation, receiving-side validation, authorised receipt/review, export, retention and deletion. The existing response lab demonstrates these locally; it is not a deployed online service or universal production-security template.'],
 ['Model versus operation','The static finished page previews a valid group size without transmission. The loopback lab receives fictional data on the local machine with restricted review. Neither by itself demonstrates approved online collection, platform permissions or the learner’s own implementation.']],
 ['Create or adapt a short approved tutorial using explain/show/try/review and an accessible text alternative. Retain editable source and delivered output.',
  'Operate an available approved online tool and record its selected functions, roles and actual learner journey; if unavailable, leave online operation unverified.',
  'Use invented data only. Test the existing form cases and follow the loopback lab through receipt, authorised review, export/deletion and restart checks as directed.',
  'For a school-approved online trial, first confirm the receiving service, roles and handling settings with the teacher, then record actual results separately from localhost observations. Revise and retest one issue.'],
 ['Tutorial source, output, attempt/feedback pathway and named tool/environment.','Trace fictional data through actual receipt/review/export/deletion where performed.','Approved online operation remains unverified until a separately authorised trial occurs.'],
 'A static page displays “valid”. Has online data collection been demonstrated?',
 'No. A local preview does not establish transmission, receipt, authorised review or online-service configuration.',
 '<p><a href="../web-standards/finished.html">Local validation/preview reference</a> · <a href="../response-lab/index.html">Receiving-side loopback lab and limits</a> · <a href="../../unit4-learning-demo.html">Local tutorial model</a></p>')

bridge('services','Read an SLA and compare outsourcing on equal terms','u4-projects','interpret-availability-without-turning-it-into-a-guarantee',[
 ['Agreement scope','An SLA records agreed service expectations, measurement, responsibilities and remedies. Identify service type, covered functions, operating window, exclusions, support and review. An availability target is not a promise that every request will complete instantly.'],
 ['Fictional availability model','Assume a 30-day, 24-hour measurement window and no excluded maintenance: 30 × 24 × 60 = 43,200 minutes. A 99.5% target allows 0.5% = 216 minutes of counted unavailability in this simple model. The hypothetical 180-minute outage gives (43,200 − 180)/43,200 × 100 = 99.5833%.'],
 ['Limits and support','If only supported business hours count, the denominator changes. Confirm what downtime is counted and what evidence resolves disputes. A 30-minute support response target concerns acknowledgement/action as defined; it does not automatically mean service restoration within 30 minutes.'],
 ['Same-scope outsourcing comparison','Compare in-house control/skills/capacity with local external support and global specialist capacity. Include handover, communication, data handling, continuity and total scope/cost. Time-zone or price differences alone do not decide suitability. All prices/terms in the exercise must be labelled fictional.'],
 ['Data-management purpose','An external provider may supply specialist operation, scale or continuity. The centre still needs accountable decisions, access rules, recovery, export and exit arrangements. Outsourcing does not automatically transfer every responsibility.'],
 ['Software evaluation','Test representative publishing/review/recovery tasks, usability, access needs, compatibility and support against the brief. Record observed results and unknowns; a feature list alone does not establish that the workflow works.']],
 ['Draft a fictional service summary with service type, availability window, counted/excluded downtime, response/restoration distinction, owner and escalation.',
  'Recalculate the worked example, then change the denominator to a stated business-hours window and explain why results cannot be compared without matching scope.',
  'Compare local/global outsourcing with in-house production against the same brief and explicit assumptions, including a data-management and exit requirement.',
  'Evaluate available software using the same representative tasks. Retain actual observations and explain an unresolved gap before making a qualified recommendation.'],
 ['Availability arithmetic with units, window and exclusions.','Same-scope options comparison and data responsibility/exit record.','Actual evaluation observations separated from fictional SLA terms.'],
 'The support response target is 30 minutes. Is restoration within 30 minutes guaranteed?',
 'No. Read each definition, covered hours and remedy; response and restoration can be different commitments.',
 '<p><a href="sla-model.json" download>Fictional SLA calculation inputs and results</a></p>')

bridge('evaluation','Link survey evidence, client decisions and revisions','u4-projects','connect-findings-to-revisions-and-retests',[
 ['Project management and design','Turn the brief into acceptance checks, plan owners/resources/dependencies, build a manageable version and update actual progress. A complete plan alone is not evidence of creating a solution.'],
 ['Different evaluation tools','Surveys describe reported responses; client feedback checks needs/acceptance; self-reflection examines decisions and limitations. Observe a representative task as well; a high satisfaction rating does not prove task completion.'],
 ['Existing paired model','The linked entirely fictional dataset has 12 before/after attempts. Completions change from 8/12 to 12/12: +33.3 percentage points. Mean ease moves from 2.5 to 4.0 on a labelled 1–5 scale. These are supplied invented records, not actual participants or a causal experiment.'],
 ['Implemented revision','The model moves the venue from an ambiguous disclosure into a visible labelled field, then supplies a paired retest record. Repeated tasks can introduce familiarity; a small invented sample cannot establish population effects or universal accessibility.'],
 ['Handover','Trace criterion → evidence → revision → retest. Report passed, failed and untested areas separately; hand over editable source, delivery copy, approved assets, handling notes and known limitations.']],
 ['Define your own fictional client task, acceptance criterion, project schedule and representative prototype, then build it using approved tools.',
  'Inspect the existing before/after prototypes and recalculate the supplied data before reading the model interpretation.',
  'Design a short survey, client-feedback prompt and self-reflection question that answer different evaluation questions. Collect only teacher-approved evidence with appropriate handling.',
  'Use actual findings to implement a revision, repeat the relevant check and prepare a qualified handover. Keep your real observations separate from the supplied invented model.'],
 ['Brief, plan, produced source/output and actual progress/change record.','Separate survey, client feedback, reflection and task observations.','A traceable implemented revision/retest plus sample/order/environment limits.'],
 'Mean ease increased. Does that alone prove every learner completed the task?',
 'No. The rating and task completion are different measures; inspect completion records and unresolved barriers.',
 '<p><a href="../worked-cases/survey-revision.html">Paired model data, implemented revision and retest</a> · <a href="review-log.csv" download>Blank requirement and observation log</a></p>')

rows=[]
def add(area,kind,page,n,label,key,chapter,section,children=()):
 root=f'{kind[0]}{n}';base=f'U4-{area.upper()}-{root}'
 def item(id,path,label,parent='',context=False):
  rows.append(dict(id=id,area=area,kind=kind,page=page,locator=f'{area} / {kind} / {path}',summary=label,parent=parent,context=context,explanation=f'../../index.html#topic/{chapter}/{section}',worked=f'{key}.html#worked',practice=f'{key}.html#independent',evidence=f'{key}.html#checks',status='Parent context: review child rows' if context else 'Authored task/model located; performance unverified' if kind=='Skills' else 'Authored explanation/model/task located; review pending',limitation='Independent subject review pending.'+(' Actual learner output and observations remain unverified.' if kind=='Skills' else '')))
 item(base,root,label,context=bool(children))
 for i,child in enumerate(children,1):item(f'{base}.{i}',f'{root}.{i}',child,base)

add('data','Knowledge',10,1,'Explain data-security management techniques','recovery','u4-data','start-with-what-the-client-must-recover',['Disaster recovery plan','Audit trail'])
add('data','Knowledge',10,2,'Compare backup techniques and archiving','recovery','u4-data','follow-the-backup-starting-point',['Full backup','Differential backup','Incremental backup'])
add('data','Knowledge',10,3,'Compare online storage arrangements','recovery','u4-data','compare-storage-by-purpose-and-location',['Data warehouses','Data marts','Cloud data'])
# Preserve the extracted square-bullet order. Do not invent a new official top-level code.
add('data','Knowledge',10,4,'Data mining and following secure-processing group','recovery','u4-data','find-patterns-without-inventing-conclusions',['Secure data-processing context','Passwords','Firewalls','Biometrics','Anti-virus software','Digital signatures','Digital certificates','Encryption'])
add('data','Knowledge',10,5,'Explain user-generated content','web','u4-web','judge-contributions-as-well-as-collecting-them')
for n,label,section in [
 (6,'Evaluate user-generated content','judge-contributions-as-well-as-collecting-them'),(7,'Explain HTML and .htm/.html','separate-structure-from-appearance'),(8,'Explain Web 2.0 and scoped Web 3.0 meanings','use-web-generation-labels-carefully'),(9,'Explain CMS purpose/features','choose-a-cms-for-an-actual-workflow'),(10,'Explain the purpose of W3C','connect-standards-to-the-person-using-the-site'),(11,'Explain W3C conventions','connect-standards-to-the-person-using-the-site')]:add('data','Knowledge',11,n,label,'web','u4-web',section)
add('data','Knowledge',11,12,'Apply the syllabus web-design topic grouping','web','u4-web','connect-standards-to-the-person-using-the-site',['HTML and CSS','Graphics','Audio and video','Accessibility','Internationalisation','Mobile web'])
add('data','Knowledge',11,13,'Explain online-form validation techniques','web','u4-web','validate-a-value-without-claiming-it-is-true')
add('data','Skills',11,1,'Analyse source verifiability, accuracy and currency','sources','u4-web','verify-content-before-publishing')
add('data','Skills',11,2,'Test/evaluate browser compatibility','web','u4-web','test-compatibility-using-repeatable-tasks')
add('data','Skills',11,3,'Apply relevant web-design standards','web','u4-web','connect-standards-to-the-person-using-the-site')
add('networks','Knowledge',11,1,'Compare communication protocol roles','network','u4-networks','give-each-protocol-a-distinct-job',['TCP/IP','HTTP','HTTPS (legacy SSL wording; modern TLS)'])
add('networks','Knowledge',11,2,'Compare communication link standards','network','u4-networks','compare-the-link-standards-for-each-location',['802.11x syllabus wireless label (802.11 family)','802.3 Ethernet'])
add('networks','Knowledge',11,3,'Explain network security measures','network','u4-networks','combine-firewall-account-and-physical-controls',['Firewalls','Passwords','Physical security'])
add('networks','Skills',11,1,'Design a LAN','network','u4-networks','draw-roles-routes-and-boundaries')
add('networks','Skills',11,2,'Justify a LAN design','network','u4-networks','justify-the-proposal-with-checks')
add('impacts','Knowledge',11,1,'Protect personal/sensitive information','policy','u4-impacts','distinguish-personal-sensitive-and-confidential-information')
add('impacts','Knowledge',11,2,'Explain a code of conduct purpose','policy','u4-impacts','make-workplace-expectations-understandable')
add('impacts','Knowledge',12,3,'Explain workplace code elements','policy','u4-impacts','explain-work-hours-communication-and-monitoring',['Work hours','Employee email use','Employee internet use','Employee privacy','Employer monitoring of email/internet/computer use'])
add('impacts','Knowledge',12,4,'Evaluate global online censorship','policy','u4-impacts','compare-access-restrictions-in-a-global-context')
add('impacts','Knowledge',12,5,'Evaluate cloud-computing issues','policy','u4-impacts','ask-four-separate-cloud-questions',['Data confidentiality','Document sensitivity','Accessibility level','Online-application availability'])
add('impacts','Knowledge',12,6,'Evaluate global digital-market impacts','policy','u4-impacts','evaluate-global-markets-and-productivity',['Productivity','Knowledge/resource access','Outsourcing'])
add('impacts','Knowledge',12,7,'Evaluate Web 2.0/Web 3.0 effects','policy','u4-impacts','connect-web-participation-to-consequences')
add('applications','Knowledge',12,1,'Explain digital communication for education','learning','u4-applications','match-digital-communication-to-the-learning-need')
add('applications','Skills',12,1,'Use available online-software functions','learning','u4-applications','choose-functions-available-in-an-approved-tool')
add('applications','Skills',12,2,'Use online tutorial/learning tools','learning','u4-applications','use-explain-show-try-and-review')
add('applications','Skills',12,3,'Use forms for online collection','learning','u4-applications','design-the-collection-purpose-before-the-fields')
add('projects','Knowledge',12,1,'Explain service level agreements','services','u4-projects','read-what-the-service-agreement-actually-covers')
add('projects','Knowledge',12,2,'Explain SLA service/availability features','services','u4-projects','interpret-availability-without-turning-it-into-a-guarantee',['Service availability','Service types'])
add('projects','Knowledge',12,3,'Compare local/global outsourcing with in-house production','services','u4-projects','compare-outsourcing-against-the-same-scope')
add('projects','Knowledge',12,4,'Explain outsourcing data management','services','u4-projects','compare-outsourcing-against-the-same-scope')
add('projects','Knowledge',12,5,'Evaluate software including usability','services','u4-projects','evaluate-software-through-representative-tasks')
add('projects','Skills',12,1,'Apply project management to client requirements','evaluation','u4-projects','plan-and-build-a-manageable-solution')
add('projects','Skills',12,2,'Use a design process to create a solution','evaluation','u4-projects','plan-and-build-a-manageable-solution')
add('projects','Skills',12,3,'Evaluate effectiveness against the brief','evaluation','u4-projects','use-surveys-client-feedback-and-self-reflection-for-different-evidence',['Surveys','Client feedback','Self-reflection'])
for r in rows:
 if r['id']=='U4-DATA-K1.2':r['explanation']='../../index.html#topic/u4-data/separate-backup-archive-and-audit-trail'
 if r['id'].startswith('U4-DATA-K4'):
  r['limitation']='Source-format review pending: the extracted outline places secure processing and seven controls after data mining with square bullets. This map preserves that order as a review group, not an official semantic hierarchy or a claim that security applies only to mining.'
  if r['parent']:r['explanation']='../../index.html#topic/u4-data/'+('keep-encryption-signatures-and-certificates-distinct' if r['summary'] in ['Digital signatures','Digital certificates','Encryption'] else 'match-each-control-to-a-risk')
 if r['id']=='U4-NETWORKS-K1.3':r['explanation']='../../index.html#topic/u4-networks/compare-http-and-https-accurately'
 if r['id']=='U4-DATA-S2':r['limitation']='Operational verification remains: a second-browser trial of the learner output is unverified. A single browser and responsive viewport checks do not establish cross-browser compatibility.'
 if r['id'].startswith('U4-APPLICATIONS-S'):r['limitation']='Operational verification remains: approved online-tool use/collection is unverified. Static preview and loopback receipt do not establish an online deployment, its permissions or learner performance.'
 if r['id'] in ['U4-NETWORKS-S1','U4-NETWORKS-S2']:r['limitation']+=' The assessed skill here is design/justification; the proposed diagram does not establish actual network configuration, guest isolation or performance.'
publish(4,source,'10–12',rows,bridges,version='2013/35142[v6], effective 2027',baseline='Year 12 from 2027',page_offset=4,context='fictional community-centre client brief')

(P/'review-log.csv').write_text('requirement_id,version,task,environment,expected_result,actual_observation,status,revision,retest,reviewer,remaining_limit\n,,,,,,,,,,\n',encoding='utf-8-sig')
import json
(P/'sla-model.json').write_text(json.dumps({'fictional':True,'assumptions':['30-day window','24 hours per day','no excluded maintenance in this example'],'window_minutes':43200,'target_percent':99.5,'allowed_unavailability_minutes':216,'hypothetical_outage_minutes':180,'calculated_availability_percent':(43200-180)/43200*100,'limit':'An illustrative calculation, not an actual service measurement or contractual guarantee.'},indent=2)+'\n',encoding='utf-8')
(P/'centre-lan.svg').write_text('''<svg xmlns="http://www.w3.org/2000/svg" width="960" height="530" viewBox="0 0 960 530" role="img" aria-labelledby="title desc"><title id="title">Proposed community-centre LAN</title><desc id="desc">Staff PCs and server connect to a switch. Staff wireless is proposed on the staff network. A guest access point uses a separately configured guest boundary at the router/firewall. Guest-to-staff access must be denied and tested; internet access is intended. This is a proposal, not an implemented configuration.</desc><rect width="960" height="530" fill="#f7f3e9"/><g font-family="sans-serif" fill="#233d30" font-size="19"><text x="25" y="35" font-size="25">Proposed LAN · roles, links and access boundaries</text><g fill="white" stroke="#426451" stroke-width="2"><rect x="350" y="65" width="260" height="55"/><rect x="350" y="160" width="260" height="70"/><rect x="55" y="290" width="220" height="55"/><rect x="370" y="290" width="220" height="55"/><rect x="700" y="290" width="220" height="55"/><rect x="30" y="405" width="180" height="55"/><rect x="235" y="405" width="180" height="55"/><rect x="445" y="405" width="215" height="55"/></g><g fill="none" stroke="#426451" stroke-width="3"><path d="M480 120V160M390 230L165 290M480 230V290M570 230L810 290M130 345L120 405M190 345L325 405"/><path d="M480 345L550 405" stroke-dasharray="8 5"/></g><text x="395" y="100">Upstream internet</text><text x="380" y="188">Router / firewall</text><text x="380" y="215">Configured boundaries</text><text x="82" y="325">Staff switch</text><text x="393" y="325">Staff access point</text><text x="722" y="325">Guest access point</text><text x="53" y="440">Staff PCs / NICs</text><text x="272" y="440">Staff server</text><text x="463" y="440">Roaming volunteer</text><text x="690" y="380" font-size="17">Guest → internet: permit</text><text x="690" y="405" font-size="17">Guest → staff: deny</text><text x="25" y="495" font-size="17">Solid: proposed wired links. Dashed: radio. Separate SSID names alone do not prove isolation.</text><text x="25" y="520" font-size="17">Configure and test authorised/denied paths, file permissions, coverage and representative load.</text></g></svg>''',encoding='utf-8')
