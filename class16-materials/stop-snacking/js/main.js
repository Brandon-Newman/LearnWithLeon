//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', stopIt)

function stopIt () {
  let allThoseSnacks = Number(document.querySelector('#howManySnacks').value)
  //we want it to reset if they click multiple time so make sure #stops is set to empty string
  document.querySelector('#stops').innerText = ""
  for (i=1; i<= allThoseSnacks; i++) {
      document.querySelector('#stops').innerText += "Stop \n"
  }
}
  