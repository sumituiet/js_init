let sum = 0;


document.getElementById('inc').onclick = function () {
    sum += 1;
    document.getElementById('number').innerHTML = sum;
}

document.getElementById('dec').onclick = function () {
    sum -= 1;
    document.getElementById('number').innerHTML = sum;
}

