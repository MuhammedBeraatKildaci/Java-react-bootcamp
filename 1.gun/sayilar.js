import _ from "lodash";

const numbers = [23, 12, 13, 44, 55, 61];

numbers.forEach((number) => console.log(number));

console.log("---------------");

_.each(numbers, (number, i) => {
  console.log(number);
});
