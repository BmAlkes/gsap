document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);


  let valorMaskSize = "5000vw"

  gsap.to(".mask", {
    maskSize: valorMaskSize,
    maskPosition:"54% center",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      start: "top top",
      end: "bottom 20%",
      scrub: 3,
    },
  });
   gsap.from(".content", {
  opacity:0,
    scrollTrigger: {
      trigger: ".content",
      pin: true,
      start: "top top",
      end: "bottom 20%",
      scrub: 3,
    },
  });
});
