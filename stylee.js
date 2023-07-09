gsap.to("#main>img",{
    scale:1,
},3000)
gsap.to("#main>img",{
    scrollTrigger:{
        trigger:"#main>img",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        scrub:"2",
    },
    scale:"0"
})

gsap.to("#main>#cen>#boxes>.box",{
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        // markers:true,
        start: "top 90%",
        end: "bottom 40%",
        scrub:2,
        // pin:true,
        // pinSpacing:true
    },
    stagger:0.5,
    // y:20,
    opacity:1,
    duration:1,
})
gsap.to("#main2>#right>p",{
    scrollTrigger:{
        trigger:"#right>p",
        scroller:"body",
        // markers:true,
        start: "top 90%",
        end: "bottom 50%",
        scrub:2
    },
    x:40,
    opacity:1
})

// gsap.from("#nav",{
//     opacity:0,
//     y:10,
//     stagger:0.5,
//     duration:1,
// })
gsap.from("#main2>#right>#shape>.shape>#pum",{
    scrollTrigger:{
        trigger:"#pum",
        scroll:"body",
        // markers:true,
        scrub:2,
        start:"top 90%",
        end:"bottom 70%",
        opacity:0

    },
   scale:.5,
   x: 100 ,
   rotate:360,
   duration:2,
   opacity:0

})

// gsap.from("#main>#head",{
//     opacity:0,
//     duration:4,
//     onStart:function(){
//         $('#head').textillate({in:{effect:'Bounce'}});
//     }
// })
// gsap.from("#main>p",{
//     opacity:0,
//     duration:5,
//     onStart:function(){
//         $('p').textillate({in:{effect:'flipInX'}});
//     }
// })
gsap.from("#main>#cen>#head2",{
    scrollTrigger:{
        trigger:"#head2",
        scroll:"body",
        // markers:true,
        scrub:2,
        start:"top 90%",
        end:"bottom 70%",
        opacity:0
    },
    opacity:0,
    duration:5,
    onStart:function(){
        $('#head2').textillate({in:{effect:'fadeInUp'}});
    }
})
gsap.to("#main2>#left>#mee",{
    scrollTrigger:{
        trigger:"#mee",
        scroller:"body",
        // markers:true,
        start: "top 70%",
        end: "bottom 20%",
        scrub:2,
    },
})


gsap.to("#main4>#rhs>p",{
    scrollTrigger:{
        trigger:"#rhs>p",
        scroller:"body",
        // markers:true,
        start: "top 90%",
        end: "bottom 50%",
        scrub:2
    },
    x:-30,
    opacity:1
})



gsap.from("#main3>#circle>.cir",{
    scrollTrigger:{
        trigger:".cir",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 80%",
        end:"bottom 90%"
    },
    y:100,
    opacity:0,
    duration:2.5,
    stagger:2
})
gsap.from("#nav , #small , #head , #tutu , #tutuu",{
    // scale:.5,
    opacity:0,
    duration:1,
    y:-100
})
window.addEventListener("scroll",function(){
    var value = window.scrollY;
    document.querySelector("#small").style.left= value*-1.5+"px";
    document.querySelector("#head").style.left= value*-1.5+"px";
    document.querySelector("#tutu").style.left= value*-1.5+"px";
    document.querySelector("#main>button").style.left= value*-1.5+"px";

})