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
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

class Payment implements hasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) { }

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}



const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: hasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});