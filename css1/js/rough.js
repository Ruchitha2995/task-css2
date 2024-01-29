

// let number = 45;
// {
//     console.log(number)
// }


// var a = 20;
// {
//     console.log(a)
// }


// {
//     let b = 50;
//     console.log(b)
// }


// {
//     var c = 60;
//     console.log(c)
// }

// {
//     const d = 70;
//     console.log(d)
// // }
// let student=68;

// if (student >= 90 && student < 100){
//     console.log("going to trip")
// }
// else if (student >= 80 && student < 90){
//     console.log("going to watching move")
// }
// else if (student >= 70 && student < 80){
//     console.log("going to resturent")
// }
// else if (student >= 60 && student < 70){
//     console.log("buy the sweets")
// }
// else if (student >= 50 && student < 60){
//     console.log("buy the chocalate")
// }
// else if (student >= 40 && student < 50){
//     console.log("buy the pen")
// }
// else{
//     console.log("fail")
// }


// for(let i=1; i<=20; i++){
//     if(i%2==0){
//         console.log(i*2)
//     }
//     else{
//         console.log(i*3)
//     }
// }

let i=5;
 for(let i=1; i<=20; i++ ){
  if (i%1==0){
    console.log(i*5)
  }
 }



// let a="ruchitha"
// let b="";
// for(let i of a){
//     b=i+b
// }
// console.log(b)


// a="ruchitha"
// console.log(a.split("").reverse().join(""));



// function add (a,b){
//     return a+b;
// }
// console.log(add(4,5));



// const add = 
// function (a,b){
//     return a+b
// }
// console.log (add(5,7))


// const add =(a,b)=>{
//     return a+b
// }
// console.log(add(5,6))


// const add = (a,b) =>{
//     return a+b
// }
// console.log(add(10,5))


// const minus= (c,d) =>{
//     return c+d
// }
// console.log (minus(14,4))

// const i =(g,h)=>{
//     return g+h
// }
// console.log (i(10,50))

// const employee={
//   name:"rupasri",
//   id:1234,
//   age:22,
//   education:"btech"
// }
// console.log(employee)
// for(let i in employee){
    // console.log(i)
    // console.log(i+" "+employee[i])
// }


// const employee={
//     name:"ruchi",
//     id:123,
//     age:21,
//     education:"mtech"
// }
// // console.log(employee)
// for(let i in employee){
//     // console.log(i)
//     console.log (i+":"+employee[i])
// }

// const prompt = require("prompt-sync")();

// const employee=[
//     {
//     name:"rupasri",
//     id:1,
//     age:22,
//     education:"btech"
//   },
//   {
//     name:"sri",
//     id:2,
//     age:22,
//     education:"tech"
//   },
//   {
//     name:"rupa",
//     id:3,
//     age:22,
//     education:"Mtech"
//   },
//   {
//     name:"rupasree",
//     id:4,
//     age:22,
//     education:"bsc"
//   }

// ]  


//     const input=prompt("enter the id : ");
//     for(let i in employee){
//         if(input==employee[i].id){
//             console.log(employee[i])
//         }

//     }


// const cinema =[
//     {
//         name:"RRR",
//         screen:1,
//         acter:"RC NTR" ,
//         dictector:"rajmouli"
//     },

//     {
//         name:"balagam",
//         screen:2,
//         acter:"priyadarshi" ,
//         dictector:"venu"
//     },

//     {
//         name:"dasara",
//         screen:3,
//         acter:"nani" ,
//         dictector:"srikanth"
//     },
//     {
//         name:"love today",
//         screen:4,
//         acter:"ivana" ,
//         dictector:"pradeep"
//     },
    
//     {
//         name:"sir",
//         screen:5,
//         acter:"dhanush" ,
//         dictector:"vaathi"
//     }

// ]
// const input=prompt("enter the screen")
// for(let i in cinema){
//     if(input==cinema[i].screen){
//         console.log(cinema[i])
//     }

// }

// // // console.log("ruchitha")


function isLeapYear(year) {
  if ( ( year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0) ) { 
      console.log(`${year} is a leap year`); 
  } else {
      console.log(`${year} is not a leap year`); 
  }
}