const emptyArr = [];
console.log(emptyArr);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.length);
firstItem = num[0];
console.log(firstItem);
middleItem = num[3];
console.log(middleItem);
lastItem = num[8];
console.log(lastItem);

// 7.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedTypeData = [
  (firstName = "Abdullah"),
  (lastName = "Shaikh"),
  (learning = "Web designing"),
  (country = "India"),
  (city = "Mumbai"),
  (age = 20),
  (isMarried = false),
];

console.log(mixedTypeData);
console.log(mixedTypeData.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
firstComp = itCompanies[0];
console.log(firstComp);
midComp = itCompanies[3];
console.log(midComp);
lastComp = itCompanies.length - 1;
console.log(itCompanies[lastComp]);

//10.Print out each company
console.log(itCompanies);

// 11.Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const bigCompany = [
  "Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.",
];
console.log(bigCompany);

// 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const anotherCom = itCompanies.indexOf("Shelby Ltd");

if (anotherCom === -1) {
  console.log("Company not found");
} else {
  console.log("Company present");
}

// 14. Filter out companies which have more than one 'o' without the filter method

// 15. Sort the array using sort() method
console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// 18.Slice out the last 3 companies from the array
console.log(itCompanies.slice(4));

// 19.Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));

// 20. Remove the first IT company from the array
console.log(itCompanies.shift());
console.log(itCompanies);

// 21.Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3, 1));
console.log(itCompanies);

// 22. Remove the last IT company from the array
console.log(itCompanies.pop());

// 23. Remove all IT companies
console.log(itCompanies.splice(0, 0));
