document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerHTML = "YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
    document.querySelector('#placeToSee').innerHTML = "Its The Weekend"
  }else if (day === "wednesday") {
    document.querySelector('#placeToSee').innerHTML = "Hump Day!"
  }else{
    document.querySelector('#placeToSee').innerHTML = "BORING"
  }

}
