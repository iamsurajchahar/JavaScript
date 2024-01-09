// Conditonal Statement
//to implement some condition in the code


//if-else statement
let age = 98;
if(age>18){
    console.log("you are eligible for voting");
}
else{
    console.log("You are not eligible for Voting");
}


//if statement
let mode = "black"
let color;
if( mode == "black"){
    color = "black";
}
if(mode == "White"){
    color = "White";
}
console.log(color);

//syntax -> rules


//else-if statment
if(age<18){
    console.log("You are junior");
}
else if(age>60){
    console.log("You are Senior")
}
else{
    console.log("adult");
}

//Ternary Operators
//conditon ? true output : false output
//age > 18 ? "adult" : "Not adult";

let level = 25;
let result =  level>=18 ? "adult": "Not Adult"; //compact if-else Statement
console.log(result)