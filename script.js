const moviesContainer = document.getElementById('movies-container');
const departedButton = document.getElementById('departed-button');
const guardiansButton = document.getElementById('guardians-button');
const div = document.createElement('div');
const img = document.createElement('img');

guardiansButton.addEventListener('click', () => {
    fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=1e69acc5"
    ).then(response => response.json()).then(data =>{
        // console.log(data)

        
        div.innerText = data.Title;
        img.src = data.Poster;
    
        moviesContainer.appendChild(div);
        div.appendChild(img);
    })
})

departedButton.addEventListener('click', () => {
    fetch(
        "http://www.omdbapi.com/?i=tt0407887&apikey=1e69acc5"
    ).then(response => response.json()).then(data =>{
        // console.log(data)

        
        div.innerText = data.Title;
        img.src = data.Poster;
    
        moviesContainer.appendChild(div);
        div.appendChild(img);
    })
})

