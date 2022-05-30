const numbers = [1, 2, 3, 4, 5];
// for (let num of numbers) {
//   console.log(num * num);
// }

// adding all the numbers in the array
let sum = 0;
for (let num of numbers) {
  sum = sum + num;
}
console.log(sum);

const webTech = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
for (let tech of webTech) {
  console.log(tech.toUpperCase());
}

for (let tech of webTech) {
  console.log(tech[0]);
}
