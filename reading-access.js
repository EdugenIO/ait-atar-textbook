// Keep wide teaching material inside labelled, keyboard-operable scroll regions.
export function prepareReadingAccess(main){
 main.querySelectorAll('table').forEach((table,i)=>{
  table.querySelectorAll('thead th:not([scope])').forEach(th=>th.setAttribute('scope','col'));
  let wrapper=table.parentElement;
  if(!wrapper.classList.contains('table-scroll')){wrapper=document.createElement('div');wrapper.className='table-scroll';table.before(wrapper);wrapper.append(table);}
  if(!wrapper.hasAttribute('tabindex'))wrapper.tabIndex=0;
  wrapper.setAttribute('role','region');if(!wrapper.hasAttribute('aria-label'))wrapper.setAttribute('aria-label',`Table ${i+1}: scroll horizontally if needed`);
 });
 main.querySelectorAll('pre').forEach((block,i)=>{block.tabIndex=0;block.setAttribute('role','region');block.setAttribute('aria-label',`Example ${i+1}: scroll horizontally if needed`);});
}
export function bindSkipLink(link,main){
 link.addEventListener('click',event=>{event.preventDefault();main.focus({preventScroll:true});main.scrollIntoView({block:'start'});});
}
