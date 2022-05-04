//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const isbn = document.querySelector('input').value
  console.log(isbn)
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.full_title)
        document.querySelector('h2').innerText = data.full_title
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
//9780760350003
