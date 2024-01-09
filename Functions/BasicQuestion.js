//Prinitng name with fucntion

function countVowels(str){
    for(const char of str){
        console.log(char);
    }
}
countVowels("Suraj");

//Create a function using the "FUNCTION" keyword that takes a string as an argument and retuens the number of vowles in the string

function hero(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
            count ++;
        }
    }
    console.log(count);
}
hero("MynameisSuraj");

// CREATE A ARROW FUNCTION TO PERFORM THE SAME TASK

const heroine = (str) =>{
      let count = 0;
      for(const char of str){
        if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
            count ++;
        }
    }
    console.log(count);
}
heroine("abcdcsdscs");

//Ques --> for a given array of number print the square of each value using the foreach loop

let arr =[1,2,3,4,5,6,7,8,9];
arr.forEach(function srq(val){
    let square = (val*val);
    console.log(`Square of the number are: `,square);
});

