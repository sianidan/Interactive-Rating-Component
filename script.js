const numbers = document.querySelectorAll('.number');
const submitBtn = document.getElementById('btn');
const ratingCard = document.querySelector('.rating-state');
const thankYouCard = document.querySelector('.thank-you');
const ratingSummary = document.querySelector('.rating-summary');

// remove active class from the number rating
function removeActive() {
  numbers.forEach(number => {
    number.classList.remove('active');
  })
}

// hide rating-state and show thank you state
function submitRating() {
  ratingCard.classList.add('hidden');
  thankYouCard.classList.remove('hidden');
  ratingSummary.innerHTML = `You selected ${document.querySelector('.active').innerHTML} out of 5`
}

numbers.forEach(number => {
  number.addEventListener('click', function() {
    removeActive();
    number.classList.add('active');
  })
})

submitBtn.onclick = submitRating;