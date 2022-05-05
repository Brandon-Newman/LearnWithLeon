//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
let indexID = 0

function getDrink(){
    let drink = document.querySelector('input').value

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        indexID = 0
        console.log(data.drinks)
        let numOfDrinks = data.drinks.length
        let currentDrink = indexID +1
        console.log(numOfDrinks)
        document.querySelector('h2').innerText = data.drinks[indexID].strDrink
        document.querySelector('img').src = data.drinks[indexID].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[indexID].strInstructions
        document.getElementById("DRANK").innerText = `${drink} drink ${currentDrink} of ${numOfDrinks}`

    })}

document.getElementById('Next').addEventListener('click', nextDrink)
function nextDrink(){
    indexID +=1
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.drinks)
        if (indexID >= data.drinks.length){
            indexID=0
        }
        let numOfDrinks = data.drinks.length
        let currentDrink = indexID +1
        console.log(numOfDrinks)
        document.querySelector('h2').innerText = data.drinks[indexID].strDrink
        document.querySelector('img').src = data.drinks[indexID].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[indexID].strInstructions
        document.getElementById("DRANK").innerText = `${drink} drink ${currentDrink} of ${numOfDrinks}`

    })}
