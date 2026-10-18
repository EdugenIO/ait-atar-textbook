const form=document.querySelector('#visit-form');
const people=document.querySelector('#people');
const feedback=document.querySelector('#feedback');
form.addEventListener('invalid',()=>{people.setAttribute('aria-invalid','true');feedback.textContent='Check the group size: enter a whole number from 1 to 20.';},true);
people.addEventListener('input',()=>{people.removeAttribute('aria-invalid');feedback.textContent='Choose Preview visit to check this value.';});
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;people.removeAttribute('aria-invalid');feedback.textContent=`Practice preview: ${people.value} people. No booking was sent or saved.`;});
