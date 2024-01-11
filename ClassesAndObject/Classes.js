class toyota{
    constructor(brand, milage){
        this.brand =brand;
        this.milage = milage;        //Constructors
        console.log("Creating new car!!")
    }

    Start(){
        console.log("start");
    }
    stop(){
        console.log("Stop");
    }
}
let lexus =  new toyota("toyota", 10);
console.log(lexus);
let fortuner =  new toyota("fortuner", 16);
console.log(fortuner);