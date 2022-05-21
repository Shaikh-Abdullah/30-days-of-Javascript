console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

let num = "10";
let number = 10;
let makeNum = parseInt(num);
console.log(makeNum);
console.log(typeof makeNum);

let floatValue = 9.8;
console.log(floatValue == number);
let makeFloat = Math.ceil(floatValue);
console.log(makeFloat == number);

let find = "python, jagron";
console.log(find.match("on"));

let jargon = "I hope this course is not full of jargon";
console.log(jargon.search("jargon"));

let randNum = Math.floor(Math.random() * 101);
console.log(randNum);

// let randomNum = Math.random() * 101 - 50;
// console.log(randomNum); Generate a random number between 50 and 100 inclusively.

let randomNumber = Math.floor(Math.random() * 256);
console.log(randomNumber);

// Access the 'JavaScript' string characters using a random number.
// doubt in above question.

console.log(
  " 1 1 1 1 1\n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125"
);

let phrase =
  "You cannot end a sentence with because because because is a conjunction";
console.log(phrase.substr(30));
