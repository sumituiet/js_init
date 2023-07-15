// 
// ------------------------- function expression ------------------------- 
//

// function expression = function without name (anonymous functions )
//                       avoid pollutions the global scope with random fn names
//                       Write it, then forget about it


const greetings = function (username){
    console.log(`Hello ${username}`)
}

greetings('bro');

// 
// ------------------------- reset parameters ------------------------- 
//


// rest parameters: represents an indefinite number of parameters 
//                  (packs arguments into an array )

let a =1;
let b=2;
let c=3;
let d=4;
let e=5;

console.log(sum(a,b,c))


function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}

// 
// ------------------------- fn callbacks ------------------------- 
//

// callbacks = a function passed as an argument
//             to another function 

// benefits 
// ensures that a function is not going 
// to run before a task is completed
// helps is develop asynchronous code
// when one function has to wait for another function
// helps to avoid errors and other problems
// Ex. wait for a file to load and do something

let total = tot(2,3,displayDom);

function tot(x,y,callback){
    let result = x+y;
    callback(result)
}

function displayConsole(output){
    console.log(output)
}

function displayDom(output){
    document.getElementById('myLabel').innerText = output;
}



// 
// ------------------------- arrow function expression ------------------------- 
//

// arrow function = compact alternative to traditional function expression 
//  syntax =>

const greeting =(username) =>console.log(`Hello ${username}`)
greetings('bro');

const percentage = (x,y) => (x/y)*100

console.log(percentage(1,2))


// 
// ------------------------- array shuffle ------------------------- 
//
let cards = ['A','1','2','3','4','5','6','7','8','9','10','K','Q','J']

shuffle(cards)

console.log(cards)

function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex !=0){
        let randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex -= 1;

        [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]]
    }
    return array
}