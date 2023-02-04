fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=1e69acc5"
).then(response => response.json()).then(data =>{
    console.log(data)
})