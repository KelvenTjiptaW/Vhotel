var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.getElementById("menu-btn").addEventListener("click", function() {
    var navbar = document.querySelector(".header .navbar");
    navbar.classList.toggle("active");
});

function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    const roomTypeInput = document.getElementById('room-type');

    const errors = [];

    if (nameInput.value === "") {
        errors.push('Name field is required');
    }

    if (!validateEmail(emailInput.value)) {
        errors.push('Invalid email address');
    }

    if (!validateDate(checkInInput.value)) {
        errors.push('Check-in not valid');
    }

    if (!validateDateRange(checkInInput.value, checkOutInput.value)) {
        errors.push('Check-out date cannot be before check-in date');
    }

    if (roomTypeInput.value === '') {
        errors.push('Please select a room type');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert('Form submitted successfully!');
        document.getElementById('reservation-form').reset();
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateDate(date) {
    const today = new Date().toISOString().split('T')[0];
    return date >= today;
}

function validateDateRange(checkIn, checkOut) {
    return checkOut >= checkIn;
}