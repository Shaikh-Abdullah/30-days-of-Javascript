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
// for (let i = 0; i <= 10; i++) {
//   console.log(countries[i]);
// }

// reverse
// for (let i = 10; i > 0; i--) {
//   console.log(countries[i]);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(countries[i]);
//   i++;
// }

// reverse
// let i = 10;
// while (i > 0) {
//   console.log(countries[i]);
//   i--;
// }

// let j = 0;
// do {
//   console.log(countries[j]);
//   j++;
// } while (j <= 10);

// reverse
// let j = 10;
// do {
//   console.log(countries[j]);
//   j--;
// } while (j >= 0);

let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
