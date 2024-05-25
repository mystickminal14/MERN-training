// // for(i=1;i<=10;i++){
// //    if(i===5 ||i===6 ||i===7){
// //     continue;
// //    }
// //    console.log(i)

// // }
// let i =2
// while(i<=10){
//     if(i %2===0){
//         console.log(i)
//     }
//  i++
// }
// //calculate sum of natural numbers
// let sum=0
// for(i=1;i<=10;i++){
//     sum+=i

// }
// console.log(sum)

//calculate factorial of given number
let fact = 5;
var vv = 1;
while (fact > 0) {
  vv *= fact;
  fact--;
}
console.log(vv);
for (i = 1; i <= 5; i++) {
  let sq = i ** 2;
  console.log(sq);
}
for (i = 1; i <= 5; i++) {
  let sq = i ** 3;
  console.log(sq);
}
let names = ["minal", "kai", "vulnerable"];
for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}
let sum = [1, 2, 3, 4, 5];
let value = 0;
for (i = 0; i < sum.length; i++) {
  value += sum[i];
}
console.log(value);

// for(i=name.length-1;i<names.length;i++){
//     let bul=[names[i]]
// console.log(bul.reverse)
// }

let bnames = ["minal", "kai", "vulnerable"];
for (i = 0; i < bnames.length; i++) {
  n = bnames.reverse();
  console.log(n);
}
//**Q: Using a while loop, find the largest number in an array of numbers.**
let lNum = [1, 2, 3, 45, 6];
let bigNum = 0;
while (i < lNum.length) {
  if (lNum[i] > bigNum) {
    bigNum = lNum[i];
    console.log(bigNum);
  }
  i++;
}
//Write a for loop to calculate the sum of all even numbers from 1 to 20.**
let summ = 0;
for (i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    summ += i;

  }
}
console.log(summ)

//Question 12:
// **Q: Using a while loop, find the product of all odd numbers from 1 to 15.**

var pro = 1;
var i = 1;
while (i <= 15) {
    if (i % 2 !== 0) {
        pro *= i;
    }
    i++;
}
console.log(pro);

/*
**Q: Write a for loop to print the following pattern:**
```
*
**
***
****
*****
```
*/
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "*";
    }
    console.log(row);
}

let a = 0, b = 1, count = 0;
while (count < 10) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
    count++;
}
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let num = 1; num <= 20; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}
let number = 12345;
let reversedNumber = '';

while (number > 0) {
    reversedNumber += number % 10;
    number = Math.floor(number / 10);
}

console.log(parseInt(reversedNumber));

/**
 * 1. Right-Angled Triangle:
*
**
***
****
*****
 */
for(i=1;i<=5;i++){
    let x=''
    for(j=0;j<i;j++){
        x+='*'
    }
    console.log(x)
}
/**
 * 2. Solid Rectangle:
*******
*******
*******
*******
*******
 */
for(i=1;i<=5;i++){
    let x=''
    for(j=0;j<i;j++){
        x='******'
    }
    console.log(x)
}
/**
 * *****
****
***
**
*
 */
for (let i = 5; i > 0; i--) {
    let x = '';
    for (let j = 0; j < i; j++) {
        x += '*';
    }
    console.log(x);
}

for (let i = 1; i <= 5; i++) {
    let x = '';
    let spaces = 5 - i; 

    for (let j = 0; j < spaces; j++) {
        x += ' ';
    }
    for (let k = 0; k < (2 * i - 1); k++) {
        x += '*';
    }

    console.log(x);
}
for (let i = 5; i >= 1; i--) {
    let x = '';
    let spaces = 5 - i;
    for (let j = 0; j < spaces; j++) {
        x += ' ';
    }
    for (let k = 0; k < (2 * i - 1); k++) {
        x += '*';
    }
    console.log(x);
}
let width = 7, height = 5;
for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < width; j++) {
        if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}
let size=5
for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        if (i === Math.floor(size / 2) || j === Math.floor(size / 2)) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}
for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        if (j === i || j === size - i - 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}
for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 5; j >= 1; j--) {
        row += j;
    }
    console.log(row);
}
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += String.fromCharCode(65 + j);
    }
    console.log(row);
}
