import { writeFile } from 'node:fs/promises';
import { studentTopics } from '../student-topics.js';
const intro='# Unit 1 design workbook\n\nClassroom draft. Use alongside student chapters 1.1–1.4, covering teaching weeks 1–4 (four 55-minute lessons each week). These activities are embedded in class time. Write in your notebook or a copy of this file. Fictional client: a community repair café.\n\n';
const tasks=studentTopics.map((t,i)=>`## ${i+1}. ${t.title}\n\n### Recall\n\n${t.retrieval.map(q=>`- ${q}`).join('\n')}\n\n### Guided practice\n\n${t.guided.prompt}\n\n### Explain\n\n${t.practice.map(([verb,q],n)=>`${n+1}. ${verb}: ${q}`).join('\n')}\n\n### Apply: ${t.task.title}\n\n${t.task.steps.map((s,n)=>`${n+1}. ${s}`).join('\n')}\n\nEvidence to keep: ${t.task.evidence}\n\nCheck your work:\n\n${t.task.success.map(s=>`- ${s}`).join('\n')}\n\nExit question: ${t.exit}\n\n`).join('');
const answers='## Explained answers: attempt the tasks first\n\n'+studentTopics.map((t,i)=>`### Chapter ${i+1}\n\nGuided reasoning: ${t.guided.answer}\n\n${t.practice.map(([verb,q,a],n)=>`${n+1}. ${a}`).join('\n\n')}\n\nIndependent comparison: ${t.task.answer}\n\n`).join('');
await writeFile('unit1-design-workbook.md',intro+tasks+answers);
console.log('Exported Unit 1 student design workbook with explained answers.');
