const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');


// Display Mobile Menu
const mobileMenu = () => {
 menu.classList.toggle('is-active');
 menuLinks.classList.toggle('active');
};


menu.addEventListener('click', mobileMenu);


// Smooth scroll effect
const scrollSmooth = (event) => {
 event.preventDefault();
 const target = event.target;
 const id = target.getAttribute('href');
 document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};


// Highlight active menu when scrolling
const highlightMenu = () => {
 const homeMenu = document.querySelector('#home-page');
 const aboutMenu = document.querySelector('#about-page');
 const servicesMenu = document.querySelector('#services-page');
 const scrollPos = window.scrollY;


 // adds 'highlight' class to my menu items
 if (window.innerWidth > 960 && scrollPos < 600) {
   homeMenu.classList.add('highlight');
   aboutMenu.classList.remove('highlight');
   servicesMenu.classList.remove('highlight');
   return;
 } else if (window.innerWidth > 960 && scrollPos < 1400) {
   aboutMenu.classList.add('highlight');
   homeMenu.classList.remove('highlight');
   servicesMenu.classList.remove('highlight');
   return;
 } else if (window.innerWidth > 960 && scrollPos < 2345) {
   servicesMenu.classList.add('highlight');
   aboutMenu.classList.remove('highlight');
   homeMenu.classList.remove('highlight');
   return;
 }


 // removes 'highlight' class from menu items
 const elem = document.querySelector('.highlight');
 if (elem) {
   elem.classList.remove('highlight');
 }
};


window.addEventListener('scroll', highlightMenu);
menuLinks.addEventListener('click', scrollSmooth);


// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
 if (window.innerWidth <= 768 && menu.classList.contains('is-active')) {
   menu.classList.remove('is-active');
   menuLinks.classList.remove('active');
 }
};


navLogo.addEventListener('click', hideMobileMenu);
menuLinks.addEventListener('click', hideMobileMenu);


// Hover effects
const mainBtn = document.querySelectorAll('.main__btn');
mainBtn.forEach((btn) => {
 btn.addEventListener('mouseover', () => {
   btn.style.background = '#fff';
   btn.style.color = '#3b3054';
   btn.style.transition = '0.5s';
 });
 btn.addEventListener('mouseleave', () => {
   btn.style.background = 'none';
   btn.style.color = '#fff';
 });
});


// Text animation
const text = document.querySelector('.hero__description');
const strText = text.textContent;
const splitText = strText.split('');
text.textContent = '';


for (let i = 0; i < splitText.length; i++) {
 text.innerHTML += "<span class='hero__desc-animation'>" + splitText[i] + '</span>';
}


let char = 0;
let timer = setInterval(onTick, 50);


function onTick() {
 const span = text.querySelectorAll('span')[char];
 span.classList.add('fade');
 char++;
 if (char === splitText.length) {
   complete();
   return;
 }
}


function complete() {
 clearInterval(timer);
 timer = null;
}
