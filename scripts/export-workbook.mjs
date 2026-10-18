import {practiceImages,practiceSlots} from '../practice-stimuli.js';
const stimulus=(id,slot)=>{const a=practiceImages[practiceSlots[id+':'+slot]];return a?`\n\n![${a.description}](assets/practice/${a.file})\n\n`:'';};
import { writeFile } from 'node:fs/promises';
import { studentTopics } from '../student-topics.js';
const intro='# Unit 1 learning workbook\n\nClassroom draft. Use alongside student chapters 1.1–1.8, covering teaching weeks 1–15 (four 55-minute lessons each week). These activities are embedded in class time. Write in your notebook or a copy of this file. Fictional client: a community repair café.\n\n';
const tasks=studentTopics.filter(t=>t.unit===1).map((t,i)=>`## ${i+1}. ${t.title}\n\n### Recall\n\n${t.retrieval.map(q=>`- ${q}`).join('\n')}\n\n### Guided practice\n\n${t.guided.prompt}${stimulus(t.id,'guided')}\n\n### Explain\n\n${t.practice.map(([verb,q],n)=>`${n+1}. ${verb}: ${q}${stimulus(t.id,'practice'+n)}`).join('\n')}\n\n### Apply: ${t.task.title}\n\n${t.task.steps.map((s,n)=>`${n+1}. ${s}`).join('\n')}\n\nEvidence to keep: ${t.task.evidence}\n\nCheck your work:\n\n${t.task.success.map(s=>`- ${s}`).join('\n')}\n\nExit question: ${t.exit}\n\n`).join('');
const answers='## Explained answers: attempt the tasks first\n\n'+studentTopics.filter(t=>t.unit===1).map((t,i)=>`### Chapter ${i+1}\n\nGuided reasoning: ${t.guided.answer}\n\n${t.practice.map(([verb,q,a],n)=>`${n+1}. ${a}`).join('\n\n')}\n\nIndependent comparison: ${t.task.answer}\n\n`).join('');
await writeFile('unit1-design-workbook.md',intro+tasks+answers);
console.log('Exported Unit 1 student design workbook with explained answers.');
