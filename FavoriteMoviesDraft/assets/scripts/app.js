const addMovieButton = document.querySelector('header button');
const addModal = document.querySelector('#add-modal');
const deleteModal = document.querySelector('#delete-modal');

//add-modal
const addButton = document.querySelector('#add-modal .btn--success');
const cancelButton = document.querySelector(
  '#add-modal .btn--passive'
);

//delete-modal
const yesDeletButton = document.querySelector(
  '#delete-modal .btn--danger'
);
const noCancelButton = document.querySelector(
  '#delete-modal .btn--passive'
);

const movieList = document.getElementById('movie-list');

const cancelAddMovie = () => {
  deleteModal.classList.toggle('visible');
};

//button eventListner(s)

addButton.addEventListener('click', () => {
  temp = {
    'Movie Title': document.getElementById('title').value,
    Image: document.getElementById('image-url').value,
    Rating: document.getElementById('rating').value,
  };

  for (const key in temp) {
    let textContent = [];
    text = `${key} => ${temp[key]}`;
    textContent.push(text);

    let newLi = document.createElement('li');
    newLi.textContent = temp;
    movieList.appendChild(newLi);
  }

  console.log(movieList.childNodes);

  addModal.classList.toggle('visible');
});

addMovieButton.addEventListener('click', () => {
  addModal.classList.toggle('visible');
});

cancelButton.addEventListener('click', cancelAddMovie);

noCancelButton.addEventListener('click', cancelAddMovie);

yesDeletButton.addEventListener('click', () => {
  addModal.classList.toggle('visible');
  deleteModal.classList.toggle('visible');
});
