console.log("------------------Script2-------------------------");
const array = [1,2,10,15];
const double=[]; //empty array
//foreach
array.forEach(num => double.push(num*2));
console.log("array: \n",array);
console.log("For each: Array * 2:\n",double);

//map => perform some operation on array and it returns new array
const mapArray = array.map(num => num * 3);
console.log("Map: Array * 3:\n",mapArray);

//filter => returns new array with elemnts that satisfy the conditions
const filterArray = array.filter(num => num > 7);
console.log("Filter: Elements > 7 : \n",filterArray);

//reduce => returns a new array reduce(function, accumulator initialization)
const reduceArray = array.reduce((accumulator, num) => {   //accumulator will be a variable to store values from the body of function and num will be array elements
    return accumulator + num;
},0); //accumulator is initialized to 0
console.log("Reduce: Sum of array:\n",reduceArray);

const array2 = [[1,2],[3,4],[5,6]];
const flattenArray = array2.reduce((accumulator,arr) => {
    //debugger;
    return accumulator.concat(arr);
},[]);
console.log("Array2:\n",array2);
console.log("Flatten array2: (using reduce)\n",flattenArray);



