//--- Easy
//create a variable and assign it a number

//minus 10 from that number

//print that number to the console

//--- Medium
//create a variable that holds a value from the input

//add 25 to that number

//alert that number

//--- Hard
//create a variable that holds the h1

//add an event listener to that element that console logs the sum of the two previous variables

function capitalizeIt (string){
    let array = string.split(" ")
    let answer = array.map(element => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();})
    answer = answer.join(' ')
    console.log(answer)
  }