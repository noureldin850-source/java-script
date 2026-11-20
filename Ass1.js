// // Part 1

// // 1=>
// const x = Number("123");
// console.log(x+7);

// // 2=>
// const y = 0
// if (y== false) {
//     console.log("invalid");
// }

// // 3=>
// for (let i = 0; i < 10; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

// // 4=>
// const arr = [1,2,3,4,5];
// const result = arr.filter((num) => num % 2 === 0);
// console.log(result);

// // 5=>
// arr1 = [1,2,3];
// arr2 = [4,5,6];
// const mixedArr = [...arr1, ...arr2];
// console.log(mixedArr);

// // 6=>
// const day = 2;
// switch (day) {
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("monday");
//         break;
//     case 3:
//         console.log("tuesday");
//         break;
//     case 4:
//         console.log("wednesday");
//         break;
//     case 5:
//         console.log("thursday");
//         break;
//     case 6:
//         console.log("friday");
//         break;
//     case 7:
//         console.log("saturday");
//         break;
//     default:
//         console.log("invalid number");
//         break;
// }

// // 7=>
// arr3 = ["a","ab","abc"];
// const lengthsresult = arr3.map((element,index) =>{
//     return element.length;
// })
// console.log(lengthsresult);

// // 8=>
// function divisibleBy3$5(num){
//     if(num % 3 == 0 && num % 5 == 0){
//         console.log("divisible by both");
//     }else
//         console.log("not divisible by both");
// }
// divisibleBy3$5(12);

// // 9=>
// const square = (num) => num **2;
// console.log(square(8));

// // 10=>
// const person = {name: "John", age: 25}
// const {name, age} = person;
// console.log(`${name} is ${age} years old`);

// // 12=>
// function getMessage(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("success")
//         }, 3000);
//     })
// }
// getMessage().then((value)=>{
//     console.log(value);
// });


// // 13=>
// arr = [1,3,7,4,5];
// function arrmax(arr){
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(arrmax(arr));

// // 14=>
//     function getKeys(obj) {
//     return Object.keys(obj);
// }
// const user = {
//     name: "John",
//     age: 30
// };
// console.log(getKeys(user));

// // 15=>
const text = "The quick brown fox"
function splitWords(str) {
    return str.split(" ");
}

console.log(splitWords(text));

// ===================================== //
// // Part 2
// // 1=>

    

// // 2=>
// hoisting => variables and functions are moved to the top of their scope before code execution
// Example:
// console.log(x);
// var x = 5;
// TDZ => Temporal Dead Zone => is the time between the creation of a variable and its initialization, during which the variable cannot be accessed
// Example:
// console.log(y);
// let y = 10;

// // 3=>
// (==)=> compares values only
// (===)=> compares values and types

// // 4=>
// try=> Contains the code that might throw an error
// catch=> Executes when an error occurs inside the try block and allows us to handle that error
// // 5=>
// conversion => compares values and types
// Example:
// console.log(5 === "5");
// coersion => compares values only
// Example:
// console.log(5 == "5");


