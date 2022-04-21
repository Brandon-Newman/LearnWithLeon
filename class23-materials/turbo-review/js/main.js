// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let myVar = "My milkshakes bring all the boys to the yard"
console.log(myVar.includes("?"))
console.log(myVar.includes("all"))

//alternative
alert(myVar.endsWith( '?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let mySentence = "I wanted to be a jr. dev, but now I am a jr. dev"
console.log(mySentence.replaceAll("jr. dev", "software engineer"))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function paperRockScissors() {
    let decision = Math.random()
    if (decision < 0.33) {
        return "rock"
    }else if (decision < 0.66) {
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
    arr.forEach(choice => checkWin(choice))
}
playTheGameABunch(['rock', 'rock', 'scissors', 'paper', 'paper'])