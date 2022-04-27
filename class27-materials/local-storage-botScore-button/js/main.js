//Create a button that adds 1 to a botScore stored in localStorage 


if(!localStorage.getItem('boxScore')){
    localStorage.setItem('boxScore', 0)
}

document.querySelector('button').addEventListener('click', scoreKeeper)

function scoreKeeper() {
    let score = Number(localStorage.getItem('boxScore'))
    score +=1
    localStorage.setItem('boxScore', score)
    document.querySelector('h2').innerText = `${score}`
}