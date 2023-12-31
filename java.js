window.addEventListener('DOMcontentLoaded', () => {
	const tiles = Array.from(document.querySelectorAll('.tile'));
	const playerDisplay = document.querySelector('.display-player');
	const resetButton = document.querySelector('#resetbtn');
	const announcer = document.querySelector('.announcer');

	let board = ["","","","","","","","",""];
	let currentPlayer = 'X';
	let isGameActive = true;

	const PLAYERX_WON = 'PLAYERX_WON';
	const PLAYER0_WON = 'PLAYER0_WON';
	const TIE = 'TIE'
});

tiles.addEventListener("click", () => {
	tiles.innerHTML = 'X';
});


const winningConditions = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [2,5,8],
         [2,4,6],
         [0,4,8],
         [1,4,7]
];
