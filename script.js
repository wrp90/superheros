const moviesContainer = document.getElementById('movies-container');
const killingJoke = document.getElementById('killing-joke');
const redHood = document.getElementById('red-hood');
const darkOne = document.getElementById('dark-knight-part-one');
const darkTwo = document.getElementById('dark-knight-part-two');
const div = document.createElement('div');
const img = document.createElement('img');
const title = document.createElement('p');
const rated = document.createElement('p');
const director = document.createElement('p');
const released = document.createElement('p');

const showMovie = (id) => {
    fetch(
        `http://www.omdbapi.com/?i=${id}&apikey=1e69acc5`
    ).then(response => response.json()).then(data =>{
        console.log(data)
        title.innerText = "Title:" + " " + data.Title;
        rated.innerText = "Rated:" + " " + data.Rated;
        director.innerText = "Director:" + " " + data.Director;
        released.innerText = "Released:" + " " + data.Released;
        img.src = data.Poster;
        div.append(title, rated, director, released);
        moviesContainer.appendChild(div);
        div.prepend(img);
    })
};

killingJoke.addEventListener('click', () => showMovie('tt4853102'));
redHood.addEventListener('click', () => showMovie('tt1569923'));
darkOne.addEventListener('click', () => showMovie('tt2313197'));
darkTwo.addEventListener('click', () => showMovie('tt2166834'));




