const drink = {
  colour: 'brown',
  carbonated: true,
  sugar: 50,
};

// Tuple:

const pepsi: [string, boolean, number] = ['brown', true, 50];

// Type alias:

type Drink = [string, boolean, number];

const cocaCola: Drink = ['red', false, 100];
const coffee: Drink = ['black', true, 20];
