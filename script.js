const moviesContainer = document.getElementById('movies-container');
const departedButton = document.getElementById('departed-button');
const guardiansButton = document.getElementById('guardians-button');

guardiansButton.addEventListener('click', () => {
    fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=1e69acc5"
    ).then(response => response.json()).then(data =>{
        // console.log(data)
        const div = document.createElement('div');
        const img = document.createElement('img');
        
        div.innerText = data.Title;
        img.src = data.Poster;
    
        moviesContainer.appendChild(div);
        moviesContainer.appendChild(img);
    })
})

departedButton.addEventListener('click', () => {
    fetch(
        "http://www.omdbapi.com/?i=tt0407887&apikey=1e69acc5"
    ).then(response => response.json()).then(data =>{
        // console.log(data)
        const div = document.createElement('div');
        const img = document.createElement('img');
        
        div.innerText = data.Title;
        img.src = data.Poster;
    
        moviesContainer.appendChild(div);
        moviesContainer.appendChild(img);
    })
})




