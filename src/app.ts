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
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Josh', 'away', 200);
docTwo = new Payment('hosh', 'away', 400);

let arrHas: HasFormatter[] = [];
arrHas.push(docOne);
arrHas.push(docTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new Listtemplate(ul);

form.addEventListener('submit', (e) =>{
  e.preventDefault();
//Using tuples
  const values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if(type.value === 'invoice') {
    doc = new Invoice(...values)
  } else {
    doc = new Payment(...values)
  }
  list.render(doc, type.value, 'end');
  form.reset();
});

//Enums
const enum ResourceType {
  cart,
  order,
  checkout
}

interface Resource<T> {
  uid: number,
  srcName: ResourceType,
  resource: T
}

const file: Resource<object> = {
  uid: 1,
  srcName: ResourceType.cart,
  resource: {name: 'Mike'}
}

console.log(file);
console.log(ResourceType.cart);







// const invOne = new Invoice('Inzaghi', 'website application', 5000);
// const invTwo = new Invoice('Mario', 'website application', 4000);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// console.log(invoices);
