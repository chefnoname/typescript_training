const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates: Date[] = [new Date(), new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates: (Date | string)[] = [new Date(), '2020-10-20'];
importantDates.push('Tuesday');
importantDates.push(new Date());
