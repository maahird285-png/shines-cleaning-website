// SHINES WEBSITE JAVASCRIPT

// CONTACT FORM
const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you for contacting SHINES! We have received your message.");

    contactForm.reset();
  });
}

// BOOKING FORM
const bookingForm = document.querySelector(".booking-form form");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "Thank you for choosing SHINES! Your booking request has been received.",
    );

    bookingForm.reset();
  });
}
