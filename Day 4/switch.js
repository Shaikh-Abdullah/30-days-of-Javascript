let whether = "cloudy";
switch (whether) {
  case "rainy":
    console.log("You need rain coat");
    break;
  case "cloudy":
    console.log("You need jacket, Its cold outside");
    break;
  case "sunny":
    console.log("no need of rain coat");
    break;
  default:
    console.log("No need of rain coat");
}

let userInput = prompt("Enter what day is today");
let day = userInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default: {
    console.log("Its not a day week");
  }
}
