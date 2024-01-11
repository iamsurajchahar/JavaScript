//inheritance is passing down properties and methods from parent class to child class.

class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    work(){
        console.log("solve problems, build something")
    }
}
let surajobj = new Engineer();


//Super Keyword
//The super keyword is uused to call the constructor of its parent class to access the parents properties and methods

