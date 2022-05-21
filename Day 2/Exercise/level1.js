let challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(1, 21));
console.log(challenge.slice(0, 2));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(""));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("j"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let statement =
  "You cannot end a sentence with because because because is a conjunction";
console.log(statement.indexOf("because"));
console.log(statement.lastIndexOf("because"));
console.log(challenge.trim());
console.log(challenge.startsWith("30 Days of JavaScript"));
console.log(challenge.endsWith("30 Days of JavaScript"));
console.log(challenge.match("a"));
console.log("30 Days of ".concat("JavaScript"));
console.log(challenge.repeat(2));
