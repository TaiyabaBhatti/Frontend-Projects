const carImages = document.querySelectorAll(".car-image");
let isDoubleClick=true;
let childLike;


function likeActive(car){
    if(isDoubleClick){
        childLike.classList.add("liked");
        childLike.classList.remove("fa-regular");
        childLike.classList.add("fa-solid");
        isDoubleClick=false;
        }
        else{
            childLike.classList.remove("liked");
            childLike.classList.add("fa-regular");
            childLike.classList.remove("fa-solid"); 
            isDoubleClick=true;
        }
}

carImages.forEach((car) => {
car.addEventListener("dblclick",()=>{
    childLike = car.querySelector(".car-like");
likeActive(childLike);
});
});



let screenWidth=window.innerWidth;

const carCategory =document.querySelector(".car-category");
const categoryBlock =document.querySelector(".category-block");
const dropDown =  carCategory.querySelector(".fa-caret-down")

const dropUp =  carCategory.querySelector(".fa-caret-up")

let statusDefault=true;

function checkingWidth(estimatedWidth){
    if(estimatedWidth <= 572){
        categoryBlock.style.display="none";
        dropDown.style.display="block";
        }
        
        else if(estimatedWidth > 572){
            categoryBlock.style.display="flex";
            dropDown.style.display="none";
            dropUp.style.display="none";
           
        }
}

window.addEventListener("resize",()=>{
    screenWidth=window.innerWidth;
checkingWidth(screenWidth);
});
checkingWidth(screenWidth);

function settingArrows(){

    if(statusDefault){
        dropDown.style.display="none";
        dropUp.style.display="block";
        statusDefault=false;
    }

    else{
        dropDown.style.display="block";
        dropUp.style.display="none";
        statusDefault=true;
    }

}

dropDown.addEventListener("click",()=>{
    categoryBlock.style.display="flex";
  settingArrows();
  
});

dropUp.addEventListener("click",()=>{
    categoryBlock.style.display="none";
    settingArrows();
    
});










