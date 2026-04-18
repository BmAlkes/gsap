gsap.registerPlugin(ScrollTrigger);

gsap.from(".quadrado", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: 40,
  rotate:360,
  filter: "blur(20px)",
  scrollTrigger: {
    trigger: ".container",
    start: "30% top",
    end: "90% 80%",
    markers: true,
    scrub:1
  },
});
