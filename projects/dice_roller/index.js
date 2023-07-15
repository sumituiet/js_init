let dice1 =Math.floor((Math.random() *6)+1) 
let dice2=Math.floor((Math.random() *6)+1)
let dice3=Math.floor((Math.random() *6)+1);

document.getElementById('dice1').innerText = dice1;
document.getElementById('dice2').innerText = dice2;
document.getElementById('dice3').innerText = dice3;

console.log(dice1,dice2,dice3)