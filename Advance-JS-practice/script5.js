console.log("------------------Script5-------------------------");
//promise
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
    .catch(() => console.log('Error encountered!'))

const promise1 = new Promise((resolve,reject) => setTimeout(resolve,1000,'Promise 1 resolved'));
const promise2 = new Promise((resolve,reject) => setTimeout(resolve,2000,'Promise 2 resolved'));
const promise3 = new Promise((resolve,reject) => setTimeout(resolve,5000,'Promise 3 resolved'));

Promise.all([promise1,promise2,promise3])   //.all takes array of promises and returns array of values from each promsise
    .then(values => console.log(values));

const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
]
Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
    .then(array => {
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
    })
    .catch(err => console.log('Error !', err));
