// 1. Write a program which tells the number of days in a month.

// let month = prompt("Enter a Month");
// if (
//   month === "January" ||
//   month === "March" ||
//   month === "May" ||
//   month === "July" ||
//   month === "September" ||
//   month === "October" ||
//   month === "December"
// ) {
//   console.log("Month have 31 Days");
// } else if (month === "February") {
//   console.log("Month have 28 Days");
// } else if (
//   month === "April" ||
//   month === "June" ||
//   month === "August" ||
//   month === "November"
// ) {
//   console.log("Month contain 30 Days");
// } else {
//   console.log("Not a Month");
// }

// 2. Write a program which tells the number of days in a month, now consider leap year.

let month = prompt("Enter a Month (It's leap year)");
if (
  month === "January" ||
  month === "March" ||
  month === "May" ||
  month === "July" ||
  month === "September" ||
  month === "October" ||
  month === "December"
) {
  console.log("Month have 31 Days");
} else if (month === "February") {
  console.log("Month have 29 Days");
} else if (
  month === "April" ||
  month === "June" ||
  month === "August" ||
  month === "November"
) {
  console.log("Month contain 30 Days");
} else {
  console.log("Not a Month");
}
