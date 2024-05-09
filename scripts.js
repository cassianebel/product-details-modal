/**
 * Product image gallery
 * clicking on a thumbnail image 
 * will display the full image in the main image area
 */
const thumbnailButtons = document.querySelectorAll('.thumb');
const mainImage = document.querySelector('.main-img');

thumbnailButtons.forEach(button => {
  button.addEventListener('click', () => {
    thumbnailButtons.forEach(button => {
      button.classList.remove('active');
    });
    const src = button.firstElementChild.getAttribute('src');
    mainImage.setAttribute('src', src);
    button.classList.add('active');
  });
});


/**
 * Product information tabs
 * clicking on a tab will display the content of that tab
 */
const tabButtons = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(button => {
      button.classList.remove('active');
    });
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    button.classList.add('active');
    const tabContent = document.querySelector(`#${button.dataset.target}`);
    tabContent.classList.add('active');
  });
});


/**
 * Reviews event listener
 * clicking on the stars under the product title
 * will display the reviews tab content
 */
const reviewsButton = document.querySelector('.reviews');
reviewsButton.addEventListener('click', () => {
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });
  tabContents.forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById('reviews-tab').classList.add('active');
  const tabContent = document.querySelector(`#reviews`);
  tabContent.classList.add('active');
});


/**
 * Close button event listener
 * Closes the modal when the close button is clicked
 */
const closeButton = document.getElementById('close-modal');
closeButton.addEventListener('click', () => {
  document.querySelector('.modal-overlay').classList.remove('active');
});


/**
 * Modal overlay event listener
 * Closes the modal when the overlay is clicked
 */
const overlay = document.querySelector('.modal-overlay');
overlay.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.modal');
  if (isOutside) {
    overlay.classList.remove('active');
  }
});


/**
 * Write a review button event listener
 * Opens the review form when the button is clicked
 */
const writeReviewButton = document.getElementById('write-review');
writeReviewButton.addEventListener('click', () => {
  document.getElementById('review-form').classList.add('active');
});


/**
 * Review form close button event listener
 * Closes the review form when the close button is clicked
 */
const reviewCloseButton = document.getElementById('close-review');
reviewCloseButton.addEventListener('click', () => {
  document.getElementById('review-form').classList.remove('active');
});


/**
 * Review form submit event listener
 * Displays the review in the reviews tab when the form is submitted
 * saves the review in local storage
 * clears the form fields
 * closes the review form
 */
const reviewForm = document.getElementById('review-form');
reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const review = document.getElementById('review').value;
  const reviewData = { name, review};

  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push(reviewData);
  localStorage.setItem('reviews', JSON.stringify(reviews));

  displayReviews();
  
  document.getElementById('name').value = '';
  document.getElementById('review').value = '';
  document.getElementById('review-form').classList.remove('active');
});


/**
 * Displays the newly submited and/or local storage reviews
 */
function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const reviewsUl = document.getElementById('reviews-ul');
  reviews.forEach(review => {
    const reviewElement = document.createElement('li');
    reviewElement.innerHTML = `"${review.review}" - ${review.name}`;
    reviewsUl.insertAdjacentElement('afterbegin', reviewElement);
  });
}


/**
 * display the local storage reviews when the page loads
 */
document.addEventListener('DOMContentLoaded', () => {
  displayReviews();
});


/**
 * Ask a question button event listener
 * Opens the question form when the button is clicked
 */
const askQuestionButton = document.getElementById('ask-question');
askQuestionButton.addEventListener('click', () => {
  document.getElementById('question-form').classList.add('active');
});


/**
 * Question form close button event listener
 * Closes the question form when the close button is clicked
 */
const questionCloseButton = document.getElementById('close-question');
questionCloseButton.addEventListener('click', () => {
  document.getElementById('question-form').classList.remove('active');
});


/**
 * Question form submit event listener
 * Displays the question in the questions tab when the form is submitted
 * saves the question in local storage
 * clears the form fields
 * closes the question form
 */
const questionForm = document.getElementById('question-form');
questionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const question = document.getElementById('question').value;
  const questionData = { name, question};

  const questions = JSON.parse(localStorage.getItem('questions')) || [];
  questions.push(questionData);
  localStorage.setItem('questions', JSON.stringify(questions));

  displayQuestions();
  
  document.getElementById('name').value = '';
  document.getElementById('question').value = '';
  document.getElementById('question-form').classList.remove('active');
});


/**
 * Displays the newly submited and/or local storage questions
 */
function displayQuestions() {
  const questions = JSON.parse(localStorage.getItem('questions')) || [];
  const questionsUl = document.getElementById('questions-ul');
  questions.forEach(question => {
    const questionElement = document.createElement('li');
    questionElement.innerHTML = `<strong>${question.question}</strong>`;
    questionsUl.insertAdjacentElement('afterbegin', questionElement);
  });
}


/**
 * display the local storage reviews when the page loads
 */
document.addEventListener('DOMContentLoaded', () => {
  displayQuestions();
});