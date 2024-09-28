// Function to start an interactive lesson
function startLesson(subject) {
    switch(subject) {
        case 'math':
            window.location.href = 'lessons/math.html';
            break;
        case 'science':
            window.location.href = 'lessons/science.html';
            break;
        case 'history':
            window.location.href = 'lessons/history.html';
            break;
        case 'language':
            window.location.href = 'lessons/language.html';
            break;
        default:
            alert('Lesson not found.');
    }
}

// Function to start an educational game
function playGame(game) {
    switch(game) {
        case 'mathQuiz':
            window.location.href = 'games/math-quiz.html';
            break;
        case 'scienceTrivia':
            window.location.href = 'games/science-trivia.html';
            break;
        case 'wordSearch':
            window.location.href = 'games/english-quiz.html';
            break;
        case 'geoChallenge':
            window.location.href = 'games/geography-trivia.html';
            break;
        default:
            alert('Game not found.');
    }
}


// Optional: Function to handle form submissions
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    // Handle form data here (e.g., send to a server or display a confirmation message)
    alert('Thank you for your submission!');
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the form
    const contactForm = document.getElementById('contactForm');

    // Add an event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic form validation
        if (!name || !email || !message) {
            alert('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Form data is valid
        // Normally, here you would send the data to a server or an email API.
        // For now, we'll just log the data to the console and show a success message.

        console.log('Form submitted:', { name, email, message });

        // Show success message
        alert('Message sent successfully!');

        // Reset the form
        contactForm.reset();
    });

    // Function to validate email address
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const testimonialWrapper = document.querySelector('.testimonial-wrapper');

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    testimonialWrapper.style.transform = translateX(`${-currentSlide * slideWidth}px`);
}

// Optional: Automatically move slides every few seconds
setInterval(() => moveSlide(1), 5000);