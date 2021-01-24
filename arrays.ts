const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

const array2d: string[][] = [];

// Help with inference when extracting values
const myCar = carMakers[0];

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
