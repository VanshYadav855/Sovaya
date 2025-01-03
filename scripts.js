// Function to scroll the carousel (logos) left or right
function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 200; // Adjust this value to change how much it moves with each click

    if (direction === 'right') {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (direction === 'left') {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}

// Form validation and submission handler
document.querySelector('.form-container form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the default form submission

    // Get the form inputs
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const message = document.querySelector('textarea').value;

    // Simple form validation (can be extended as needed)
    if (name && email && phone && message) {
        alert('Form submitted successfully!');
        // You can add code here to submit the form data to a server or email
    } else {
        alert('Please fill out all fields before submitting.');
    }
});


