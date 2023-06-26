
let base =0;
let height = 0;

document.getElementById('submit').onclick = function() {

    base= Number(document.getElementById('side1').value);
    height = Number(document.getElementById('side2').value);

    console.log(base,height)

    document.getElementById('hypotenuse').innerText = Math.sqrt(Math.pow(base,2)+Math.pow(height,2));

}