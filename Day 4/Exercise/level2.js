// 1. Write a code which can give grades to students according to theirs scores:
// let score = prompt("Enter your Score");
// if (score >= 80) {
//   console.log("You get A grade");
// } else if (score >= 70) {
//   console.log("you got B grade");
// } else if (score >= 60) {
//   console.log("You got C grade");
// } else if (score >= 50) {
//   console.log("You got D grade");
// } else {
//   console.log("You got F grade");
// }

// 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let input = prompt("Enter Month");
if (input === "September" || input === "October" || input === "November") {
  console.log("The season is Autumn");
} else if (
  input === "December" ||
  input === "January" ||
  input === "February"
) {
  console.log("The season is Winter");
} else if (input === "March" || input === "April" || input === "May") {
  console.log("The season is Spring");
} else if (input === "June" || input === "July" || input === "August") {
  console.log("The season is Summer");
} else {
  console.log(`${input} is not a season`);
}

// 3.Check if a day is weekend day or a working day. Your script will take day as an input.

// let day = prompt("Enter todays day:");
// if ((day == "Monday", "Tuesday", "Wednesday", "Thursday", "Friday")) {
//   console.log(`${day} is Workday`);
// } else if ((day == "Saturday", "Sunday")) {
//   console.log(`${day} is a weekend`);
// }
