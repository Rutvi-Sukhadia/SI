import { Income } from './classes/Income.js';
import { Expense } from './classes/Expense.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const date = document.querySelector('#date') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const description = document.querySelector('#description') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, string, number]; //tuple
  values = [date.value,tofrom.value, description.value, amount.valueAsNumber];
  let doc: HasFormatter;
  if (type.value === 'Income') {
    doc = new Income(...values);
  } else {
    doc = new Expense(...values);
  }
  list.render(doc, type.value, 'end');
  form.reset();
});
