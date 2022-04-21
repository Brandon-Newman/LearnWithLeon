// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let myDrink = "    Bourbon"
myDrink = myDrink.trim()
console.log(myDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let varCheck = "I don't want an apple"
console.log(varCheck.search('apple'))
        //alt version for yes/no
if (varCheck.search('apple')!==-1){
    console.log('yes')
}else{
    console.log('no')
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function paperRockScissors () {
    let decision = Math.random()
    if (decision < 0.3333) {
        return "rock"
    }
    else if (decision<0.6666) {
        return "paper"
    }
    else return "scissors"
}
paperRockScissors()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin (playerChoice) {
    let botChoice = paperRockScissors()
    console.log(`${playerChoice} vs ${botChoice}`)
    if ( (playerChoice === 'rock' && botChoice === 'scissors') || 
    (playerChoice === 'paper' && botChoice === 'rock') ||
    (playerChoice === 'scissors' && botChoice === 'paper')) {
        alert("Winner winner chicken dinner")
    }
    else if ( (playerChoice === 'rock' && botChoice === 'rock') || 
    (playerChoice === 'paper' && botChoice === 'paper') ||
    (playerChoice === 'scissors' && botChoice === 'scissors')) {
        alert("Tie! Go again.")
    }
    else alert("Suck it loser!")
}

checkWin('rock')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playTheGameABunch (arr) {
    arr.forEach( choice => checkWin(choice))
    }
    playTheGameABunch(['scissors','rock','scissors'])


