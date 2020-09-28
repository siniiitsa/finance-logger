import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('form.new-item-form');
// inputs
const type = form.querySelector('#type');
const tofrom = form.querySelector('#tofrom');
const details = form.querySelector('#details');
const amount = form.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    switch (type.value) {
        case 'invoice':
            doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
            break;
        case 'payment':
            doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
            break;
        default:
            throw new Error(`Unsupported document type: ${type.value}`);
    }
    list.render(doc, type.value, 'start');
});
