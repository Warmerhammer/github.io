const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const startAddMovieButton = document.querySelector('header button');
const addMovieCancelButton = addMovieModal.querySelector(
  '.btn--passive'
);
const confirmAddMovieButton = addMovieCancelButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');

const movies = [];

//functions()
const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageURLValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageURLValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please etner valid values (rating between 1 and 5.)');
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageURLValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
addMovieCancelButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
