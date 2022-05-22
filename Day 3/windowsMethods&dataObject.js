// alert("30 Days Of Javascript");

// Window prompt() method
// let number = prompt("Enter number");
// console.log(number);

// Window confirm() method
// const agree = confirm("Are you sure you like to delete");
// console.log(agree);

///=-------------Date Object-------/////////

///Creating a time object
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMinutes());
console.log(now.getSeconds());

const allSeconds = Date.now();
console.log(allSeconds);

const present = new Date();
const year = present.getFullYear(); // return year
const month = present.getMonth() + 1; // return month(0 - 11)
const date = present.getDate(); // return date (1 - 31)
const hours = present.getHours(); // return number (0 - 23)
const minutes = present.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56
