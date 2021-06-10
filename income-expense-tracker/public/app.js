import { Income } from './classes/Income.js';
import { Expense } from './classes/Expense.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const date = document.querySelector('#date');
const tofrom = document.querySelector('#tofrom');
const description = document.querySelector('#description');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values; //tuple
    values = [date.value, tofrom.value, description.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'Income') {
        doc = new Income(...values);
    }
    else {
        doc = new Expense(...values);
    }
    list.render(doc, type.value, 'end');
    form.reset();
});
