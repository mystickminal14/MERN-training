// console.log('10'+'10')
// console.log('10' + + 10)
// console.log(10 + +'10')
// console.log('10'- '10')
//if else
// const weight=window.prompt(`Enter your weight`)
// const height=window.prompt(`Enter your height`)
// let bmi=weight/(height*height)
// if (bmi<18.5){
//     console.log(`Your BMI ${bmi} is underweight`)
// }else if(bmi>=18.5 && bmi<=24.9){
//     console.log(`Your BMI ${bmi} indicates you are normal weight`)
// }else if(bmi>=25 && bmi<=29.9){
//  console.log(`Your BMI ${bmi} indicates overweight`)
// }else{
//     console.log(`Your ${bmi} indicates normal weight`)
// }

// let day=2
// switch(day){
//     case 1 : 
//        console.log("Today is sunday")
//        break;
//     case 2 : 
//        console.log("Today is monday")
//        break;
//     case 3:
//         console.log("today is oppurtunity day")
//         break;
//     default:
//         console.log('HELLO')
// }

//switch case for BMI

const weight=50
const height=4.5
let bmi=weight/(height*height)

switch(true){
    case (bmi<18.5):
        console.log(`Your Bmi ${bmi} is underweight`)
        break;
    case(bmi>=18.5 && bmi<=24.9):
        console.log(`Your Bmi ${bmi} indicates you are Normal`)
        break;
    case (bmi>=25 && bmi<=29.9):
        console.log(`Your Bmi ${bmi} indicates you are overweight`)
        break;
    case (bmi>=29.9):
        console.log(`your bmi ${bmi} indicates you are greater`)
        break

}