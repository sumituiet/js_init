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

let height = window.prompt("enter your height");;
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

// round fucntions round --> ceil --> floor

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

// projects

// simple counter done
// 3 dice roller program done
// hypotenuse calc practice program  done


// 
// ----------------------- string manupulations ----------------------- 
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
// get index of a charcter
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