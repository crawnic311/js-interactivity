
function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input');
    
    let movie = document.createElement('li');
    

    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    
    movie.appendChild(movieTitle); 

    let list = document.querySelector("ul");
    list.appendChild(movie);
}

document.querySelector('#form').addEventListener('submit', addMovie);