const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show-links")
})

const reviews = [
    {
      id: 1,
      text:
        "We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out. We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out.",
    },
    {
      id: 2,
      text:
        "As a customer service representative, you have to be able to handle criticisms, complaints, and special requests from time-to-time. You need to be able to handle these queries as customer retention is vital for our company to survive.As a customer service representative, you have to be able to handle criticisms, complaints, and special requests from time-to-time. You need to be able to handle these queries as customer retention is vital for our company to survive.",
    },
    {
      id: 3,
      text:
        "You’re really good at obtaining first-hand customer information and using this information to improve our products and services. You should show the rest of us how you go about obtaining this information. We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out.",
    },
    {
      id: 4,
      text:
        "Remember to never be manipulative and unduly influential when a customer is trying to purchase a product. At the end of the day, it’s their choice whether they would like to purchase the product or not. We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out.",
    },
  ];
// select items
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
setTimeout(showReview, 2000);

// set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
    showReview();
});

// show person based on item
function showReview(){
    const item = reviews[currentItem];
    info.textContent = item.text; 
};

// show next person
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showReview();
});
 
// show previous person
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showReview();
});


function getRandomNumber() {
    return Math.floor(Math.random() * reviews.length);
  }


