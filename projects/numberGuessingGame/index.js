const answer = Math.floor(Math.random()*10+1)
let guesses =0

document.getElementById('submit').onclick = function() {
	let guess = Number(document.getElementById('guess').value)
    guesses+=1
    if (guess > answer) {
		document.getElementById('result').innerHTML = 'too big'
	} else if (guess < answer) {
		document.getElementById('result').innerHTML = 'too small'
	}
    else {
		document.getElementById('result').innerHTML = `you find the number. it took you ${guesses} guesses`
	}
}
