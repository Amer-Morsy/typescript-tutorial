class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

// interfaces

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  },
}

// console.log(me);
// console.log(me.speak('hello, world'));

const geetPerson = (person: isPerson): void => {
  console.log(person.name);
  console.log(person.age);
  person.speak('hello, world');
}

geetPerson(me);
