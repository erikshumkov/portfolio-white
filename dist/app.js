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
gsap.to(".short-presentation p", { y: 0, opacity: 1, ease: "back.out(1)", duration: .7, delay: 3.1 });

// Project pages, grab first link button.
const showPage = document.querySelector(".action-buttons a");

// Add hover effect to the link button
showPage.addEventListener("mouseover", function (e) {
  gsap.to(showPage, { scale: 0.5, duration: 0.1 });
  gsap.to(showPage, { scale: 1, duration: 0.1, delay: 0.1 });
});

// Project page, the downarrow under the description text
// add infinite animation to that arrow.
var arrowTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
arrowTl.to(".downarr", { x: -10, delay: 0.5, duration: 0.5 });
arrowTl.to(".downarr", { opacity: 0, duration: 0.3 }, "-=0.2");
arrowTl.to(".downarr", { x: 0 });
arrowTl.to(".downarr", { opacity: 1, duration: 0.3 });

// Project page, when you start scrolling make description text
// disappear
var controller = new ScrollMagic.Controller();

var tween = gsap.to(".scrollmore", { opacity: 0, duration: .7 });

var scene = new ScrollMagic.Scene({
  triggerElement: ".image",
  triggerHook: 0.35
})
  .setTween(tween)
  .addTo(controller);



