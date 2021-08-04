let form = document.querySelector('form');
const message = document.querySelector('#message');
function addMovie(event){
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', removeMovie);
    movie.appendChild(deleteBtn);
    let ul = document.querySelector('ul');
    ul.appendChild(movie);
    inputField.value = '';
    message.textContent = movieTitle.textContent + " added to the list";
    revealMessage();
}

function removeMovie(){
    event.target.parentNode.remove();
    let x = event.target.parentNode.textContent;
    x = x.substring(0, x.length-1);
    message.textContent = `${x} DELETED!`;
    revealMessage();
}
function crossOffMovie(e){
    e.target.classList.toggle('checked');
    if(e.target.classList.contains('checked')){
        message.textContent = `${e.target.textContent} WATCHED!`
    }
    else{
        message.textContent = `${e.target.textContent} ADDED BACK TO THE LIST.`
    }
    revealMessage();

}

function revealMessage(){
    message.classList.remove('hide');
    setTimeout(()=>message.classList.add('hide'), 1000);
}
form.addEventListener('submit', addMovie);







