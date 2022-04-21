document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();
if (day === "tuesday" || day === "thursday") {
  document.querySelector('#placeToSee').innerHTML = "Class Day!"
}else if (day === "saturday" || day === "sunday") {
  document.querySelector('#placeToSee').innerHTML = "Weekend!"
}else if (day === "wednesday") {
  document.querySelector('#placeToSee').innerHTML = "Hump Day!"
}else {
  document.querySelector('#placeToSee').innerHTML = "Boring old day"
}

}
