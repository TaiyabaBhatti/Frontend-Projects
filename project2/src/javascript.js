
document.addEventListener("DOMContentLoaded",()=>{
    let screenWidth=window.innerWidth;
    let isDoubleClick=true;
const carCategory =document.querySelector(".car-category");
const categoryBlock =document.querySelector(".category-block");
const dropDown =  carCategory.querySelector(".fa-caret-down");
const dropUp =  carCategory.querySelector(".fa-caret-up");
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


//  Menu Toggling
const menuBlock = document.querySelector(".menu-block");
const menu = menuBlock.querySelector(".fa-bars");
const xMark = menuBlock.querySelector(".fa-xmark");
const navigation = document.querySelector(".right-head");

function checkingHeaderNav(){

    let estimatedWidth = window.innerWidth;

if(estimatedWidth<=695){
    navigation.classList.add("rotate-nav-default");
}

else if(estimatedWidth > 695){
    navigation.classList.remove("rotate-nav-default");
    navigation.classList.add("rotate-nav");
    
}
}

menu.addEventListener("click", () => {
    menuBlock.classList.add('rotate-menu');
    menuBlock.classList.remove('rotate-menu-default');
    navigation.classList.add('rotate-nav');
    navigation.classList.remove('rotate-nav-default');
});

xMark.addEventListener("click", () => {
    menuBlock.classList.remove('rotate-menu');
    menuBlock.classList.add('rotate-menu-default');
    navigation.classList.remove('rotate-nav');
    navigation.classList.add('rotate-nav-default');
});

window.addEventListener("resize",checkingHeaderNav);
checkingHeaderNav();

//  Menu Toggling ends
// our brand crausel filter effect 
const companyNames = document.querySelectorAll(".company-names .car-make");
const carGallery=document.querySelector("#our-brand .gallery");
let carImage, itemDetails,
 carListing,poster,likedIcon;
 let carListingObj = [
    {
    titleText1:"2020",
    titleText2:"audi",
    titleText3:"a4",
    paraText1:"$422",
    paraText2:"/month",
    featureOne:"20k",
    featureTwo:"auto",
    featureThree:"petrol",
    poster:"./Images/item-1.png"
    },
    {
        titleText1:"2020",
        titleText2:"audi",
        titleText3:"a4",
        paraText1:"$422",
        paraText2:"/month",
        featureOne:"20k",
        featureTwo:"auto",
        featureThree:"petrol",
        poster:"./Images/item-2.png"
        },
        {
            titleText1:"2020",
            titleText2:"audi",
            titleText3:"a4",
            paraText1:"$422",
            paraText2:"/month",
            featureOne:"20k",
            featureTwo:"auto",
            featureThree:"petrol",
            poster:"./Images/item-3.png"
            },
            {
                titleText1:"2020",
                titleText2:"tesla",
                titleText3:"a4",
                paraText1:"$422",
                paraText2:"/month",
                featureOne:"20k",
                featureTwo:"auto",
                featureThree:"petrol",
                poster:"./Images/item-1.png"
                },
                {
                    titleText1:"2020",
                    titleText2:"honda",
                    titleText3:"a4",
                    paraText1:"$422",
                    paraText2:"/month",
                    featureOne:"20k",
                    featureTwo:"auto",
                    featureThree:"petrol",
                    poster:"./Images/item-2.png"
                    },
                    {
                        titleText1:"2020",
                        titleText2:"nessan",
                        titleText3:"a4",
                        paraText1:"$422",
                        paraText2:"/month",
                        featureOne:"20k",
                        featureTwo:"auto",
                        featureThree:"petrol",
                        poster:"./Images/item-3.png"
                        },
                        {
                            titleText1:"2020",
                            titleText2:"toyota",
                            titleText3:"a4",
                            paraText1:"$422",
                            paraText2:"/month",
                            featureOne:"20k",
                            featureTwo:"auto",
                            featureThree:"petrol",
                            poster:"./Images/item-1.png"
                            },
                            {
                                titleText1:"2020",
                                titleText2:"toyota",
                                titleText3:"a4",
                                paraText1:"$422",
                                paraText2:"/month",
                                featureOne:"20k",
                                featureTwo:"auto",
                                featureThree:"petrol",
                                poster:"./Images/item-2.png"
                                },
                                {
                                    titleText1:"2020",
                                    titleText2:"nessan",
                                    titleText3:"a4",
                                    paraText1:"$422",
                                    paraText2:"/month",
                                    featureOne:"20k",
                                    featureTwo:"auto",
                                    featureThree:"petrol",
                                    poster:"./Images/item-3.png"
                                    }
    ];
function createElements(obj){
    carListing = document.createElement("div");
    carListing.classList.add("car-listing","flex");
    carImage = document.createElement("div");
    carImage.classList.add("car-image");
    itemDetails = document.createElement("div");
    itemDetails.classList.add("item-details","flex");
     itemDetails.innerHTML=`
     <h1 class="sub-heading3 car-title">${obj.titleText1} <span class="filter-text">${obj.titleText2}</span> ${obj.titleText3}</h1>
     <p class="car-price"><span class="purchase-rate">${obj.paraText1}</span>${obj.paraText2}</p>
       <div class="car-features flex">
     <div class="car-feature flex">
        <i class="fa-solid fa-car"></i>
        <p class="subtext-2">${obj.featureOne}</p>
    </div>
    <div class="car-feature flex">
        <i class="fa-solid fa-arrows-rotate"></i>
        <p class="subtext-2">${obj.featureTwo}</p>
    </div>
    <div class="car-feature flex">
        <i class="fa-solid fa-gas-pump"></i>
        <p class="subtext-2">${obj.featureThree}</p>
    </div>
    </div>
    <button class="btn rent-button">rent now</button>
     `;
    
      poster = document.createElement("img");
     poster.setAttribute("alt","Car Image");
     poster.setAttribute("src",`${obj.poster}`);
    
     likedIcon = document.createElement("i");
     likedIcon.classList.add("fa-regular","fa-heart", "car-like");
    
    
    
     
     carImage.appendChild(poster);
     carImage.appendChild(likedIcon);
    
     carListing.appendChild(carImage);
     carListing.appendChild(itemDetails);
    
     return carListing;

}


 function crauselDisplay(results){
    carGallery.innerHTML=""; 
 results.forEach((obj)=>{
  
 carGallery.appendChild(createElements(obj));

 })
 }


const filterOut = (carMake) => {
    let carName = carMake.querySelector(".car-name").innerText;
   
    
    let searched =  carListingObj.filter((car) => {
        return car.titleText2.toLowerCase()
        .includes(carName.toLowerCase())});
        crauselDisplay(searched);
      
    }

crauselDisplay(carListingObj);
function highlightFilter(nameBlockArgu){

     let checkText = nameBlockArgu.querySelector(".car-name").innerText.toLowerCase();
 
    if(!nameBlockArgu.classList.contains("active")){
        if(checkText === "explore all"){
            nameBlockArgu.classList.add("active");
            crauselDisplay(carListingObj);
            return;
        }
     nameBlockArgu.classList.add("active");
     filterOut(nameBlockArgu);
    }
    else{  
        nameBlockArgu.classList.remove("active");
        crauselDisplay(carListingObj);
    }
}

companyNames.forEach((nameBlock)=>{
nameBlock.addEventListener("click",()=>{
    highlightFilter(nameBlock);
});
})

// our brand crausel filter effect ends
    window.addEventListener("resize",()=>{
        screenWidth=window.innerWidth;
        
    checkingWidth(screenWidth);
    });
    checkingWidth(screenWidth);
 


    // liked un like
    const carImages = document.querySelectorAll(".car-image");
    let childLike;

    function likeActive(car){
        if(isDoubleClick){
            car.classList.add("liked");
            car.classList.remove("fa-regular");
            car.classList.add("fa-solid");
            isDoubleClick=false;
            }
            else{
                car.classList.remove("liked");
                car.classList.add("fa-regular");
                car.classList.remove("fa-solid"); 
                isDoubleClick=true;
            }
    }
    

    carImages.forEach((car) => {
        car.addEventListener("dblclick",()=>{
            childLike = car.querySelector(".car-like");
        likeActive(childLike);
        });
        });
    });

// liked unlike ends




// slider crausel
const sliderButtonsTrack = document.querySelector(".customer-reviews-slider");
const dots=Array.from(sliderButtonsTrack.children);
const customerCrausel = document.querySelector(".customer-crausel");
const crauselBlock = Array.from(customerCrausel.querySelectorAll(".customer-perspectives"));
let activeDot=dots[0];
let activeIndex=0;
let targetSlide;
let currentSlide;
    const movetoSlide =()=>{
 targetSlide=crauselBlock[dots.indexOf(activeDot)];
 currentSlide=customerCrausel.querySelector(".active")
    currentSlide.classList.remove("active");
    targetSlide.classList.add("active");
        }
        
for(let circle of dots){
    circle.addEventListener("click",function (){
     activeDot.classList.remove("active");
     activeDot=circle;
     activeDot.classList.add("active");
     movetoSlide();
    });
}

// Slider ends







document.querySelector('button[type="submit"]').addEventListener("click", function(event){
    event.preventDefault();
  });