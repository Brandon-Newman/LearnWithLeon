//Write your pseduo code first! 
//get value out of input
//celcius = faren -32 x 5/9
//show farenheit on click

document.querySelector('#convert').addEventListener('click', change)

function change () {
    //console.log('sup sup')
    let tCelc = document.querySelector('#temp').value
    tCelc = tCelc * 9 / 5 + 32 
    document.querySelector('#conversion').innerText = `${tCelc}`

}