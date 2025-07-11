// Booking form thank you message (only if the form exists)
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    setTimeout(function () {
      bookingForm.style.display = "none";
      const thankyou = document.getElementById("thankyou-message");
      if (thankyou) thankyou.style.display = "block";
    }, 100);
  });
}

// Airplane takeoff scroll-trigger (only if airplane exists)
window.addEventListener("scroll", function() {
  const airplane = document.getElementById("airplane-container");
  if (airplane) {
    // Trigger when you scroll past the hero (or 120px down)
    let triggerY = window.innerHeight * 0.45; // More robust
    if (window.scrollY > triggerY) {
      airplane.classList.add("takeoff");
    } else {
      airplane.classList.remove("takeoff");
    }
  }
});

// Fade in sections as you scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only reveal once
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// On DOM load, fade in hero section/content if present
window.addEventListener('DOMContentLoaded', function() {
  const heroSection = document.querySelector('.hero.section');
  if (heroSection) heroSection.classList.add('visible');
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) setTimeout(() => heroContent.classList.add('visible'), 400);
});

// Gallery: Simple lightbox effect (only if gallery exists)
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0; overlay.style.left = 0;
    overlay.style.width = '100vw'; overlay.style.height = '100vh';
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

// Shrink header on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.main-header');
  if (header) {
    if (window.scrollY > 40) {
      header.classList.add('shrunk');
    } else {
      header.classList.remove('shrunk');
    }
  }
});

// Animated golf ball (only if .animated-golf-ball and .hero exist)
const golfBall = document.querySelector('.animated-golf-ball');
const hero = document.querySelector('.hero');
if (golfBall && hero) {
  hero.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    golfBall.style.transform = `translate(${x}px, ${y}px)`;
    golfBall.classList.add('parallax');
  });
  hero.addEventListener('mouseleave', function() {
    golfBall.style.transform = '';
    golfBall.classList.remove('parallax');
  });
}
// Hamburger menu open/close
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  overlay.addEventListener('click', () => {
    navLinks.classList.remove('open');
    overlay.classList.remove('open');
  });

  // Optional: close nav on link click (mobile)
  navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      overlay.classList.remove('open');
    })
  );
});
// Hamburger menu logic
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navOverlay = document.querySelector(".nav-overlay");

  if(navToggle && navLinks && navOverlay) {
    navToggle.addEventListener("click", function() {
      navLinks.classList.toggle("open");
      navOverlay.classList.toggle("open");
    });
    navOverlay.addEventListener("click", function() {
      navLinks.classList.remove("open");
      navOverlay.classList.remove("open");
    });
  }
});
// Hamburger navigation
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navOverlay = document.querySelector(".nav-overlay");

  function closeMenu() {
    navLinks.classList.remove("open");
    navOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    navOverlay.classList.toggle("open");
    if (navLinks.classList.contains("open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  navOverlay.addEventListener("click", closeMenu);

  // Close nav if link is clicked (mobile)
  navLinks.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", closeMenu)
  );
});
