//Functions in JS
//Block of a code that perform a specific task, can be invoked whenever needed



//function Definiation                       //Function Call
                                             //functionName();
/*Function functionName(){
    //do some work
}*/

/*function functionName(param1,param2...){
    //do some work
}*/

function myfunction(msg){
  console.log(msg);
}
myfunction("I love JS");

//sum of two number

function sum(x,y){
    console.log(x + y);
}
sum(8,3);

//returning value
function sume(x,y){
    s = x + y;
    return s;
}
let val =sume(3,4);
console.log(val);


//Arrow Functions
//Compact way of writing a function

//const funcationName = (param1,param2....)=>{
//   do some work
//}

const arrowSum =(a,b)=>{
    console.log(a + b);
};
arrowSum(2,3);

const printHello = () => {
         console.log("Hello World");
}
printHello();


//forEach Loop in Arrays

//arr.forEach(callbackFunction)
//Callbackfunction : here, it is a function to execute for each element in the array

// A cakll back is a function passed as an arugment to antoher function

//arr.forEach((VAL) => {
    //console.log(val);
//})
let arr = [1,2,3,4,5,5];
arr.forEach(function printval(val){
    console.log(`The value is ${val}`);
})

//with arrow function

let hue = [1,2,3,4,5,6,67];
hue.forEach((val) => {
    console.log(val);
});


let sui =["pune","mumbai","agra"];
sui.forEach((val,idx,sui)=>{
    console.log(val.toUpperCase(),idx,sui);
});

//Higer Order Function

// -> take other functions as their parameter
// -> or return functions as their output




 