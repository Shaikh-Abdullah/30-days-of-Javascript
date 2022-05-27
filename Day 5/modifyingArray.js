let number = [1, 2, 3, 4, 5];
console.log(number);
number[0] = 10;
number[4] = 20;
console.log(number);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
countries[0] = "Alabama";
let lastIndex = countries.length - 1;
countries[lastIndex] = "Korea";
console.log(countries);
