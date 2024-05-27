let menu= document.querySelector('#menu-bars');
let navbar= document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    
};

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

    },
    
    loop:true,
  });


var swiper = new Swiper(".reveiw-slide", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides:true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true
  });

  // function loader(){
  //   document.querySelector('.loader-container').classList.add('fade-out');
  // }

  // function fadeOut(){
  //   setInterval(loader, 3000);
  // }

  // window.onload = fadeOut;