let ham = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-items');
var body = document.querySelector('body');
const donate = document.querySelector('#donate-btn');



ham.addEventListener('click',()=>{
  ham.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('active');
  // body.classList.toggle('active');
})


// animation library =========
AOS.init(
  // offset: 120, // offset (in px) from the original trigger point
  // delay: 0, // values from 0 to 3000, with step 50ms
  // duration: 400, // values from 0 to 3000, with step 50ms
  // easing: "ease", // default easing for AOS animations
  // once: false, // whether animation should happen only once - while scrolling down
  // mirror: false, // whether elements should animate out while scrolling past them
  // anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
);

// document.addEventListener('DOMContentLoaded', function() {
  
//   ham.addEventListener('click', function() {
//     body.classList.toggle('menu-open');
//   });
// });

donate.addEventListener('click',()=>{
    window.open('https://sswabtrust.org/wp-content/uploads/2022/12/SSWAB-TRUST-PLEDGE-FORM.pdf');
})