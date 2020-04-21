// Scroll reveal defaults
window.sr = ScrollReveal({
  duration: 600,
  easing: "ease-in",
  viewFactor: 0.3
});

// Reveal on scroll
sr.reveal('.background');
sr.reveal(".skills");
sr.reveal(".show", { duration: 900, easing: "ease", viewFactor: 0.1 });

const body = document.querySelector("body");
// Hide scrollbar, waiting on the animations
// setTimeout(() => body.style.overflowY = "initial", 2900);

// Show loader
gsap.to(".loader-container", { opacity: 1, delay: 0.5, duration: 1 });

// Progress bar running from 0 - 100%
gsap.to(".loader-show", { x: "105%", delay: 1.6, duration: 1, ease: "power2.out" });

// Hide overlay
gsap.to(".overlay", { x: "100%", duration: .5, delay: 2.6 });
gsap.to(".overlay", { display: "none", delay: 3.1 });

// Text pop up
gsap.to(".welcome h1", { y: 70 });
gsap.to(".welcome h1", { y: 0, opacity: 1, ease: "back.out(1.7)", duration: .7, delay: 3.1 });

// Text pop up
gsap.to(".short-presentation p", { y: 170 });
gsap.to(".short-presentation p", { y: 0, opacity: 1, ease: "back.out(1.6)", duration: .7, delay: 3.1 });

