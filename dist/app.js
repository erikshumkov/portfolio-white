window.sr = ScrollReveal({
  duration: 600,
  easing: "ease-in",
  viewFactor: 0.3
});

sr.reveal('.background');
sr.reveal(".skills");
sr.reveal(".show", { duration: 900, easing: "ease", viewFactor: 0.1 });

// gsap.to(".overlay", { x: "100%", duration: .5, delay: 1.3 });
// gsap.to(".overlay", { display: "none", delay: 2.8 });

// gsap.to(".loader-show", { x: "100%", delay: .5, duration: .8 })

// const body = document.querySelector("body");
// setTimeout(() => body.style.overflowY = "initial", 2000);