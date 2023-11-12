// O'zgaruvchilar
//  let, var  =  String Oject Arr Number Float double
// const = String Oject Arr Number Float double

const menuBtn = document.querySelector('.menuBtn');
const navbarList = document.querySelector('.navbar__list');

menuBtn.addEventListener('click', function() {
    navbarList.classList.toggle('navbar__active');
});
