//Example fetch using pokemon api
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const isbn = document.querySelector('input').value
  console.log(isbn)
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.full_title)
        if (!localStorage.getItem('books')){
          localStorage.setItem('books', data.full_title)
        }else {
          let books = localStorage.getItem('books') + " ; " + data.full_title
          localStorage.setItem('books', books)
        }
        document.querySelector('h2').innerText = localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
//9780760350003 and 9781595550781
