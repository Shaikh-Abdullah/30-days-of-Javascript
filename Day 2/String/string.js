// let space = "";
// let firstName = "Thomas";
// let lastName = "Shelby";
// console.log(space, firstName, lastName);

//--String Concatenation----///

let myFirstName = "Abdullah";
let myLastName = "Shaikh";
let age = 20;
let country = "India";
let city = "Mumbai";
let Student = true;
let learning = "JavaScript";

let fullName = myFirstName + " " + myLastName; //concatenation, merging two string together.

let personalInfo = myFirstName + ". I am " + age + ". I live in " + country;
let myInfo = `I am ${myFirstName}. I am ${age}. I live in ${country}`; //Example of Template Literals
let moreInfo = `I am ${myFirstName}. I am ${age}. I live in ${country}, city ${city}, I am learning ${learning}`; ////Example of Template Literals

console.log(myInfo);
console.log(moreInfo);
//Concatenating Using Addition Operator
// console.log(fullName);
// console.log(personalInfo);

//Long Literals Strings

// const paragraph =
//   "My name is Shaikh Abdullah. I live in India, Mumbai.\
// I am a Student. I have learn HTML, CSS, JavaScript, React(in future), \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too. (I Just Copied this paragraph)";

// console.log(paragraph);

// Template Literals(Template Strings)

console.log("The sum 2 and 3 is 5"); // // statically writing the data

let a = 2;
let b = 3;

console.log(`The Sum of ${a} and ${b} is ${a + b}`); //// injecting the data dynamically
console.log(`${a} is greater than ${b} : ${a > b}`);
