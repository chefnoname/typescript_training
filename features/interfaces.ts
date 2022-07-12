interface Reportable {
  summary(): string;
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return 'Verryyy Niceeee';
  },
};

const oldCivic = {
  name: 'civic',
  year: 2003,
  broken: true,
  wheels: 900,
  summary(): string {
    return `CarName is ${this.name}`;
  },
};

const printSummary = ({ summary }: Reportable): void => {
  console.log(summary());
};

printSummary(oldCivic);
printSummary(drink);
