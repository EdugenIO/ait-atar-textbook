export const sources = {
  11: { version: '2026', url: 'https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0006/1232466/Applied-Information-Technology-ATAR-Year-11-Syllabus-for-teaching-from-2026.PDF' },
  12: { version: '2027', url: 'https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0006/1273182/Applied-Information-Technology-ATAR-Year-12-Syllabus-for-teaching-from-2027.PDF' }
};
export const units = [
  { id:1, year:11, title:'Media information and communication technologies', description:'Use design and digital tools to communicate an idea to an audience.' },
  { id:2, year:11, title:'Digital technologies in business', description:'Develop useful business resources and plan the systems that support them.' },
  { id:3, year:12, title:'Evolving digital technologies', description:'Evaluate design decisions and develop a digital product for a client.' },
  { id:4, year:12, title:'Digital technologies within a global society', description:'Consider how digital solutions operate securely and responsibly across communities.' }
];
// Section-level authoring register. These are local IDs, not SCSA syllabus codes.
// Individual knowledge/skill requirements will be expanded and reviewed before a unit is called complete.
const rows = [
  [1,'design','Design concepts','Design foundations and visual communication','7–8','Identify, apply and annotate design choices in a client context.'],
  [1,'hardware','Hardware','Choosing hardware and software','8–9','Explain a system choice using the needs of its user.'],
  [1,'impacts','Impacts of technology','Creating and communicating responsibly','9','Investigate responsible publication and participation.'],
  [1,'applications','Application skills','Media files and spreadsheet tools','9–10','Choose suitable formats and organise information using application tools.'],
  [1,'projects','Project management','From brief to design plan','10','Plan, represent and evaluate a digital product.'],
  [2,'data','Managing data','Files, compression and version control','11–12','Prepare and manage files for their intended use.'],
  [2,'networks','Networks','Networks for a small business','12','Propose a network appropriate to a business brief.'],
  [2,'impacts','Impacts of technology','Privacy and access to technology','12–13','Consider the consequences of business technology decisions.'],
  [2,'applications','Application skills','Business documents and communication','13','Produce a communication suited to its audience and purpose.'],
  [2,'projects','Project management','Developing a business solution','13','Document the process from client requirements to evaluation.'],
  [3,'design','Design concepts','Designing usable interfaces','7','Explain how visual decisions support a user task.'],
  [3,'hardware','Hardware','Evaluating devices for a client','8','Justify equipment choices through a client scenario.'],
  [3,'impacts','Impacts of technology','Rights, collaboration and digital change','8','Investigate the implications of creating and sharing digital products.'],
  [3,'applications','Application skills','Producing multimedia publications','8–9','Produce and refine media for a specified audience.'],
  [3,'projects','Project management','Planning and managing a client project','9','Select an approach and document design decisions.'],
  [4,'data','Managing data','Secure data and web information','10–11','Evaluate information handling and online products.'],
  [4,'networks','Networks','Designing and justifying a LAN','11','Use a client scenario to justify a network proposal.'],
  [4,'impacts','Impacts of technology','Digital participation in a global society','11–12','Evaluate competing needs in workplace and global scenarios.'],
  [4,'applications','Application skills','Online learning and data collection','12','Create an online resource with an appropriate collection method.'],
  [4,'projects','Project management','Services, delivery and evaluation','12','Assess whether a delivered solution meets client needs.']
];
export const chapters = rows.map(([unit, slug, area, title, pages, evidence]) => ({
  id:`u${unit}-${slug}`, unit, year:unit<3?11:12, area, title, pages, evidence,
  registerId:`AIT-U${unit}-${slug.toUpperCase()}`, status: unit===4?'Classroom draft':(unit===1&&slug!=='design')||(unit===2)||(unit===3&&['hardware','impacts','applications','projects'].includes(slug))?'Classroom draft':(unit===1||unit===3)&&slug==='design'?'Classroom draft':'Planned'
}));
export const glossary = {
  'Accessibility':'Designing a resource so people with different abilities can perceive, understand and operate it.',
  'Annotation':'A note attached to a design that explains a choice and its intended effect.',
  'Client brief':'A description of the problem, audience, constraints and outcomes a client needs.',
  'Design element':'A visual component, such as colour, shape or space, used to construct a design.',
  'Design principle':'A way of organising visual components to create an intended effect.',
  'Evaluation criterion':'A clear statement used to judge whether a solution meets its purpose.',
  'Hierarchy':'An arrangement that shows order, importance or relationships between information.',
  'LAN':'A local area network connecting devices within a limited location.',
  'Prototype':'An early representation used to explore a proposed solution and gather feedback.',
  'Target audience':'The people a product is intended to serve.',
  'User interface':'The controls and presentation through which someone interacts with a digital product.',
  'Usability':'How effectively and easily intended users can achieve their goals with a product.'
};
