console.log("------------------Script1-------------------------");
//employee object
const emp = {
    ename: "Rohan",
    email: "rohan@gmail.com",
    salary: 25000
}

//Destructuring
const {ename,email} = emp;
let {salary} = emp;
console.log("Employee whole object: ",emp);
console.log("Destructuring of emp object: \n","Employee name:", ename, " Email: ",email," Salary: ",salary);

//Dynamically assigning object's properties
const player_name = "Dhoni";
const player = {
    [player_name] : "Hii I play cricket",
    [6+1] : "My Jersey number"
}
console.log("Player object: ",player);

const a ="data1";
const b = true;
const c = 12;
const obj = { a,b,c };   //No need to mention property: value format
console.log("Object: ",obj);

//Template strings and functions with default arguments
function greet(name="Rutvi",pet="dog"){
    return `Hello ${name}, nice to meet you and your lovely ${pet} `;
}
console.log("Calling Greet Function with default args:\n",greet());
const nm = prompt("Enter your name: ");
const pet = prompt("Enter your pet animal's name: ");
console.log("Calling Greet function with given values:\n",greet(nm,pet));

//closures
const first = () => {
    const msg = "Hii this is closure function's msg";
    const second = () => {
        console.log(msg);  //this function will store data of its parents and will be able to access them
    } 
    return second;
}

const closureFunc = first(); //first() will be executed and second() will retain msg data and will return second()
closureFunc(); //second() will be called

//Currying => converting functions that take multiple args into functions that take one arg at a time
console.log("Currying:");
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log("3*4:",curriedMultiply(3)(4)); // a=3 b=4 gives 3*4
const multiplyBy3 = curriedMultiply(3); //similar to table of 3
console.log("3*5:",multiplyBy3(5)); //gives 3*5

//Compose => putting two functions together where output of func1 is input of func2
const compose = (f,g) => (a) => f(g(a));  
const incrBy1 = (num) => num + 1;
console.log("Compose: ",compose(incrBy1,incrBy1)(7));
//f,g will be replaced by incrBy1 function and g(7) will execute returning 8 and then f(8) will be executed.. returning value 9


