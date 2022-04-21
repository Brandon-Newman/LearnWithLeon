let total = 0

/*
document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector("#alpha").addEventListener('click', sub6)
}
*/


document.getElementById('pumpkin').onclick = makeZero
document.getElementById('dominosPizza').onclick = jumanji
document.getElementById('zebra').onclick = add9
document.getElementById('cantThinkOfAnything').onclick = sub2
document.getElementById('alpha').onclick = sub6


function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub6() {
  total = total -6
  document.querySelector('#placeToPutResult').innerHTML = total}
