const btnHamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');
const menuLinks = document.querySelectorAll('.menu-list a');
const frameImage = document.querySelector('#frame');
const images = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp'];

let currentImageIndex = 0;

frameImage.addEventListener('click', () => {
    currentImageIndex++; //+1

    if(currentImageIndex >=6) {
        currentImageIndex = 0;
    }

    frameImage.src = 'images/' + images[currentImageIndex]
})


btnHamburger.addEventListener('click', ()=> {
    menuList.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if(!menuList.contains(event.target) && !btnHamburger.contains(event.target)) {
        menuList.classList.remove('active')
    }

});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuList.classList.remove('active');
    });

});