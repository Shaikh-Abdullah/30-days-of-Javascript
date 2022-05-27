// Concatenating array using concat
let firstList = [1, 2, 3, 4, 5];
let secondList = [6, 7, 8, 9, 10];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

//Getting array length
console.log(thirdList.length);

//Getting index an element in arr array
const num = [1, 2, 3, 4, 5, 6, 7];
console.log(num.indexOf(3));
console.log(num.indexOf(6));
console.log(num.indexOf(9)); //returns -1 if valus not exist

let fruit = ["Mongo", "Apple", "Orange", "Banana", "Lemon"];
let index = fruit.indexOf("Banana");

// index === -1
//   ? console.log("Fruit not present in list")
//   : console.log(`the fruit is present in list`);

let indexofAvocado = fruit.indexOf("avacado");
if (indexofAvocado === -1) {
  console.log("It is not present in here");
} else {
  console.log("it is present");
}

//Getting last index of an element in array
const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers.lastIndexOf(2));
console.log(numbers.lastIndexOf(3));

// includes method
console.log(numbers.includes(4));
console.log(numbers.includes(10));

// Checking array
console.log(Array.isArray(num));
console.log(Array.isArray(numbers));
console.log(Array.isArray(index));

// Converting array to string
console.log(numbers.toString());

// /Joining array elements
console.log(numbers.join());

//Slice array elements
console.log(numbers.slice(1, 4));

// push method
numbers.push(20);
console.log(numbers);

//pop method
numbers.pop();
console.log(numbers);

// shift method
numbers.shift();
console.log(numbers);

// unshift method
numbers.unshift(10);
console.log(numbers);

//reverse array
numbers.reverse();
console.log(numbers);

// sort() method
fruit.sort();
console.log(fruit);
fruit.reverse();
console.log(fruit);

//Array of arrays

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);
console.log(fullStack.length);
console.log(fullStack[0]);
console.log(fullStack[1]);
