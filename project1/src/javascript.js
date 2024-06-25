document.addEventListener("DOMContentLoaded", function() {

    

let imageCard=document.querySelector(".reviewer-img");
const reviewersnodeList=document.querySelectorAll(".float-image");
const dotsTrack=document.querySelector("#slider-buttons");
const dots=Array.from(dotsTrack.children);
let activeDot=dots[0];
const carousel=document.querySelector(".slider-carousel");
const slideCards=Array.from(carousel.querySelectorAll(".card"));
let card=document.querySelector(".card");
let slideWidth=card.getBoundingClientRect().width;

console.log(slideWidth);

// slideCards[0].style.left=slideWidth * 0 + 'px';
// slideCards[1].style.left=slideWidth  + 'px';
// slideCards[2].style.left=slideWidth * 2 + 'px';
// slideCards[3].style.left=slideWidth * 3 + 'px';
// slideCards[4].style.left=slideWidth * 4 + 'px';


// slideCards.forEach((slide,index) => {

//     slide.style.left=slideWidth * (index+1) + 'px';


// });


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


console.log(currentSlide);
console.log(currentdot);
console.log(dotIndex);
console.log(targetSlide);

const computedStyle = window.getComputedStyle(targetSlide);
const leftValue = computedStyle.getPropertyValue('left');
console.log(`Left position value: ${leftValue}`);
console.log(carousel);


movetoSlide(carousel,currentSlide,targetSlide,leftValue);



})





for(let circle of dots){
    circle.addEventListener("click",function (){
     activeDot.classList.remove("active");
     activeDot=circle;
     activeDot.classList.add("active");



    });
}




















  });










