console.log("------------------Script5-------------------------");
//promise => an object that may produce a single value(resolved value/reason for rejection) in future, => three possible states fulfilled, resolved or pending
const promise = new Promise((resolve,reject) => {
    var condition=true;
    if(condition)
        resolve("Promise resolved");
    else
        reject("Error, promise rejected");
})

promise
    .then(result => result + '!')
    .then(result2 => {
        console.log(result2);
        throw Error;
    })
    .catch((err) => console.log('Error encountered:',err))

const promise1 = new Promise((resolve,reject) => setTimeout(resolve,1000,'Promise 1 resolved'));
const promise2 = new Promise((resolve,reject) => setTimeout(resolve,2000,'Promise 2 resolved'));
const promise3 = new Promise((resolve,reject) => setTimeout(resolve,5000,'Promise 3 resolved'));

Promise.all([promise1,promise2,promise3])   //.all takes array of promises and returns array of values from each promsise
    .then(values => console.log(values));

//Fetching user,posts and albums data through promises:
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
Promise.all(urls.map(url =>
    fetch(url).then(response => response.json())
))
    .then(array => {
        console.log("Fetching user,posts and albums data through promises:");
        console.log('users', array[0]);
        console.log('posts', array[1]);
        console.log('albums', array[2]);
    })
    .catch(err => console.log('Error encountered:', err))
    .finally(() => console.log('Finally block execution'));


//async and await => use async frunctions for ayschronous execution like promises and in async functions use await in front of any promise
//Fetching users data
//without aysnc await 
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => console.log("Fetching users data Without aysnc and await:\n",result));

//Using async and await
async function fetchUsers(){
    //write functions that returns promises and use await keyword which ensures that the function pauses before we get response from promise
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json(); //response.json also returns promise so use await
    console.log("Fetching users data Using async and await:\n",result);
} 
fetchUsers();

//Fetching user,posts and albums data through aysnc function (ES8)
const getData = async function(){
    try{
        //for promise.all, we can use await and then use destructuring to store response from promises
        const [users,posts,albums] = await Promise.all(urls.map(url =>
            fetch(url).then(response => response.json())
        ))
        console.log("Fetching user,posts and albums data through aysnc function:");
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    }
    catch(err){
        console.log('Error encountered:', err);
    }
}
getData();

//Fetching user,posts and albums data through aysnc function (using for await of feature of ES9)
const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));  //just creates a fetch request promises for given urls array
    for (const request of arrayOfPromises) {
      console.log(request);
    }
    //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
    console.log("Fetching user,posts and albums data through aysnc function and for await of loop:");
    for await (const request of arrayOfPromises) {
      const data = await request.json(); 
      console.log(data)
    }
  }
  getData2();
