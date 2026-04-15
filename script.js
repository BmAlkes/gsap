// timeline - gsap 
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonReverse = document.querySelector('.reverse')
const quadrados =  document.querySelectorAll('.quadrado')
const timeline = gsap.timeline({})

document.addEventListener("DOMContentLoaded", (event) => {

  // gsap.to(".quadrado", {
  //   x: 200,
  //   y: -200,
  //   backgroundColor: "rgba(155, 60, 142, 0.8)",
  //   borderRadius: "50px",
  //   duration: 2,
  // });
  // gsap.to(".quadrado",{
  //   y:500,
  //   x:400,
  //   backgroundColor:"green",
  //   duration:2,
  //   delay:2
  // })
  // gsap.to(".quadrado",{
  //   y:500,
  //   x:400,
  //   rotate:100,
  //   backgroundColor:"green",
  //   duration:2,
  //   delay:4
  // })

  timeline.to(quadrados[0],{
      x: 200,
    y: -200,
    backgroundColor: "rgba(155, 60, 142, 0.8)",
    borderRadius: "50px",
    duration: 2,
    stagger:.5
  },">").to(".quadrado",{
    y:500,
    x:400,
    rotate:100,
    backgroundColor:"green",
    duration:2,
    stagger:.4
  })
});

buttonPause.onclick=()=>{
  timeline.pause();
}
buttonPlay.onclick =()=>{
  timeline.play()
}
buttonReverse.onclick=()=>{
  timeline.reverse()
}

// += comece um tempo depois
// -=
// < Junto com a animacao anterior
// >