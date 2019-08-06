

var Letter = function (word)  {  
    var letterArr = [];  
    this.newLetter = function (str) {
        this.letter = str; 
        this.blank = '_'; 
        this.guessed = false; 
    }; 
    this.singleLetter = function (word) {
        var arr = word.split('');  
        for (var i = 0; i < arr.length; i++) {
            var thisLetter = new this.newLetter(arr[i]); 
            letterArr.push(thisLetter); 
        }
        return letterArr;  
    }; 
    // this.guessed = false; 
    this.userGuess = (obj, str) => {
        if (str === obj.letter) {
            obj.guessed = true;  
            console.log('guesssed correct')
        } else {
            console.log('incorrect'); 
        }; 
    }; 


}; 

// var test = new Letter('word'); 
// console.log(test.singleLetter('word')); 
// test.userGuess(test.singleLetter('word')[0], 'w');  

module.exports = Letter; 