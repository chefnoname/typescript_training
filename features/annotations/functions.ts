const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}
// we inference with void if there is
// nothing returning from our fn

const logger = (msg: string): void => {
  console.log(msg);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
