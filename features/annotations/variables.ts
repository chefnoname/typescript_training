// this is to show how to type annotate - for variables we will use type inference as much as possible

let apples = 10;
let speed: string = 'slow';
let hasName: boolean = true;

let nothingMuch: null = null;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'teal'];

let numArr: number[] = [123, 123, 123, 124, 325, 435];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {};

// here is where we leverage type annotations

// 1) function that returns any:

const json = '{"x": 10, "y":20}';

const coord: { x: number; y: number } = JSON.parse(json); //JSON will always come back as ': any'

// 2) when we declare a variable - but initialise later

const words = ['red', 'green', 'yellow'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  const element = words[i];
  if (element === 'green') foundWord = true;
}

// 3)  variable whose type cannot be inferred

let numbers = [-1, -20, -300];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element > 0) numberAboveZero = element;
}
