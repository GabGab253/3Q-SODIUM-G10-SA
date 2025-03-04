let words = ["PLANT", "CHAIR", "TABLE", "BRICK", "CROWN", "DRIVE",
 "FLUTE", "GRAPE", "CANDY", "JUMBO", "KITES", "LATCH", "MONEY", "NIGHT",
 "OCEAN", "PLUMB", "QUICK", "RANCH", "STORM", "THUMP", "UPSET", "VIDEO", 
 "WALTZ", "CREAM", "YOUTH", "ZEBRA", "MONTH", "BRAIN", "CLOVE", "DELTA",
 "EAGLE", "FANCY", "GIANT", "HOUSE", "INPUT", "GREEN", "CRAZY", "LIGHT",
 "BIRTH", "NOVEL", "OPERA", "PRISM", "QUIRK", "RHYME", "SCOUT", "TULIP",
 "URBAN", "TIRED", "MELON", "PIXEL", "YEARN", "ZONAL"];

let word = words[Math.floor(Math.random() * words.length)];
let guessedWord = ["_", "_", "_", "_", "_"]; 
let lives = 5;

document.getElementById("lives").textContent = lives;

function setupGame() {
    document.getElementById("lives").textContent = lives;
}

function checkLetter() {
    let input = prompt("Enter a letter:").toUpperCase();
    if (input === null || input.length !== 1 || !input.match(/[A-Z0-9]/)) {
        return;
    }
    
    if (word.includes(input) && !guessedWord.includes(input)) {
        let index0 = word[0] === input ? 0 : -1;
        let index1 = word[1] === input ? 1 : -1;
        let index2 = word[2] === input ? 2 : -1;
        let index3 = word[3] === input ? 3 : -1;
        let index4 = word[4] === input ? 4 : -1;
        
        if (index0 !== -1){ 
			guessedWord[0] = input;
		}
        if (index1 !== -1){ 
			guessedWord[1] = input;
		}
        if (index2 !== -1){ 
			guessedWord[2] = input;
		}
        if (index3 !== -1){ 
			guessedWord[3] = input;
			}
        if (index4 !== -1){ 
			guessedWord[4] = input;
			}
    } else {
        lives--;
        document.getElementById("lives").textContent = lives;
        revealBodyPart();
    }
    
    document.getElementById("s-0").textContent = guessedWord[0];
    document.getElementById("s-1").textContent = guessedWord[1];
    document.getElementById("s-2").textContent = guessedWord[2];
    document.getElementById("s-3").textContent = guessedWord[3];
    document.getElementById("s-4").textContent = guessedWord[4];

    if (!guessedWord.includes("_")) {
        alert("Congratulations! You guessed the word.");
        restartGame();
    } else if (lives === 0) {
        setTimeout(() => {
            alert("Game Over! The word was " + word);
            restartGame();
        }, 100);
    }
}

function revealBodyPart() {
    if (lives === 4){
		document.getElementById("head").style.display = "block";
	}
    if (lives === 3){
		document.getElementById("torso").style.display = "block";
	}
    if (lives === 2){
		document.getElementById("arm-1").style.display = "block";
	}
    if (lives === 1){
		document.getElementById("arm-2").style.display = "block";
	}
    if (lives === 0){
		document.getElementById("foot-1").style.display = "block";
	}
}

function restartGame() {
    if (confirm("Do you want to play again?")) {
        location.reload();
    }
}
