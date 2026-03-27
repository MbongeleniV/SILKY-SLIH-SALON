document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("show");
        hamburger.textContent = navbar.classList.contains("show") ? "✖" : "☰";
    });
});

function display() {

  let message = document.getElementById("dis");

  message.textContent = "Thank you submitting, our team will get back to you.";

  // Hide after 3 seconds
  setTimeout(function() {
    message.textContent = "";
  }, 3000);

}