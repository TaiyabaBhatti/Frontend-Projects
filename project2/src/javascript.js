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













