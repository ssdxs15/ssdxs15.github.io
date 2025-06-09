document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("booking-form");
    const message = document.getElementById("confirmation-message");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.reset();
      message.style.display = "block";
    });
  });
  