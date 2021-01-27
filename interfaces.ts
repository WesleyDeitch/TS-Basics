interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `My drink is ${this.color} and is ${
      this.carbonated ? 'carbonated' : 'not carbonated'
    } with ${this.sugar} grams of sugar`;
  },
};

const printSummary = (report: Reportable): void => {
  console.log(report.summary());
};

printSummary(oldCivic);
printSummary(myDrink);
