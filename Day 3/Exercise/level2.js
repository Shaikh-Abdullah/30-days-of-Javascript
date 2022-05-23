// let base = prompt("Enter base");
// let height = prompt("Enter height");

// let areaOfTrinangle = 0.5 * base * height;
// console.log(`the area of triangle is ${areaOfTrinangle}`);

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let a = prompt("Enter side a");
// let b = prompt("Enter side b");
// let c = prompt("Enter side c");

// let perimeterOfTriangle = a + b + c;
// console.log(`the perimeter of triangle is ${perimeterOfTriangle}`);

// 3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length = prompt("Enter Length:");
// let width = prompt("Enter Width:");

// let areaOfRectangle = length * width;
// console.log(`The area of Rectangle is ${areaOfRectangle}`);

// let perimeterOfRectangle = 2 * length + width;
// console.log(perimeterOfRectangle);

// 4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = prompt("Enter a radius:");
// let areaOfCircle = 3.14 * radius * radius;
// console.log(`Area of circle is ${areaOfCircle}`);

// let circumferenceOfCircle = 2 * 3.14 * radius;
// console.log(`Circumference of a circle is ${circumferenceOfCircle}`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// let x = prompt("Enter the value of x:");
// let slope = 2 * x - 2;
// console.log(`The slope is ${slope}`);

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let point1 = (2, 2);
// let point2 = (6, 10);
// let slopeBetween = (10 - 2) / (6 - 2);
// console.log(`The Sope between point1 and point2 is ${slopeBetween}`);

// 7.Compare the slope of above two questions.
// console.log(slopeBetween === slope); //answer is False

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// let x = prompt("Enter the value of x:");
// let y = x * x + 6 * x + 9;
// console.log(`the value is ${y}`);

// 9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hour = prompt("Enter an hour: ");
// let ratePerHour = prompt("Enter a rate per hour: ");
// let weeklyEarning = hour * ratePerHour;
// console.log(`Your weekly earning: ${weeklyEarning}`);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
// let myName = prompt("Enter your name: ");
// myName.length > 7
//   ? console.log("Your name is long")
//   : console.log("Your name is Short");

// 11. Compare your first name length and your family name length and you should get this output.
let firstName = "Abdullah";
let lastName = "Shaikh";
let compare = firstName.length === lastName.length;
console.log(
  `Your first name, ${firstName} is longer than your last name, ${lastName}`
);
console.log(compare);

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 20;
let yourAge = 250;
let diff = yourAge - myAge;
console.log(`I am ${myAge} years and you are ${diff} elder than me`);

// 13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let enterBirth = prompt("Enter year: ");
// let now = new Date();
// now >= 18 ? console.log("can drive") : console.log("cannot");
// Doubt in above problem

// 14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let noOfYear = prompt("Enter number of years you live:");
// let now = new Date().getSeconds();
// // let second = now.getSeconds();
// console.log(`you lived ${now}`);
// doubt in above one

// 15. Create a human readable time format using the Date time object
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDay();
let hour = now.getHours();
let min = now.getMinutes();
console.log(`${year}-${month}-${day} ${hour}:${min}`);
console.log(`${day}-${month}-${year} ${hour}:${min}`);
console.log(`${day}/${month}/${year} ${hour}:${min}`);
