const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
let computerMove, randomNumber;

function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
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
	console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
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
	console.log(
		'wywołano funkcję displayResults z argumentami: ' +
			argPlayerMove +
			', ' +
			argComputerMove
	);
	if (
		(argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
		(argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
		(argPlayerMove == 'nożyce' && argComputerMove == 'papier')
	) {
		printMessage('Wygrywasz!');
	} else if (argComputerMove == argPlayerMove) {
		printMessage('Remis');
	} else {
		printMessage('Przegrywasz :(');
	}
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
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
