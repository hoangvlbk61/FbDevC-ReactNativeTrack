/**
 * /*
 * id list:
 * - message:
 * - past-guess:
 * - chance:
 * - number:
 * - guessButton:
 * - restartButton:
 * @format
 */

// Config
const IDLIST = {
	MSG: "message",
	PASS_GUESS: "past-guess",
	CHANCE: "chance",
	NUMBER: "number",
	GUESS_BTN: "guessButton",
	RESTART_BTN: "restartButton",
	LOADING: "loading",
	TIMER: "timer",
};

const VALUE = {
	LOW: "LOW",
	HIGH: "HIGH",
};

const NEED = {
	LOWER: "LOWER",
	HIGHER: "HIGHER",
};

const MESSAGE = {
	INIT: "Let's start this interesting game now !!!",
	ERROR: (value, need) => `Your guess was too ${value}, guess ${need}`,
	SUCCESS: "Yay, you are the lord of success!",
	FAILURE: "You lose, let's try another time! Restart now!",
};

const STATUS = {
	INIT: "white",
	WIN: "#53e053",
	LOSE: "red",
	WRONG: "yellow",
};
// Default
let goalNumber = parseInt(Math.random() * 100);
let times = 0;
const MAX_TIMES = 2;
const MIN = 0;
const MAX = 100;
let pastGuess = [];

let MAX_INTERVALS = 3;
// support function
function setIdValue(id, value) {
	document.getElementById(id).innerText = value;
}
function getIdValue(id) {
	return document.getElementById(id).value;
}
function setNumber(number) {
	document.getElementById(IDLIST.NUMBER).value = number;
}
function updateColor(color) {
	document
		.getElementsByTagName("body")[0]
		.setAttribute("style", `background-color: ${color}`);
}

// Init
function init() {
	goalNumber = parseInt(Math.random() * 100);
	console.log("Your goal: ", goalNumber);
	setIdValue(IDLIST.MSG, MESSAGE.INIT);
	setIdValue(IDLIST.PASS_GUESS, "Nothing");
	setIdValue(IDLIST.CHANCE, MAX_TIMES);
	document
		.getElementById(IDLIST.GUESS_BTN)
		.addEventListener("click", onGuess);
	document
		.getElementById(IDLIST.RESTART_BTN)
		.addEventListener("click", onRestart);
}

// Operations
function onGuess(e) {
	if (times < MAX_TIMES) {
		const guessValue = parseInt(getIdValue(IDLIST.NUMBER), 10);
		if (!isNaN(guessValue)) {
			// raw process
			++times;
			pastGuess.push(guessValue);

			setIdValue(IDLIST.CHANCE, MAX_TIMES - times);
			setIdValue(IDLIST.PASS_GUESS, pastGuess.join(", "));
			console.log("You guessed: ", guessValue);
			setNumber("");

			// msg processing
			if (guessValue > goalNumber) {
				setIdValue(IDLIST.MSG, MESSAGE.ERROR(VALUE.HIGH, NEED.LOWER));
				updateColor(STATUS.WRONG);
			} else if (guessValue < goalNumber) {
				setIdValue(IDLIST.MSG, MESSAGE.ERROR(VALUE.LOW, NEED.HIGHER));
				updateColor(STATUS.WRONG);
			} else {
				onWin();
				return;
			}
		}
	}
	if (times === MAX_TIMES) {
		onLose();
	}
}

// End
function onLose() {
	document.getElementById(IDLIST.RESTART_BTN).setAttribute("style", "");
	document
		.getElementById(IDLIST.GUESS_BTN)
		.setAttribute("style", "display: none");
	updateColor(STATUS.LOSE);
	setIdValue(IDLIST.MSG, MESSAGE.FAILURE);
}

function onWin() {
	document.getElementById(IDLIST.RESTART_BTN).setAttribute("style", "");
	document
		.getElementById(IDLIST.GUESS_BTN)
		.setAttribute("style", "display: none");
	updateColor(STATUS.WIN);
	setIdValue(IDLIST.MSG, MESSAGE.SUCCESS);
}

function onRestart() {
	setIdValue(IDLIST.MSG, MESSAGE.INIT);
	init();
	document
		.getElementById(IDLIST.RESTART_BTN)
		.setAttribute("style", "display: none");
	document.getElementById(IDLIST.GUESS_BTN).setAttribute("style", "");
	times = 0;
	pastGuess = [];
	updateColor(STATUS.INIT);
	raiseLoading();
}

function raiseLoading() {
	let loadingTime = MAX_INTERVALS - 1;
	document.getElementById(IDLIST.TIMER).innerText = MAX_INTERVALS;
	document.getElementById(IDLIST.LOADING).setAttribute("style", "");
	let itv = setInterval(() => {
		if (loadingTime >= 0) {
			document.getElementById(IDLIST.TIMER).innerText = loadingTime--;
		} else {
			clearInterval(itv);
			document
				.getElementById(IDLIST.LOADING)
				.setAttribute("style", "display: none");
		}
	}, 1000);
}

init();
