// qn.1
function sum(a,b){
    console.log( a+b)
}
sum(4,4)
function avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i]; 
    }
    console.log(sum / arr.length); 
}

let arr = [1, 2, 3, 4, 6];
avg(arr);

function check(num){
    if(num%2===0){
        console.log("even")
    }else{
        console.log('odd')
    }
}
check(2)
function reverse(str){
  let splitString=str.split('')
  console.log(splitString)
  let rev=splitString.reverse()
  let reverseArray=rev.join('')
  console.log(reverseArray)
  
}
reverse("minal")
function max(arr){
    console.log(Math.max(...arr))
}
let array=[1,55,6,7]
max(array)

function faren(cel){
    console.log(cel*(9/5)+32)
}
faren(1)
function random(a,b){
    console.log(Math.floor(Math.random() * (b - a ) + a));

}
random(1,6)
function toUp(str) {
    if (str.length === 0) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}

var strl = 'minal';
console.log(toUp(strl)); 

function factorial(num){
    let fact=1;
    for(i=num; i>0;i--){
        fact*=i

    }
    console.log(fact)
}

factorial(4)

function occ(num,val){
    let count=0
    for(let i=0;i<num.length;i++){
        if(num[i]===val){
            count++
        }
    }
    console.log( count)
}
occ([1,2,1,1,3],1)
function sor(arr,arr2){
    let sort=[...arr,...arr2]
    console.log(sort.sort())
}
sor([1,5,7],[2,3,4])
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  

  console.log(isLeapYear(2020)); 
 
  function numberToWords(num) {
    const digitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    if (num < 0 || num > 9) {
        return "Number out of range";
    }

    return digitWords[num];
}

console.log(numberToWords(5)); 

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array should contain at least two elements";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        return "No second smallest element found";
    }

    return secondSmallest;
}

function pi(pi){
    console.log(2*3.16*(pi**2))
}
pi(3)
let len=5
let str='minalasd'
function truncate(str,len){
    if(str.length>len){
        str=str.slice(0,len)+'...'
    }
    console.log(str)
}
truncate(str,len)
function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array should contain at least two elements";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        return "No second smallest element found";
    }

    return secondSmallest;
}


console.log(findSecondSmallest([1, 1, 1])); 
function falsy(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!arr[i]) {
            console.log("Removing falsy value:", arr[i]);
            arr.splice(i, 1);
        } else {
            console.log("No such data:", arr[i]);
        }
    }
}

let arrs = [false, 'min'];
falsy(arrs);
console.log(arrs); 
function unique(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

let arr2 = [1, 2, 2];
let uniqueArray = unique(arr2);
console.log(uniqueArray);
