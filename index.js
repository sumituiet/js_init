console.log('hello world!')

// defining variables

let firstName ='sumit';
let age=21;
let student=false;

// ------------------------- inputs and access ------------------------- 

// print to the console
console.log('name: ',firstName,"age: ",age,'is student: ',student);

// assess html elements by id

document.getElementById("p1").innerHTML = "hello "+ firstName;
document.getElementById("p2").innerHTML = "age: "+ age;
document.getElementById("p3").innerHTML = "is student: "+ student;

// user input by prompt
// let username = window.prompt("enter your username");
// document.getElementById('username').innerHTML = username;

// user input by HTML Input tag and button 
let todo = 'one';

document.getElementById("submit").onclick = function(){
    todo = document.getElementById("todo").value;
    console.log(todo);
    document.getElementById("todo1").innerHTML = todo;
}

// -------------------------------- Type concersion -------------------------------- 

// let height = window.prompt("enter your height");;
let height = 1
console.log(typeof height)

height = Number(height)
console.log(typeof height)

height = String(height)
console.log(typeof height)

height = Boolean(height)
console.log(typeof height)


//  --------------------------------  math functions -------------------------------- 
// pi constant
let pi = Math.PI

// round functions round --> ceil --> floor

let num = 12.3456789;

console.log(Math.round(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))

// random number
let dice = Math.floor((Math.random() *6)+1)
console.log(dice)

//math min max 

let num1 = 10;
let num2 = 20;

console.log(Math.min(num1,num2))
console.log(Math.max(num1,num2))

// math power

let num3 = Math.pow(num1,num2)
console.log(num3)

// 
// ----------------------- string manipulations ----------------------- 
// 


let userName = '  sumit D Saini   ';

// remove empty space from string 
userName = userName.trim()

// change casing of a string
userName = userName.toUpperCase();
userName = userName.toLowerCase();

//  replace in string 
userName =userName.replace('d','R')

console.log(userName)

// length of a string
console.log(userName.length);
// accessing characters in a strings
console.log(userName.charAt(0)) 
// get index of a character
console.log(userName.indexOf('o'))
console.log(userName.lastIndexOf('i'))

// silce a string based on index
fname = userName.slice(0,5)
lname = userName.slice(8)

console.log(fname,lname)

// 
// ----------------------- if else ----------------------- 
// 

let condition = height

if(condition>12){
    console.log('condition exist')
}
else if(condition<0){
    console.log("condition doesn't exist")
}
else {
    console.log("condition is scrued")
}

// 
// ----------------------- Ternary operators ----------------------- 
// 

let adult = 21

let personAge = (adult>=18)? 'adult' : 'teen'
document.getElementById('operatorCheck').innerText = personAge
console.log(personAge)


// 
// ----------------------- checked property ----------------------- 
//

document.getElementById('myButton').onclick = function(){
    document.getElementById("checked").innerText = 'check me ';
    if (document.getElementById('myCheckBox').checked){
        console.log('checked')
        document.getElementById("checked").innerText = 'checked';
    }
    else{
        console.log('not checked')
        document.getElementById("checked").innerText = 'unchecked';

    }
}

document.getElementById('cardBtn').onclick = function(){
    if (document.getElementById('visabtn').checked){
        console.log('visa payments');
        document.getElementById("payments").innerText = 'visa payments';
    }
    else if (document.getElementById('mastercardbtn').checked){
        console.log('mastercard payments');
        document.getElementById("payments").innerText = 'mastercard payments';
    }
    else if (document.getElementById('paypalbtn').checked){
        console.log('paypal payments');
        document.getElementById("payments").innerText = 'paypal payments';
    }
    else{
        console.log('not checked');
        document.getElementById("payments").innerText = 'select a payment option';

    }
}

// 
// ----------------------- toLocalString() ----------------------- 
//

// let myNum =  456232.635
//myNum to rupees
// myNum = myNum.toLocaleString('en-IN',{style:'currency',currency:'INR'})
// console.log(myNum)

//myNum to percent
// myNum = myNum.toLocaleString(undefined,{style:'percent'})
// console.log(myNum)

//myNum to hindi
// myNum = myNum.toLocaleString('hi-IN')
// console.log(myNum)

// myNum = myNum.toLocaleString(undefined,{style:'unit',unit:'celsius'})
// console.log(myNum)

// 
// ----------------------- arrays ----------------------- 
//

// arrays = A variable that can have multiple values


let fruits = ['apple','orange','banana']; 

// change values at index
fruits[2] = 'pineapple'

// add element to arrays
fruits.push('banana');
console.log(fruits)
// pop an element
fruits.pop();

// add element to beginning
fruits.unshift('mangos');
console.log(fruits)
fruits.shift();

console.log(fruits)

console.log(fruits.indexOf('orange'))


// 
// ----------------------- loop on  arrays ----------------------- 
//

let prices = [22,23,2,1,12,34,32]

for (let i =0; i<prices.length;i++){
    console.log(prices[i])
}

// for up statement
for(let price of prices){
    console.log('statement',price);
}

// sorting an array

fruits = fruits.sort();


// 
// ----------------------- 2d arrays ----------------------- 
//

let vegetables = ['carrots','onions','potatoes']
let meats = ['eggs','chicken','ham']

let groceryList = [fruits,vegetables,meats]
console.log(groceryList)

// 
// ----------------------- spread operation ----------------------- 
//

// spread operation: allows an iterable such as an 
//                   array or string to be expanded 
//                   in places where zero or more arguments are expected
//                   (unpacks the elements)
//                   denoted by 3dots before an array or a string

let numbers = [1,123,2,1,23,2,1,32,23]

console.log(...numbers)
console.log(Math.max(...numbers))


// 
// ----------------------- reset parameters ----------------------- 
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
// ----------------------- callbacks ----------------------- 
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
// ----------------------- array.forEach()  ----------------------- 
//

// array.forEach() = executes a provided 
//                   callback function once for each array element

let students = ['patrick','squidward','spongebob'];
// students.forEach(capitalize)
students.forEach(displayConsole)


function capitalize(element){
    return element[0].toUpperCase() + element.substring(1);
}


// 
// ----------------------- array.map()  ----------------------- 
//

// array.map() = executes a provided callback function 
//               once for each array element
//               and create a new array

let upperStudents = students.map(capitalize)
upperStudents.forEach(displayConsole)

// 
// ----------------------- array.filter()  ----------------------- 
//

// array.filter() = creates a new array with all elements
//                  that pass the test provided by a function

let ages = [12,13,18,19,22,33,43,1,2,7,8]
let adults = ages.filter(checkAge)

adults.forEach(displayConsole)

function checkAge(element){
    return element >=18
}

// 
// ----------------------- array.reduce()  ----------------------- 
//

// array.reduce() = reduce an array to single value

let totalPrice = prices.reduce(checkOut)

console.log(totalPrice)

function checkOut(total,element){
    return total + element
}

// 
// ----------------------- array sorting   ----------------------- 
//

let grades = [55,25,44,60,63,64,35,51]

function descendingOrder(x,y){
    return y-x
}

grades = grades.sort(descendingOrder)

grades.forEach(displayConsole)


function ascendingOrder(x,y){
    return x-y
}
grades = grades.sort(ascendingOrder)

grades.forEach(displayConsole)
