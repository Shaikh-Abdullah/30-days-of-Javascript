let firstName = "Thomas";
let lastName = "Shelby";
let country = "England";
let city = "Birmingham";
let age = 35;
let isMarried = true;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);

console.log("10" === 10);

let parse = 9.8;
let parseResult = parseInt(9.8);
console.log(parseResult);
console.log(parseResult === 10);

//Write three JavaScript statement which provide truthy value.
/* 
    String, Number(except 0), Boolean.  
*/
//Write three JavaScript statement which provide falsy value.
/* 
    Null, Undefine, empty String, 0.
*/

console.log(4 === "4");

console.log("python".length !== "jargon".length);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 === "4"));

let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

const allSecond = Date.now();
console.log(allSecond);
