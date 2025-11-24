const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
let computerMove, randomNumber;
const resultText = document.getElementById('messages');

function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printIconResult(icon) {
	let div = document.createElement('div');
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function buttonClicked(argButtonName) {
	clearMessages();
	randomNumber = Math.floor(Math.random() * 3 + 1);
	computerMove = getMoveName(randomNumber);
	displayResult(argButtonName, computerMove);
}

function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier';
	} else if (argMoveId == 3) {
		return 'nożyce';
	} else {
		printMessage(
			'Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".'
		);
		return 'kamień';
	}
}

function displayResult(argPlayerMove, argComputerMove) {
	if (
		(argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
		(argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
		(argPlayerMove == 'nożyce' && argComputerMove == 'papier')
	) {
		printMessage('<i class="fa-regular fa-face-laugh-beam"></i>');
		printMessage('Wygrywasz!');
		resultText.style.color = 'green';
	} else if (argComputerMove == argPlayerMove) {
		printMessage('<i class="fa-regular fa-face-meh"></i>');
		printMessage('Remis!');
		resultText.style.color = 'orange';
	} else {
		printMessage('<i class="fa-regular fa-face-frown-open"></i>');
		printMessage('Przegrywasz!');
		resultText.style.color = 'red';
	}
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
}

buttonRock.addEventListener('click', function () {
	buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function () {
	buttonClicked('papier');
});
buttonScissors.addEventListener('click', function () {
	buttonClicked('nożyce');
});
