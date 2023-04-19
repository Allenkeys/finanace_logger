// const anchor = document.querySelector('a');
// console.log(anchor?.href);
//const form = document.querySelector('form');
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: 'Josh',
//   age: 50,
//   speak(text: string): void{
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log('Spent', amount);
//     return amount;
//   },
// };
// const greetPerson = (person: IsPerson) =>{
//   console.log('hello', person.name);
// }
// greetPerson(me);
import { Invoice } from './classes/invoice.js';
import { Listtemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
let docOne;
let docTwo;
docOne = new Invoice('Josh', 'away', 200);
docTwo = new Payment('hosh', 'away', 400);
let arrHas = [];
arrHas.push(docOne);
arrHas.push(docTwo);
const form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new Listtemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //Using tuples
    const values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    form.reset();
});
const file = {
    uid: 1,
    srcName: 0 /* ResourceType.cart */,
    resource: { name: 'Mike' }
};
console.log(file);
console.log(0 /* ResourceType.cart */);
// const invOne = new Invoice('Inzaghi', 'website application', 5000);
// const invTwo = new Invoice('Mario', 'website application', 4000);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
