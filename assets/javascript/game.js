//get DOM target element ID
function htmlID(element) {
	var elementID = document.getElementById(element);
	return elementID;
	};

//global variables initial setting
var winCount = 0,
	lossCount = 0,
	guessesRemaining = 9,
	computerLetter,
	guessesTotal = [],
	alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	//another way to fill the array with all lower case letters of the alphabet using unicode
	//alphabet = [];
	//	for (i=97;i<=122;i++){
    //	alphabet[alphabet.length] = String.fromCharCode(i);
	//	};

function getComputerLetter(){
	var alphabetIndex = Math.floor(Math.random() * alphabet.length);
	computerLetter = alphabet[alphabetIndex];
	//cheatmode engaged!
	console.log(computerLetter);
};

//reset game to 9 guesses remaining and no guessed letters so far	
function resetGame(){
	htmlID("guessRemaining").textContent = "Guesses remaining: 9";
	htmlID("guessTotal").textContent = "Guesses so far: ";
	guessesRemaining = 9;
	guessesTotal = [];
	};

getComputerLetter();

//on click, get user input, convert to lower case, check against computer generated random letter
//if you guess the correct letter, tally a win, if you run out of guesses, tally a loss.
document.onkeydown = function(event) {
	guessesRemaining--;
	var input = event.key.toLowerCase();
	guessesTotal.push(" " + input);
	htmlID("guessRemaining").textContent = "Guesses remaining: " + guessesRemaining;
	htmlID("guessTotal").textContent = "Guesses so far: " + guessesTotal;
	//check for user win, report it and reset game
	if(computerLetter === input) {
		winCount++;
		htmlID("wins").textContent = "Wins: " + winCount;
		resetGame();
		getComputerLetter();
		}
	//check for user loss, report it and reset game
	if(guessesRemaining === 0){
		lossCount++;
		htmlID("loss").textContent = "Losses: " + lossCount;
		resetGame();
		getComputerLetter();
		}
	};