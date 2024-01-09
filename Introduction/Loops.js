// for loop
// Loops are used to execute a piece of code again and again
for(let i = 1; i<=5;i++){
    console.log("Hello World");  //syntax
}

//Infinite Loop
// a loop that never dies

//while Loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//Do-while
let hue = 1;
do{
    console.log("Chad Suraj Bhai");
    hue++;
} while(hue<=3);


//for-of loop (used for array and string)
let str = "Javascript";
let size =0;
for(let i of str){
    console.log("i = ",i);
    size++; 
}
console.log("string size = ", size);//for calculating the size


//for in loop (used for objects)
let student = {
  name: "Suraj Singh Chahar",
  age : 21,
  cgpa : 8.4,
  isPass : true,
};
for(let key in student){
    console.log("key = ",key,"value= ",student[key]);
}










