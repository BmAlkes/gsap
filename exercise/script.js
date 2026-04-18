const timeline = gsap.timeline({
  defaults: {
    duration: 0.5,
  },
});

timeline
  .from(".titulo1", {
    y: 30,
    opacity: 0,
  })
  .from(
    ".titulo2",
    {
      y: 30,
      opacity: 0,
    },
    "-=.2",
  )
  .from("p", {
    opacity: 0,
    duration: 1,
  })
  .from(
    ".img2",
    {
      opacity: 0,
      height: 0,
    },
    "-=.5",
  )
  .from("button", {
    opacity: 0,
  })
  .from(
    ".cards",
    {
      width: 0,
      padding:0,
    },
    "-=.3",
  )
  .from(".card", {
    opacity: 0,
    y: 12,
    stagger: 0.5,
  }).from("img:nth-child(2)",{
    opacity:0,
  });
