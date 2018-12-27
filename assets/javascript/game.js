
var words = ["friends", "seinfeld", "freshprince", "simpsons", "lawandorder", "fullhouse", "boymeetsworld", "savedbythebell", "scoobydoo", "rugrats", "cosbyshow"];

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 10;

function guessGame() {
    randomWord = words[Math.floor(Math.random() * words.length)];

    lettersOfWord = randomWord.split("");

    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

function img() {
    if (randomWord === words[0]) {
        document.getElementById("image").src = "assets/images/friends-films-photo-u17.jpg";
    }
    else if (randomWord === words[1]) {
        document.getElementById("image").src = "assets/images/seinfeld-tv-programs-photo-u7.jpg";
    }
    else if (randomWord === words[2]) {
        document.getElementById("image").src = "assets/images/the-fresh-prince-of-bel-air-tv-programs-photo-u4.jpg";
    }
    else if (randomWord === words[3]) {
        document.getElementById("image").src = "assets/images/the-simpsons-recording-artists-and-groups-photo-u15.jpg";
    }
    else if (randomWord === words[4]) {
        document.getElementById("image").src = "assets/images/law-and-order-tv-programs-photo-u1.jpg";
    }
    else if (randomWord === words[5]) {
        document.getElementById("image").src = "assets/images/full-house-films-photo-u4.jpg";
    }
    else if (randomWord === words[6]) {
        document.getElementById("image").src = "assets/images/boy-meets-world-tv-programs-photo-1.jpg";
    }
    else if (randomWord === words[7]) {
        document.getElementById("image").src = "assets/images/saved-by-the-bell-tv-programs-photo-u2.jpg";
    }
    else if (randomWord === words[8]) {
        document.getElementById("image").src = "assets/images/scooby-doo.png";
    }
    else if (randomWord === words[9]) {
        document.getElementById("image").src = "assets/images/rugrats.jpeg";
    }
    else if (randomWord === words[10]) {
        document.getElementById("image").src = "assets/images/cosby.jpeg";
    }
};

function reset() {
    guessesRemaining = 10;
    wrongGuess = [];
    blanksAndCorrect = [];
    guessGame()
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        img()
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/sorry-try-again.jpeg"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

guessGame()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}
