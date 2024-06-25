document.addEventListener("DOMContentLoaded", function() {

    

const dotsTrack=document.querySelector("#slider-buttons");
const dots=Array.from(dotsTrack.children);
let activeDot=dots[0];
const carousel=document.querySelector(".slider-carousel");
const slideCards=Array.from(carousel.querySelectorAll(".card"));

// let slideWidth=card.getBoundingClientRect().width;




const movetoSlide =(track,currentSlide,targetSlide,leftValue)=>{
track.style.transform='translateX(-' + leftValue + ')';
console.log(targetSlide.style.left);
currentSlide.classList.remove("current-card");
targetSlide.classList.add("current-card");


}





dotsTrack.addEventListener("click",e => {

const targetDot=e.target.closest("button");
if(targetDot){

}
const currentSlide=carousel.querySelector(".current-card");
const currentdot=dotsTrack.querySelector(".active");
const dotIndex = dots.findIndex(dot => dot===targetDot);
const targetSlide=slideCards[dotIndex];
const computedStyle = window.getComputedStyle(targetSlide);
const leftValue = computedStyle.getPropertyValue('left');
movetoSlide(carousel,currentSlide,targetSlide,leftValue);
});





for(let circle of dots){
    circle.addEventListener("click",function (){
     activeDot.classList.remove("active");
     activeDot=circle;
     activeDot.classList.add("active");
    });
}



document.querySelector('input[type="submit"]').addEventListener("click", function(event){
  event.preventDefault();
 



});
















  });










