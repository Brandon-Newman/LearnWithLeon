//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  //You need to follow the API's rules, so we need to format the date in a way that NASA is expecting. In this case we were already pulling it as YYYY-MM-DD like they wanted

  const url = `https://api.nasa.gov/planetary/apod?api_key=e77iifh98OWgnS4cC5oWhAVE1Yfy8MydLLWaLOiI&date=${choice}`
  
  
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data.explanation
        if (data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl;
          //const iframe = document.querySelector('iframe');
          //iframe.remove()
          document.querySelector('iframe').src = "";
        }else if (data.media_type === 'video'){
          document.querySelector('iframe').src = data.url;
          document.querySelector('img').src ="" 
        }
      }
    )
   
    .catch(err => {
        console.log(`error ${err}`)
    })}