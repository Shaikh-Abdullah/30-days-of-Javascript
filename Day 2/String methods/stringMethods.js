// 1. Length
let js = "javaScript";
console.log(js.length);
let keyword = "qwerty";
console.log(keyword.length);

// 2. Accessing characters in a string
let string = "Javascript";
let firstLetter = string[2];
console.log(firstLetter);

// 3. toUpperCase()
console.log(js.toUpperCase());

// 4. toLowerCase()
let lower = "PROGRAMMING";
console.log(lower.toLowerCase());

//5. substr()
console.log(string.substr(4, 6));

// 6.substring()
console.log(string.substring(0, 5));
console.log(lower.substring(3, 9));

// 7. split()
let strings = "30 Days of JavaScript";
console.log(strings.toUpperCase().split());

// 8. trim()
let word = "     Developer";
console.log(word.trim());

//9. include()
console.log(strings.includes("Days"));

//10. replace()
console.log(strings.replace("JavaScript", "Pyton"));

//11. charAt()
console.log(strings.charAt(0));

// 12. lastIndexOf()

let str =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(str.lastIndexOf("If")); //19
console.log(str.lastIndexOf("you")); // 63
console.log(str.lastIndexOf("JavaScript")); // 38

// 13.concat()
let addTwoString = "I";
console.log(addTwoString.concat("am learning Javascript"));

// 14. repeat()

console.log(string.repeat(10));

/* Changing Data Type
    String to Int */
let num = "10";
let numInt = parseInt(num);
console.log(numInt);
console.log(typeof numInt);

//String to Float
let nums = "57.6468";
let numFloat = parseFloat(nums);
console.log(numFloat);
console.log(typeof numFloat);

//Float to Int
let flo = 30.99999;
let floatToInt = parseInt(flo);
console.log(floatToInt);
