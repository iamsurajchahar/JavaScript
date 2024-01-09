//string is a sequence of characters used to represent text
// let str =  "Suraj Singh Chahar"
// console.log(str.length);
// console.log(str);
// console.log(str[1]);


//template literals
// A way to have embedded expression in strings
// let obj = {
//     item : "pen",
//     price : 10,
// };
// let Output = (`This is the price ${obj.price} of ${obj.item}`);
// console.log(Output);

//String Methods in Js
//these are build in funcations to manipulate a string

//st.toUpperCase()
//st.toLowerCase()
//st.trim() //remove whitespaces
//str.slice(start,end?) //return part of string
// str1.concat(str2) // joins str2 with str1
//str.replace(searchVal,newVal)
//str.charAt(idx)


let str = "Hello World";
str = str.toUpperCase(); //st.toUpperCase()
console.log(str);

let naam = "  hello world    Js"
console.log(naam.trim());


let str1 = "Hello ";
let str2 = "World";
let res  = str1.concat(str2);
console.log(res);


let sui = "hello";
console.log(sui.replace("he","p"));

let suie = "IloveJs";
console.log( suie.charAt(2));


 