console.log("------------------Script3-------------------------");
//Pass by value vs pass by ref
//Primitive types -> pass by value
//Objects (arrays are also treated as objects in js) -> pass by ref

//reference types
console.log([] === []); //gives false as arrays are treated as differec=nt objects
const obj1 = {value: 10}; //creates new obj1 -> and stores it into say box1
const obj2 = obj1; //obj2 has reference of obj1 which is stored in box1
const obj3 = {value: 10}; //new object is created and stored in say box3
console.log("obj1===obj2",obj1===obj2); // returns true coz of box1
console.log("obj1===obj3",obj1===obj3);  //returns false coz box1 and box3 are diff
obj1.value=20; //this change has effect on box1 so obj2.value will also be 20 but obj3.value will not be affected
console.log("Obj1",obj1);
console.log("Obj2",obj2);
console.log("Obj3",obj3);

//When we dont want direct reference and want to create a new obj with same properties
const obj4 = Object.assign({},obj1); // or use obj4 = {...obj1}
console.log("Obj4",obj4); //shallow cloning

//if objects conatins objects inside it then we have to perform deep cloning
const obj5 = {
    value:10,
    innerObj: {
        innerValue: 15
    }
};
const obj6 = {...obj5};
const deepClone = JSON.parse(JSON.stringify(obj5));
obj5.innerObj.innerValue=20;
console.log("Obj5",obj5);
console.log("shallow cloning",obj6);
console.log("deep cloning",deepClone);

//context => tells where we are within object
console.log(this); //returns windows obj => this returns what is the obj environment that we are in right now
function a1(){
    console.log(this);
}
a1(); //same as window.a1() or this.a1() so this returns window obj
const newObj ={
    a2: function(){
        console.log(this);
    }
}
newObj.a2(); //so this returns newObj object

//instantiation => making a new copy of the object and reusing the code
class Person{
    constructor(name,age){
        this.name= name;
        this.age = age;
    }
    introduce(){
        console.log(`Hello I am ${this.name} and I am ${this.age} years old.`);
    }
}
class Teacher extends Person{
    constructor(name,age,school,experience){
        super(name,age);
        this.school = school;
        this.experience = experience;
    }
    introduceAsTeacher(){
        console.log(`I have been working at ${this.school} for ${this.experience} years`);
    }
}

const t1 = new Teacher("Raj",28,"Delhi public school",2);
t1.introduce();
t1.introduceAsTeacher();


