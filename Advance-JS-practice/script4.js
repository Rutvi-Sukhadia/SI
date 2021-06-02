console.log("------------------Script4-------------------------");
/*                Advance for loops (ES6)                   */
//for of => values of array => iterating over arrays or strings ( does not work for objects as they are not iterable)
const basket = ['apples','oranges','grapes','mangoes']; //array
console.log("Printing array using for of loop:");
for(item of basket)
{
    console.log(item);
}

//for in => for object properties => enumerating objects (as arrays are treated as objects, for in will print indexes of array i.e. 0,1,2..)
const detailedBasket ={         //object
    apples: 6,
    oranges: 4,
    grapes: 50,
    mangoes: 12
};
console.log("Printing object using for in loop:");
for(item in detailedBasket)
{
    console.log(item);
}

/*                    ES7 features          */
//1. includes() function
const animals = ['dog','cat','cow','fox'];
console.log("animals array:",animals);
console.log("Is dog present?:",animals.includes('dog'));
console.log("Is elephant present?:",animals.includes('elephant'));
console.log("'Hello World' conatins 'd'?:","Hello World".includes('d'));

//2. Exponation symbol -> **
const square = (x) => x**2; //x raise to 2
const cube = (x) => x**3;
console.log("Square of 3: ",square(3));
console.log("Cube of 3: ",cube(3));

/*                     ES8 features          */
// string functions padStart() and padEnd() -> padding spaces to string
const str1 = "Hello";
console.log("String: ",str1);
console.log("Padded string from beginning: ",str1.padStart(10),"."); //total 10 spaces used including str1
console.log("Padded string from end: ",str1.padEnd(10),".");

//Object.entries and Object.values
//Earlier Object.keys used for looping through objects
const usernames = {
    username0: "Shurbhi",
    username1: "Shaan",
    username2: "Shaheer"
}

console.log("Displaying contents of object using Objects.key");
Object.keys(usernames).forEach((key,index) =>{  //key is property name and its value can be accessed through obj[key]
    console.log(index,key,usernames[key]);
})

console.log("Displaying contents of object using Objects.values");
Object.values(usernames).forEach(value =>{  //fetch only values of object i.e "shurbhi", "shaan" etc
    console.log(value);
})

console.log("Displaying contents of object using Objects.entries");
Object.entries(usernames).forEach(value => {   //fetches both property value pairs
    console.log(value);
})

console.log("Mapping contents of object using Objects.entries");
const mapUsernames = Object.entries(usernames).map(value => {   
    return value[1] + value[0].replace('username','');
})
console.log(mapUsernames);

/*                  ES10 features                   */
//flat(levels) -> flatens array upto specified level number (default is 1)
const accountEntries = ["Rohan","Shaily",["Rakesh","Rupa",["Rudra"]],[[["Hitesh","Akash"]]],,,"Kiran"];
console.log("Accounts Array:\n",accountEntries);
console.log("Using only flat(): \n",accountEntries.flat());
console.log("Using flat(3) with 3 being max number of nesting: \n",accountEntries.flat(3)); 

//flatMap() -> combination of flat and map -> maps and then flattens to depth level 1
const accountEntriesMap = accountEntries.flatMap(acc => acc + "@123",3);
console.log("Appending '@123' to all accounts using flatMap():\n",accountEntriesMap);

//trimStart() and trimEnd() functions -> trims additional spaces from front and end of a string
const email1 = "           abcxyz@gmail.com             ";
console.log("Email before trim:",email1,".");
console.log("Email after trimming from start and end:",email1.trimStart().trimEnd(),".");

//Object.fromEntries -> converts arrays with key: value pairs to objects
//Object.entries is opposite -> gives object as array
const userProfiles = [['commanderJay',30],['officerRay',25],['subofiicerJan',28]];
const userProfileObj = Object.fromEntries(userProfiles);
console.log("User Profiles Array: ",userProfiles);
console.log("User Profile Object: using .fromEntries() ",userProfileObj);
console.log("Using .entries on user profiles object: ",Object.entries(userProfileObj));
