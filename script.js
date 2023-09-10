// querySelector and document are used  to convert anything from HTML to javascript use
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
crsr.style.left = dets.x + "px";
crsr.style.top = dets.y + "px";
blur.style.left = dets.x - 250+ "px";
blur.style.top = dets.y - 250 + "px";

});
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav",{
backgroundColor : "#000",
// height of the nav tag is 140px but here we gave
//  height 120 px,lesser so that we will be able to see the animation. 
height:"120px",
duration:0.5,
scrollTrigger:{
   trigger:"#nav",
   scroller:"body",
// the following displays the marker position i.e start and end
//    markers:true, 
// start decides when to start the affect more the value , later the animation will take place
   start:"top -10%",
//    similarly end decided when to complete the effect.
   end:"top -10%",
//    the scrub will start visibility of black color after certain scrolls
   scrub:1
    
},
 });
gsap.to("#main",{
    backgroundColor : "#000",
    // it is used to make things work based on scroll action
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end: "top -70%",
        // without defining this will make the whole background as black from the starting itself
        scrub:2
    },
});

gsap.from("#about-us img,#about-us-in", {
   y: 90,
   opacity: 0,
   duration: 1,
   scrollTrigger: {
     trigger: "#about-us",
     scroller: "body",
     // markers:true,
     start: "top 70%",
     end: "top 65%",
     scrub: 1,
   },
 });
 gsap.from(".card", {
   scale: 0.8,
   // opacity:0,
   duration: 1,
   stagger: 0.1,
   scrollTrigger: {
     trigger: ".card",
     scroller: "body",
     // markers:false,
     start: "top 70%",
     end: "top 65%",
     scrub: 1,
   },
 });
 gsap.from("#colon1", {
   y: -70,
   x: -70,
   scrollTrigger: {
     trigger: "#colon1",
     scroller: "body",
     // markers:true,
     start: "top 55%",
     end: "top 45%",
     scrub: 4,
   },
 });
 gsap.from("#colon2", {
   y: 70,
   x: 70,
   scrollTrigger: {
     trigger: "#colon1",
     scroller: "body",
     // markers:true,
     start: "top 55%",
     end: "top 45%",
     scrub: 4,
   },
 });
