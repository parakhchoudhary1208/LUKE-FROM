document.querySelector("#main")
.addEventListener("mousemove", function(dets){
    function abc(){
        document.querySelector("#smcircle").style.top= `${dets.clientY}px`
        document.querySelector("#smcircle").style.left= `${dets.clientX}px`
        document.querySelector("#smcircle").style.display= "initial"
    }
    window.requestAnimationFrame(abc)
});

gsap.from("#text1 h1",{
    y: 40,
    duration: 1,
    ease: Expo.easeInOut
})
$('#text1 h1').textillate({ in: { effect: 'fadeInUp' },delay: 100 });

gsap.from("#text2 h1",{
    y: 40,
    duration: 1,
    ease: Expo.easeInOut
})
$('#text2 h1').textillate({ in: { effect: 'fadeInUp' },delay: 100 });
gsap.from("#star h1",{
    y: 40,
    duration: 2,
    ease: Expo.easeInOut
})
$('#star h1').textillate({ in: { effect: 'fadeInUp' },delay: 100 });

gsap.from("#para",{
    y: 100,
    duration: 3,
    opacity: 0,
    ease: "expo.easeInOut"
})

document.querySelectorAll(".enlarge").forEach(function(elem){
    elem.addEventListener("mousemove", function(){
            document.querySelector("#smcircle").style.width = "100px";
            document.querySelector("#smcircle").style.height = "100px";
            document.querySelector("#smcircle").style.backgroundColor = "white";
            document.querySelector("#smcircle").style.mixBlendMode = "difference";
    })
})

document.querySelectorAll(".enlarge").forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
            document.querySelector("#smcircle").style.width = "20px";
            document.querySelector("#smcircle").style.height = "20px";
            document.querySelector("#smcircle").style.backgroundColor = "transparent";
            document.querySelector("#smcircle").style.mixBlendMode = "initial";
    })
})

document.querySelectorAll(".enl1").forEach(function(elem){
    elem.addEventListener("mousemove", function(){
            document.querySelector("#smcircle").style.width = "60px";
            document.querySelector("#smcircle").style.height = "60px";
            document.querySelector("#smcircle").style.backgroundColor = "white";
            document.querySelector("#smcircle").style.mixBlendMode = "difference";
    })
})

document.querySelectorAll(".enl1").forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
            document.querySelector("#smcircle").style.width = "20px";
            document.querySelector("#smcircle").style.height = "20px";
            document.querySelector("#smcircle").style.backgroundColor = "transparent";
            document.querySelector("#smcircle").style.mixBlendMode = "initial";
    })
})

document.querySelector("#mail")
.addEventListener("mouseover", function(dets){
    document.querySelector("#smcircle").style.width = "100px";
    document.querySelector("#smcircle").style.height = "100px";
    document.querySelector("#smcircle").style.backgroundColor = "white";
    document.querySelector("#smcircle").style.mixBlendMode = "difference";
    document.querySelector("#mail").style.transform = `translate(-${dets.clientY * .2}px , -${dets.clientX * .1}px)`;
});

document.querySelector("#mail")
.addEventListener("mouseout", function(dets){
    document.querySelector("#smcircle").style.width = "20px";
    document.querySelector("#smcircle").style.height = "20px";
    document.querySelector("#smcircle").style.backgroundColor = "transparent";
    document.querySelector("#smcircle").style.mixBlendMode = "initial";
    document.querySelector("#mail").style.transform = "translate(0, 0)";
});



function abc(){
    document.querySelectorAll(".abc")
.forEach(function(el){
    el.addEventListener("mousemove", function(abc){
        document.querySelector("#cursor").style.display = "initial"
        document.querySelector("#cursor").style.backgroundColor= "white"
        document.querySelector("#main").style.backgroundColor= abc.target.dataset.color
        document.querySelector("#cursor").style.mixBlendMode= "difference"
        document.querySelector("#smcircle").style.display= "none"
        document.querySelector("#cursor").style.top= `${abc.clientY}px`
        document.querySelector("#cursor").style.left= `${abc.clientX}px`
    });
});


document.querySelectorAll(".abc")
.forEach(function(elem){
    elem.addEventListener("mouseout", function(dets){
        document.querySelector("#smcircle").style.display = "initial"
        document.querySelector("#main").style.backgroundColor= "#f8f8f8"
        document.querySelector("#smcircle").style.border="2px solid black"
        document.querySelector("#cursor").style.backgroundColor= "transparent"
        document.querySelector("#cursor").style.mixBlendMode= "initial"
        document.querySelector("#cursor").style.display= "none"
    })
});
}
window.requestAnimationFrame(abc)

/*document.querySelectorAll(".abc")
.forEach(function(el){
    el.addEventListener("mousemove", function(abc){
        document.querySelector("#cursor").style.display = "initial"
        document.querySelector("#cursor").style.backgroundColor= "white"
        document.querySelector("#cursor").style.mixBlendMode= "difference"
        document.querySelector("#smcircle").style.display= "none"
        document.querySelector("#cursor").style.top= `${abc.clientY}px`
        document.querySelector("#cursor").style.left= `${abc.clientX}px`
    });
});


document.querySelectorAll(".abc")
.forEach(function(elem){
    elem.addEventListener("mouseout", function(dets){
        document.querySelector("#smcircle").style.display = "initial"
        document.querySelector("#smcircle").style.border="2px solid black"
        document.querySelector("#cursor").style.backgroundColor= "transparent"
        document.querySelector("#cursor").style.mixBlendMode= "initial"
        document.querySelector("#cursor").style.display= "none"
    })
});*/

