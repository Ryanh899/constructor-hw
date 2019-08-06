const Letter = require('./letter');
const Word = require('./word');
var inquirer = require('inquirer');
var randomWords = require('random-words');
var math = require('mathjs')
var guesses = [];
var thisGuess;
var takeOne = 0;
var ifWin = 1;
var fixArrNum = [];
var toWin = 0; 
var wins = 0; 
var newGame; 
var sorted_arr; 

//decrement wrong guesses
function wrongGuess(obj) {
    var ifWrong = obj.wordSplit;
    for (var i = 0; i < ifWrong.length; i++) {
        if (ifWrong.includes(guesses[guesses.length - 1])) {
            // console.log('do not decrement')
        } else if (!ifWrong.includes(guesses[guesses.length - 1])) {
            takeOne += 1 / ifWrong.length;
            // console.log(takeOne); 
        }
    }
}

//if wins
function userWin(obj) {
    if (ifWin === toWin - 1) {
        console.log('you win, next word');
        guesses = []; 
        takeOne = 0;  
        fixArrNum = []; 
        toWin = 0; 
        wins++; 
        newGame = new Word(randomWords());
            console.log(newGame.word);
            newGame.displayWord(newGame.letterArr); 
            fixArrLength(newGame); 
            // winCheck(newGame); 
            guessPrompt(newGame); 
    };
}
//check if won
function winCheck(obj) {
    ifWin = 0;
    for (var i = 0; i < obj.letterArr.length; i++) {
        if (obj.letterArr[i].guessed === true) {
            ifWin++;
            // console.log(`if win count: ${ifWin}`)
            // console.log(`count goal: ${toWin - 1}`)
        };
    };
    userWin(obj)
};

function fixArrLength(obj) {
    for (var i = 0; i < obj.letterArr.length; i++) {
        toWin++; 
    }
    sorted_arr = obj.wordSplit.slice().sort();
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            fixArrNum.push(sorted_arr[i]);
        }
    }
    // console.log(fixArrNum, fixArrNum.length);
    for (var i = 0; i < fixArrNum.length; i++) {
        toWin - 1
        // console.log(toWin); 
    };
}; 


function guessPrompt(obj) {
    inquirer
        .prompt([{
            type: 'input',
            message: 'Guess a letter',
            name: 'letterGuess'
        }])
        .then(function (res) {
            winCheck(obj);
            if (guesses.includes(res.letterGuess)) {
                console.log('You already guessed that letter, try again');
                obj.displayWord(obj.letterArr);
                guessPrompt(obj);
            } else if (!guesses.includes(res.letterGuess) && math.ceil(takeOne) < 8) {
                guesses.push(res.letterGuess);
                obj.wordGuess(obj.letterArr, guesses[guesses.length - 1]);
                console.log(guesses)
                obj.displayWord(obj.letterArr);
                wrongGuess(obj)
                // console.log(math.ceil(takeOne));
                guessPrompt(obj);
            } else if (takeOne >= 8) {
                // console.log('Game over')
            }
        })
        .catch((err) => console.log(err));
}
+function startFunc () {
    inquirer
    .prompt([{
        type: 'list',
        message: 'Pick yes to start',
        choices: ['yes', 'no'],
        name: 'start'
    }])
    .then(function (res) {
        if (res.start === 'yes') {
            var thisGame = new Word(randomWords());
            console.log(thisGame.word);
            thisGame.displayWord(thisGame.letterArr);
            //winCheck(obj); 
            fixArrLength(thisGame); 
            winCheck(thisGame); 
            if (takeOne < 8) {
                guessPrompt(thisGame);
            } else if (takeOne >= 8) {
                // console.log('done')
            }
        }
    })
    .catch((err) => console.log(err));
}()
