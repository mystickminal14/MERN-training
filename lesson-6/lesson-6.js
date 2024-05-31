// function Person(name){
//     this.name=name;

// }
// let onj= new Person('minal')
// console.log(onj)

// function minal(name){
//     console.log('Minal is greatest of all time',name)
// }
// const callback=(one,call)=>{
//     console.log(one,call)
// }
// callback(1,minal)

// const math=(num1,num2)=>{
//      console.log(`The sum is ${num1+num2} \n The subtract is ${num2-num1}`)
// }
// const buk=(num1,num2,fun)=>fun(num1,num2)
// buk(2,4,math)


// const promise=new Promise((resolve,reject)=>{
//     const sum=11;
//     if(sum===10){
//         resolve("success")
//     }else{
//         reject("Error")
//     }
// }).then(val=>console.log(val))
// .catch(err=>console.log(err))

// const mathematics=new Promise((resolve,reject)=>{
//     let a=5
//     let b=55
//     const subtract=b-a
//     if(subtract<5){
//         resolve(`The given value is less than 5 which is ${subtract}`)
//     }else{
//         reject("There is error since it is greater than 5")
//     }
// }).then(val=>console.log(val))
// .catch(err=>console.log(err))
let sub=[
    { year: 4, sem: 2, sc: 6 },
    { year: 4, sem: 1, sc: 6 },
    { year: 2, sem: 3, sc: 5 },
    { year: 4, sem: 3, sc: 10 },
    { year: 1, sem: 1, sc: 9 },
    { year: 4, sem: 3, sc: 7 },
    { year: 2, sem: 4, sc: 3 },
    { year: 3, sem: 4, sc: 2 },
    { year: 2, sem: 4, sc: 8 },
    { year: 3, sem: 3, sc: 3 },
    { year: 1, sem: 2, sc: 4 },
    { year: 4, sem: 1, sc: 9 },
    { year: 3, sem: 3, sc: 6 },
    { year: 1, sem: 2, sc: 5 },
    { year: 1, sem: 2, sc: 9 }
  ]
  const sort = () => {
    sortData = sub.sort((val, val2) => {
  
     if (val.year < val2.year  ) {
    
       return -1;
     } else if  (val.year > val2.year) {
       return 1;
     }else{
       return 0
     }
     
      
     
   });
   console.log(sortData);
 };
 sort()