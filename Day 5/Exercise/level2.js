// 3.In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart.unshift("Meat"));
console.count(shoppingCart);
console.log(shoppingCart.push("Sugar"));
console.log(shoppingCart);
console.log(shoppingCart.pop("Honey"));
console.log(shoppingCart.splice(4, 1));
console.log(shoppingCart);
shoppingCart[2] = "Green Tea";
console.log(shoppingCart);

// 4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const country = ["USA", "France", "Korea"];
if (country.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  country.push("Ethiopia");
}
console.log(country);

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = ["HTML", "CSS", "JS", "CSS", "SASS"];
if (webTechs.includes("SASS")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("SASS");
}
console.log(webTechs);

// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
