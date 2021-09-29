
function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input');
    
    let movie = document.createElement('li');
    

    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    
    movie.appendChild(movieTitle); 
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    let list = document.querySelector('ul');
    list.appendChild(movie);
}

function deleteMovie(event) {
    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');
}



document.querySelector('#form').addEventListener('submit', addMovie);

