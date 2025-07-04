// This file contains JavaScript code that handles the functionality of the healthcare website, including the specialist and feedback sliders. It manages user interactions and updates the UI dynamically.

let specialistSliderIndex = 0;
const totalSpecialists = 5;
const cardsPerView = 4;
const maxIndex = totalSpecialists - cardsPerView; // 5-4=1, so 2 dots

function updateSpecialistSlider() {
    const track = document.getElementById('specialist-slider-track');
    const card = track.querySelector('.specialist-scroll-card');
    const cardWidth = card.offsetWidth + 24; // 24px gap
    track.style.transform = `translateX(${-specialistSliderIndex * cardWidth}px)`;

    // Update dots
    document.querySelectorAll('.specialist-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === specialistSliderIndex);
    });
}

function setSpecialistSlider(idx) {
    specialistSliderIndex = idx;
    updateSpecialistSlider();
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        if (specialistSliderIndex < maxIndex) {
            specialistSliderIndex++;
            updateSpecialistSlider();
        }
    }
    if (e.key === 'ArrowLeft') {
        if (specialistSliderIndex > 0) {
            specialistSliderIndex--;
            updateSpecialistSlider();
        }
    }
});

updateSpecialistSlider();

// Feedback slider logic
const feedbacks = [
    {
        name: "Priya Sharma",
        country: "India",
        rating: 5,
        feedback: "Exceptional care and expertise! The specialist and her team provided thorough guidance, compassionate support, and effective treatment. Every visit felt reassuring, and their dedication to patient well-being was evident. Highly recommend for anyone seeking top-quality healthcare!"
    },
    {
        name: "Swapnil Pathak",
        country: "India",
        rating: 4,
        feedback: "Outstanding care! The specialist and her team were attentive, knowledgeable, and truly committed to patient well-being. Their clear guidance and compassionate approach made every visit stress-free. Highly recommended for top-notch healthcare!"
    },
    {
        name: "Anjali Mishra",
        country: "India",
        rating: 4.5,
        feedback: "A caring and professional team! From diagnosis to treatment, the specialist and her team ensured personalized care and comfort. Their expertise and dedication instill confidence in patients seeking the best medical support."
    }
];

let feedbackSliderIndex = 0;

function renderFeedbackSlider() {
    const fb = feedbacks[feedbackSliderIndex];
    document.getElementById('patient-name').childNodes[0].nodeValue = fb.name + " ";
    document.getElementById('patient-country').textContent = `(${fb.country})`;
    // Render stars
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(fb.rating)) {
            starsHtml += '<i class="fas fa-star star"></i>';
        } else if (i - fb.rating === 0.5) {
            starsHtml += '<i class="fas fa-star-half-alt star"></i>';
        } else {
            starsHtml += '<i class="far fa-star star"></i>';
        }
    }
    document.getElementById('patient-stars').innerHTML = starsHtml;
    document.getElementById('patient-feedback').innerHTML = `<p>${fb.feedback}</p>`;

    // Update dots
    document.querySelectorAll('.feedback-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === feedbackSliderIndex);
    });
}

function setFeedbackSlider(idx) {
    feedbackSliderIndex = idx;
    renderFeedbackSlider();
}

// Initialize on page load
renderFeedbackSlider();