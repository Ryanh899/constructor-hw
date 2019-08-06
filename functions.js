// var inquirer = require('inquirer'); 


inquirer
    .prompt([{
        type: 'input',  
        message: 'Guess a letter', 
        name: 'letterGuess'
    }])
    .then(function (res) {
        console.log(res)
    })
    .catch((err) => console.log(err)); 
​
