const Letter = require('./letter');
const Word = require('./word');
var inquirer = require('inquirer');
var randomWords = require('random-words');
var guesses = []; 
var thisGuess; 

//pick a word 
function wordPick() {
    return randomWords()
}

function guessPrompt() {
    inquirer
        .prompt([{
            type: 'input',
            message: 'Guess a letter',
            name: 'letterGuess'
        }])
        .then(function (res) {
            guesses.push(res.letterGuess); 
        })
        .catch((err) => console.log(err)); 
}

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
            console.log(thisGame.word)
            thisGame.displayWord(thisGame.letterArr);
            guessPrompt(); 
            thisGuess = guesses[guesses.length - 1];  
            thisGame.wordGuess(thisGame.letterArr, thisGuess); 
        }
    })
    .catch((err) => console.log(err));