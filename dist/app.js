window.sr = ScrollReveal({
  duration: 600,
  easing: "ease-in",
  viewFactor: 0.3
});

sr.reveal('.background');
sr.reveal(".skills");
sr.reveal(".projects", { duration: 900, easing: "ease", viewFactor: 0.3 });

// barba.init({
//   views: [
//     {
//       namespace: "home"
//     },
//     {
//       namespace: "ecommerce"
//     }
//   ],
//   transitions: [
//     {
//       leave({ current, next }) {
//         let done = this.async();
//         window.scrollTo(0, 0);
//         const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0, onComplete: done });
//       },
//       enter({ current, next }) {
//         let done = this.async();
//         const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1, onComplete: done });
//       }
//     }
//   ]
// });