// arrays
// collection of iteams

let arr = [21,3,231,3,45,53,21,24,45,3];
arr[5] = 33;  // Arrays are mutable
              //Strings are immutable
console.log(arr[5]);

//looping over array (iterable only in string,objects,and arrays)
//printing all the element of an array
for(let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}

//for-of loop
for(let el of arr){
    console.log(el);
}
//printing citis
let city = ["agra","mumbai","delhi","shmila","banglore"];
for(let i of city){
console.log(i.toUpperCase());
}

//Array Methods

//Push() : add to end
// pop() :delete from end and return
//toString:converts array to string

let fooditems = ["potato","apple","orange","mango"];
console.log(fooditems);
fooditems.pop();
console.log(fooditems);

//Concat() : joins multiple arrays and returns result

let marvel_heroes = ["ironman","thor","spiderman"];
let dc_heroes = ["superman","batman","flash"];
let heroes = marvel_heroes.concat(dc_heroes);
console.log(heroes);

//unshift(): add to start

let marvel_hero= ["ironman","thor","spiderman"];
marvel_hero.unshift("antman");
console.log(marvel_hero);

//shift() : delete from start and return
let marvel = ["ironman","thor","spiderman"];
let huehue = marvel.shift("spiderman");
console.log(huehue);

//slice() : return a piece of the array


//splice() : changr original array(add,remove,replace)
let bhai = [1,2,3,4,5,6,7];
// bhai.splice(2,2,101,102);
// console.log(bhai);

//adding element
// bhai.splice(2,0,101);  //2(index 2,delete 0 element,101 add kni hai);
// console.log(bhai);

//deleting element
// bhai.splice(3,1) //index 3 prr jake ek element ko delete kr do
// console.log(bhai);

//replacing an element

bhai.splice(3,1,101); //index 3 prr jake ek element ko delete kr do aur vahi add kr do
console.log(bhai); 

//Some more array medthods



//map

//create a new array with the result of some operation.the value its callback returns are used to form new arrray

//arr.map(callbackfnx(value,index,array))

let suie =[36,65,23];
let newarr =suie.map((val) =>{
    return val*2;
});
console.log(newarr);

//Filter Method

//create a new array of element that gve true for a condition/filter
//Eg:All even elements

let arry = [1,2,3,4,5,6,7];
let evenArr = arry.filter((val) => {
    return val%2 ===0;
});
console.log(evenArr);


//reduce method
//perform some operation and reduce the array to a single value. it returns that single value
let arri = [1,2,3,4];
const output = arri.reduce((res,curr)=> {
    return res + curr;
});
console.log(output);



 


