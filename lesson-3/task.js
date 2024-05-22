//1- check if the given number is positive, negative or zero
const num = -8;
if (num < 0) {
  console.log(`Your number ${num} is negative`);
} else if (num > 0) {
  console.log(`Your number is ${num} is positive`);
} else {
  console.log(`Your number is 0`);
}
//_______________________________________________________
switch (true) {
  case num < 0:
    console.log(`Your number ${num} is negative`);
    break;
  case num > 0:
    console.log(`Your number is ${num} is positive`);
    break;
  case num === 0:
    console.log(`Your number is 0`);
    break;
}
//elligible to vote
age = 18;
if (age >= 18 && age <= 99) {
  console.log(`Your age is elligible to vote`);
} else {
  console.log(`Not elligible to vote`);
}

//switch case to determine day
day = 7;
switch (day) {
  case 1:
    console.log(`The given day is Sunday`);
    break;
  case 2:
    console.log(`The given day is Monday`);
    break;
  case 3:
    console.log(`The given day is Tuesday`);
    break;
  case 4:
    console.log(`The given day is Wednesday `);
    break;
  case 5:
    console.log(`The given day is Thursday`);
    break;
  case 6:
    console.log(`The given day is Friday`);
    break;
  case 7:
    console.log(`The given day is Saturday`);
    break;
}

// check the string
const name = "MINAL";
if (name.length > 10) {
  console.log("The length exceeds 10 character");
} else {
  console.log(`The given length ${name.length} which is less than 10`);
}

//leap year
const year = 2003;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}

/**----------------ASSIGNMENT TASK 2------------------------------------------------------------------------------------
 * 1) Password Strength Checker: Write code using if/else statements to check the
 *   strength of a password based on its length. Print messages like &quot;Strong password,&quot;
 *   &quot;Medium password,&quot; or &quot;Weak password&quot; depending on the length criteria (e.g., strong:
 *   &gt; 12 characters, medium: 8-12 characters, weak: less than 8 characters).
 */
const password = "Minal12323345";
switch (true) {
  case password.length > 12:
    console.log(`The given ${password} is a strong password!!`);
    break;
  case password.length >= 8 && password.length < 12:
    console.log(`The given ${password} is a medium password!!`);
    break;
  case password.length < 8:
    console.log(`The given ${password} is weak password!!`);
    break;
}

/**
 * 2) Vowel or Consonant: Write a program using if/else to determine if a character entered
by the user is a vowel (a, e, i, o, u) or a consonant. Consider uppercase and lowercase
letters.
 */
let letter = "b";
let upperLetter = letter.toUpperCase();
upperLetter === "A" ||
upperLetter === "E" ||
upperLetter === "I" ||
upperLetter === "O" ||
upperLetter === "I" ||
upperLetter === "U"
  ? console.log(`The given variable ${upperLetter} is vowel letter`)
  : console.log(`The given variable ${upperLetter} is consonant`);

/**
 * Number Guessing Game: Create a simple guessing game using if/else statements.
Generate a random number between 1 and 10 and allow the user to guess it. Print
messages like &quot;Correct!&quot; or &quot;Guess higher/lower&quot; based on their input.
 */
let number = Math.floor(Math.random() * 10) + 1;
// let userValue=window.prompt("Enter a matching number :")
let userValue = 10;
let vul = Number(userValue);
if (userValue === number) {
  console.log(
    `The given number selected by user,which is ${vul} matches the random number`
  );
} else {
  console.log(`The given number didnot match`);
}

/**
 * Calculate Price with Tax: Write code using if/else to calculate the final price of a
product considering a sales tax rate (e.g., 8%). Take the product price and tax rate as
inputs and print the final price with tax.
 */

let product = 1200;
let tax = 8;
const finalPrice = (8 / 100) * 1200;
console.log(finalPrice);

/**
 * Simple Calculator: Develop a basic calculator using if/else statements. Allow the user
 * to enter two numbers and an operator (+, -, *, /). Based on the operator, perform the
 * calculation and print the result.
 */
const numm1 = 4;
const numm2 = 6;
const operator = "/";
let value;
switch (true) {
  case operator === "+":
    value = numm1 + numm2;
    console.log(value);
    break;
  case operator === "-":
    value = numm2 - numm1;
    console.log(value);
    break;
  case operator === "*":
    value = numm1 * numm2;
    console.log(value);
    break;
  case operator === "/":
    value = numm2 / numm1;
    console.log(value);
    break;
}
/**
 * Movie Rating Recommendation: Write code using switch/case to recommend a
 * movie genre based on a user&#39;s age. Use different cases for age ranges (e.g., children,
 * teenagers, adults) and suggest appropriate genres (e.g., animation, action, drama).
 */
const agee = 44;
let viewers;

if (agee > 5 && agee < 12) {
  viewers = "Children";
} else if (agee >= 12 && agee <= 20) {
  viewers = "Teen";
} else if (agee >= 21 && agee < 50) {
  viewers = "Adults";
} else {
  viewers = "Old Aged People";
}

switch (viewers) {
  case "Children":
    console.log("You can watch animation");
    break;
  case "Teen":
    console.log("You can watch action");
    break;
  case "Adults":
    console.log("You can watch drama");
    break;
  case "Old Aged People":
    console.log("You can watch classic movies");
    break;
  default:
    console.log("No recommendation available");
    break;
}

/**\
 * Positive, Zero, or Negative: Write code using if/else statements to check if a number
 *is positive, zero, or negative. Print the corresponding message.
 */
 const numk = -8;
 if (numk < 0) {
   console.log(`Your number ${numk} is negative`);
 } else if (numk > 0) {
   console.log(`Your number is ${numk} is positive`);
 } else {
   console.log(`Your number is 0`);
 }

 function isWeekend(date) {
    
    const givenDate = new Date(date);
    
    
    const dayOfWeek = givenDate.getDay();
    

    if (dayOfWeek === 6 || dayOfWeek === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const date = '2024-05-25';  
  if (isWeekend(date)) {
    console.log(`${date} falls on a weekend.`);
  } else {
    console.log(`${date} is a weekday.`);
  }





  function checkDivisibility(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(`${number} is divisible by both 3 and 5.`);
    } else if (number % 3 === 0) {
      console.log(`${number} is divisible by 3.`);
    } else if (number % 5 === 0) {
      console.log(`${number} is divisible by 5.`);
    } else {
      console.log(`${number} is not divisible by 3 or 5.`);
    }
  }

  const numb = 15; 
  checkDivisibility(numb);
  
  


 
function checkEvenOrOddSum() {

    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    const sum = num1 + num2;
    if (sum % 2 === 0) {
      console.log(`The sum of ${num1} and ${num2} is ${sum}, which is even.`);
    } else {
      console.log(`The sum of ${num1} and ${num2} is ${sum}, which is odd.`);
    }
  }
  
  checkEvenOrOddSum();
  