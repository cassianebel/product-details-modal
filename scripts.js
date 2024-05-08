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
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  document.querySelector('.modal-overlay').classList.remove('active');
});


/**
 * Modal overlay event listener
 * Closes the modal when the overlay is clicked
 */
const overlay = document.querySelector('.modal-overlay');
overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
});