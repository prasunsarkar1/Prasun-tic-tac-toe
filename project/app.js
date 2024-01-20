document.querySelectorAll(".reveal").forEach(function (elem) {
    let spanparent = document.createElement("span");
    let spanchild = document.createElement("span");

    spanparent.classList.add("parent");
    spanchild.classList.add("child");

    spanchild.textContent = elem.textContent;
    spanparent.appendChild(spanchild);

    elem.innerHTML = "";
    elem.appendChild(spanparent);
});

var t1 = gsap.timeline();

t1
.to(".parent .child", {
    y: "-100%",
    duration: 2,
    delay: 0.5,
    ease: Expo.easeInOut,
});
t1.to("#loader",{
    height:0,
    durration:0,
    ease: Circ.easeInOut

});
t1.to("#green",{
    height: "100%",
   duration: 0.2,
   top: 0,
   delay: -0.5,
   ease: Expo.easeInOut,

})

t1.to("#green",{
    height: "0%",
   duration: 1,
   delay: -0.3,
   ease: Expo.easeInOut,

})

var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener("mousemove", function(dets) {
  cursor.style.left = dets.x+ "px";
  cursor.style.top = dets.y + "px";

})
document.querySelector("#overlay1").addEventListener("mousemove",function(dets){
    document.querySelector("#elem img").style.scale = 1
    document.querySelector("#elem img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elem img").style.left = (dets.x-400) + "px"
    document.querySelector("#elem img").style.top = (dets.y-180) + "px"
})
document.querySelector("#overlay1").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem img").style.scale = 0
    document.querySelector("#elem img").style.opacity = 0
    cursor.style.opacity = 1
   
})



