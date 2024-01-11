// //async await >> promis chains >> callback hell
// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("three"); //asynchronous programming
// },0);

// console.log("four");
// console.log("five");

// //Callbacks
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,2, sum);

// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });

// //Callback hell
// //Callback hell : Nested Callbacks stacked below one another forming a pyramid structure
// //(Pyramid of Doom)

// //This style of programming becomes difficult to understand and manage

 

// //callbackhell
// function getData(dataId, getNextData){
//     setTimeout(() =>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }                         //callback hell
//     },2000);
// }
// getData(1,() =>{
//     getData(2); 
// });



//promises
//promise is for eventual completion of task.it is an object in JS
//it a solution to callback hell.
// function getdata(dataID,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }
// let promise = getdata(123);

//Async function

function asyncfuncdata1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data1");
            resolve("Success");
        }, 5000);
    })                                  //Async function
} 

function asyncfuncdata2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data2");
            resolve("Success");
        }, 5000);
    })                                  //Async function
} 

// console.log("fetching the data1......");
// let p1 = asyncfuncdata1();
// p1.then((res)=>{
//     console.log(res);
// });                                   //these function are running prallelly

// console.log("fetching the data2......");
// let p2 = asyncfuncdata2();
// p2.then((res)=>{
//     console.log(res);
// });
 

//going to use chaining
//ek then ke under dusara then kyuki hum chate hai ki ek ke execution ke bad dusra ka execution ho

console.log("Data1 is loading...");
let p1  =asyncfuncdata1();
p1.then((res)=>{   //chaining
    console.log(res);
    console.log("Data1 is loaded now fetching Data2...");
    let p2 = asyncfuncdata2();
    p2.then((res)=>{
        console.log(res);
        console.log("Data2 is loaded");
    })
})



//Promise chaining

// getdata(1)
//       .then((res)=>{
//         return getData(2);
//       })
//       .then((res)=>{
//         console.log(res);
//       });