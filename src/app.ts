//#region classes
interface hasFormatter {
  format(): string;
}

class Invoice implements hasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) { }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

class Payment implements hasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) { }

  format() {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}

class ListTemplate {
  constructor(private container: HTMLUListElement) { }

  render(item: hasFormatter, heading: string, pos: 'start' | 'end') {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if (pos === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
//#endregion classes

//#region app
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: hasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});
//#endregion  app

//#region GENERICS
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);

// with interface 

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  name: 'shaun',
  data: { title: 'super' }
}

const docFour: Resource<string[]> = {
  uid: 2,
  name: 'yoshi',
  data: ['bread', 'milk']
}

console.log(docThree, docFour);

//#endregion GENERICS