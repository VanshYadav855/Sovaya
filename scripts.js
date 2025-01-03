// Smooth Scrolling for Navigation Links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Scroll position, adjust as needed
            behavior: 'smooth'
        });
    });
});

// Carousel Functionality
let carouselIndex = 0;
const carouselImages = document.querySelectorAll('#carousel img');
const totalImages = carouselImages.length;

function showNextImage() {
    carouselImages[carouselIndex].style.display = 'none'; // Hide the current image
    carouselIndex = (carouselIndex + 1) % totalImages; // Move to the next image
    carouselImages[carouselIndex].style.display = 'block'; // Show the next image
}

// Initially display the first image
carouselImages[carouselIndex].style.display = 'block';

// Change the image every 3 seconds (adjust the time as needed)
setInterval(showNextImage, 3000);

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector('textarea').value;

    if (!name || !email || !phone || !message) {
        alert('Please fill in all the fields before submitting.');
        event.preventDefault();
    }
});


