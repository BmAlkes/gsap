 document.addEventListener("DOMContentLoaded", (event) => {
  
    // gsap.from('.quadrado',{
    //     x:"10vw",
    //     duration:3,
    //     backgroundColor:"rgba(74, 125, 92, 0.8)",
    //     borderRadius:"100px"
    // })
    gsap.fromTo('.quadrado',{
        x:-200,
        backgroundColor:"rgba(125, 91, 74, 0.8)",
        borderRadius:"100px"
    },{
        x:500,
        y:400,
        duration:100,
       
        backgroundColor:"rgba(127, 73, 158, 0.8)",
        borderRadius:"200px 10px"
    })
 });

  