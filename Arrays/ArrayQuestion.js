// Ques 1--- For a given array with marks of students -->[85,97,44,37,76,60]
//find the average marks of the entire class

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks){
//    sum+=val
// }
// let avg = sum/marks.length;
// console.log(`This is the average of the given marks: ${avg}`);

//Ques 2--- for a given array with prices of 5 items ->[250,645,300,900,50]
// all the items have an offer of 10% off on them.Change the array to store final price after applying offer.
// let items = [250,645,300,900,50];
// let i = 0;
// for(let val of items){
//    console.log(`Value of items at ${i} is ${val}`);
//    let offer = val/10;
//    items[i] = items[i]-offer;
//    console.log(`Value of items after discount: ${items[i]}`);
//    i++;
// }
// let items = [250,645,300,900,50];
// for(let i = 0; i<items.length;i++){
//    let offer = items[i]/10;
//    items[i]=items[i] - offer;
// }
// console.log(`This is the discounted price of the products: ${items}`);

// Ques 3 --> Create an array to store companies -> ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

//a.Remove the first company from the array
//b.Remove Uber and Add old in its place
//c.Add Amazon at the end

let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
let newarr = company.shift();
console.log(company);
company.splice(1,2,"ola");
console.log(company);
company.push("Amazon");
console.log(company);

