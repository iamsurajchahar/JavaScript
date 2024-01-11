//prototypes in JS
//A javascript object is an entity state and behavioe(properties and method)

//JS object have a special property called prototype.

//
//if object and prototype have same method object's method will be used

const student = {
    name: 'Suraj Singh Chahar',
    rollNo: '33',
    marks: 83,
    printMarks: function(){
        console.log("Marks = ",this.marks);
    },
};
const employee ={
    calctax() {
        console.log("Tax amount= 10%");
    },
};

const karan ={
    name: "karan",
    marks: 45,
    salary: 5000,
};

karan.__proto__ =employee;
karan.__proto__ = student;