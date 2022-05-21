console.log("love".length);

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.match("because"));

let person = "Thomas";
let salaryEarns = 5000;
let annualBonus = 10000;
let onlineCourse = 15000;

let result = `${person}, the Salary Earn is ${salaryEarns}, and annualBonus is ${annualBonus}, and earn ${onlineCourse} from online course, He earn total of ${
  salaryEarns + annualBonus + onlineCourse
}`;
console.log(result);
