document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your request has been sent.");
    this.reset();
  });
  