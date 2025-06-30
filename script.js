// Booking form thank you message
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  setTimeout(function () {
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("thankyou-message").style.display = "block";
  }, 100);
});

// Airplane takeoff scroll-trigger
window.addEventListener("scroll", function() {
  const airplane = document.getElementById("airplane-container");
  if (!airplane) return;
  // Trigger when you scroll past the hero (or 120px down)
  let triggerY = window.innerHeight * 0.45; // More robust
  if (window.scrollY > triggerY) {
    airplane.classList.add("takeoff");
  } else {
    airplane.classList.remove("takeoff");
  }
});

// Fade in sections as you scroll
// Smoother section reveal with Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only reveal once
    }
  });
}, {
  threshold: 0.18
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.hero.section').classList.add('visible');
  setTimeout(() => {
    document.querySelector('.hero-content').classList.add('visible');
  }, 400);
});


// Gallery: Simple lightbox effect
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0; overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(34,48,76,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;
    overlay.addEventListener('click', () => overlay.remove());
    const bigImg = document.createElement('img');
    bigImg.src = img.src;
    bigImg.style.maxWidth = '90vw';
    bigImg.style.maxHeight = '90vh';
    bigImg.style.borderRadius = '22px';
    bigImg.style.boxShadow = '0 6px 36px rgba(0,0,0,0.18)';
    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);
  });
});
window.addEventListener('scroll', function() {
  const header = document.querySelector('.main-header');
  if (window.scrollY > 40) {
    header.classList.add('shrunk');
  } else {
    header.classList.remove('shrunk');
  }
});
const golfBall = document.querySelector('.animated-golf-ball');
document.querySelector('.hero').addEventListener('mousemove', function(e) {
  const rect = this.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
  golfBall.style.transform = `translate(${x}px, ${y}px)`;
  golfBall.classList.add('parallax');
});
document.querySelector('.hero').addEventListener('mouseleave', function() {
  golfBall.style.transform = '';
  golfBall.classList.remove('parallax');
});
