//Make an api request using async await
fetch("https://www.revzilla.com/sitemap.xml")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })