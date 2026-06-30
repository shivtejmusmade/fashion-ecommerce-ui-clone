// Grab elements
const offerBox = document.getElementById('offerBox');
const offerTab = document.getElementById('offerTab');
const closeArrow = document.getElementById('closeArrow');

// Toggle box when clicking vertical tab
offerTab.addEventListener('click', () => {
    offerBox.classList.toggle('active');
});

// Toggle box when clicking arrow
closeArrow.addEventListener('click', () => {
    offerBox.classList.toggle('active');
});