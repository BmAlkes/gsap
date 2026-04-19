gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline()

timeline.to(".quadrado", {
x:200,
rotate:50,
borderRadius:"20px",
  scrollTrigger: {
    trigger: ".quadrado2",
    start: "-50% 50%",
    end: "+=400 50%",
    markers: true,
    scrub: 1,
    pin:true
  },
});
