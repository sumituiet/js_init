
document.getElementById('submit').onclick =function(){
    let temp = Number(document.getElementById('temp').value)
    document.getElementById('result').innerText = temp
    let radio = document.getElementById('celsius').checked? true : document.getElementById('fahrenheit').checked? false : 'select a valid conversion matrix'

    if (radio == true){
        document.getElementById('result').innerText = Math.round(temp * 9/5 + 32)
    }else if (radio == false){
        document.getElementById('result').innerText = Math.round((temp - 32) * 5/9)
    }else{
        document.getElementById('result').innerText = radio
}
}
