'use strict' ;
let js = "amazing";//declaring a variable using let
//console.log(40+8+23);//output in the browser's console.log() function

//let is used when you want to declare empty variables or we want to be able to mutate the variables later
//const variables can not be changed
//var works the same as let.let is block scoped var is function scoped 
//operator presidence

// coding challenge one
// const markHeight = 1.69;
// const johnHeight = 1.95;
// const markWeight = 95;
// const johnWeight = 78;
// bmiJohn = (johnWeight/(johnHeight**2));
// bmiMark = (markWeight/(markHeight**2));

// markHeightBMI = (bmiMark>bmiJohn);
// console.log(`marks height is ${bmiMark} `);
// formated stings are writtern as follows: 
// string = `i'm ${firstName} nice to meet you ${yourName}`
//allows you to dynamically add variables in a string in aneasy to read form
// to create multi line strings just hit enter.

// type conversion

//converting string to number->console.log(number(year)) year="2017"
//Number() gives a converted version but the value in the variable is still a sting
//String() converts a number to string and returns. must start with caps

// type coercion

//console.log('i am '+23+' years old')
//the plus automatically converts 23 to a string
//the minus,multiply,divide operator converts strings to numbers
let n = '1'+1;//converts the 1 to string and concatenates. result is 11
n = n-1//converts 11 to a number and subtracts 1. result is 10
console.log(n)//final result is 10 

//truthy falsy
// the 5 falsy values are :0,'',undefined,null,NaN. if you try converting them to 
//boolean they become false
//the rest will become true is converted to a boolean
// converting to a boolean->console.log(Boolean('0'))

//equality operators
// === exactly the same. does not perform type coersion
// == loosely the same. performs type conversion. avoid 
// !== exactly not the same. does not perform type coersion
// != loosely . performs type conversion. avoid

//logical logic
const hasDL = true;
const hasGoodVision = true;

// console.log(hasDL && hasGoodVision); //and
// console.log(hasDL || hasGoodVision); //or



// avgDolphins = (96+108+89)/3
// avgKoala = (88+91+110)/3
// if(avgKoala < avgDolphins){
//     console.log("dolphins won")
// }
// else if(avgKoala > avgDolphins){
//     console.log("koalas won")
// }
// else {
//     console.log("draw")
// }

// avgDolphins = (96+108+89)
// avgKoala = (88+91+110)
// if (avgKoala>100 && avgKoala>avgDolphins){
//     console.log("koalas won")
// }
// else if (avgDolphins > 100 && avgDolphins>avgKoala){
//     console.log("dolphins won")
// }
// else if (avgKoala === avgDolphins && avgKoala>= 100){
//     console.log("draw")
// }
// else {
//     console.log("naah")
// }

// switch statement
// const day = 'saturday'
// switch (day) {
//     case 'monday':
//         console.log("jjj")
//         break
//     case 'wednesday':
//         console.log("kkk")
//         break
//     case 'sunday':
//     case 'saturday':
//         console.log("wikendi")
//         break
//      default:
//         console.log("not a valid day")
// }



// conditional/ternary operator?
// has 3 parts. condition if else
// const drink = age>= 18 ? 'wine': 'juice';
//sets drink to wine if age is >= 18 else sets it to water
// const bill = 400
// const tip = bill<=300 && bill >= 50 ? (0.15*bill):(0.20*bill);
// console.log(tip);
 
// functions
// function logger(){
//     console.log('vc')
// }
// logger();
//function expressions
// const age1 = function (birthyear){
//     return 2022 - birthyear
// }
// //arrow function
//  const age3 = birthyear => 2037 - birthyear;
//  //calling
// const age = age3(1990)
// // arrow functions with multiple arguments
// const age4 = (birthyear, name)=>{
//     const age = 2037 - birthyear;
//     return `${name} is ${age} years old`;
// }
// console.log(age4(1990,"nel"))
// functions coding challange 
// const avg  = (score1,score2,score3) => {
//     var mean = (score1+score2+score3)/3;
//     return mean;
// }
 
// var koalaavg = avg(85,54,41);
// var dolphinavg = avg(23,34,27);
// checkwinner(koalaavg,dolphinavg);

// function checkwinner (score1,score2){
//     if (score1 >= 2*score2){
//         console.log("koala won");
//     }
//     else if (score2 >= 2*score1){
//         console.log("dolphin won");
//     }
//     else{
//         console.log("no winner");
//     }
// }
//arrays
// length of array = array.length
//array methods
//add
// Array.push - adds at the end of the array
// unshift -adderals at the beginning of the array
// //remove
// pop - removes at the end of the array
// shift - removes at the beginning of the array
// //find
// indexOf("")-index
//includes("")-true or false uses strict equality

//array coding challange
// function tips (bills) {
//     let tiips=[];
//     for (let i=0; i<bills.length; i++){
//         if (bills[i]<=300 && bills[i]>= 50){
//             let tip = 0.15*bills[i];
//             tiips.push(tip);
//         }
//         else{
//             let tip = 0.20*bills[i];
//             tiips.push(tip);
//         }

//     }
//     console.log(tiips);
//     let total = []
//     for(let i=0; i<bills.length; i++){
//         total[i] = bills[i]+tiips[i];
//     }
//     console.log(total);
// }

// let bills = [20,200,800];
// tips(bills)
//json objects
// const user = {
//     lastname: "nelson",
//     middlename: "muthomi",
//     friends: ['d','g'],
//     calcAge: function(year){
//        return 2023-year;
//     }
// }
// console.log(user.lastname);
// console.log(["lastname"]);
// user.surname = 'sensei';
// console.log(`${user.lastname} has ${(user.friends.length)} friends and his best friend is${user.middlename}`)