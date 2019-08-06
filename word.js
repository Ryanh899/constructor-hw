const Letter = require('./letter');


var test = ['w', 'o', 'r', 'd'];
// var ya = new Letter(test); 
// console.log(ya.letter()); 

var Word = function (word) {
    this.displayArr = [];
    this.word = word;
    this.wordSplit = word.split('')
    this.lettersObj = new Letter(word);
    this.letterArr = this.lettersObj.singleLetter(word)
    this.displayWord = function (arr) {
        this.displayArr = []; 
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].guessed === true) {
                var showLetter = arr[i].letter;
                this.displayArr.push(showLetter);
            } else if (arr[i].guessed === false) {
                var showBlank = arr[i].blank; 
                this.displayArr.push(showBlank); 
            }
        }; 
        var show = this.displayArr.join(' '); 
        console.log(show);
    };
    this.wordGuess = function (arr, str) {
        for (var i = 0; i < arr.length; i++) {
            this.lettersObj.userGuess(arr[i], str);

        }
    }
};

// var testCon = new Word('word');
// console.log(testCon.displayWord(testCon.letterArr)); 

module.exports = Word; 