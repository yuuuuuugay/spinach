const body = document.querySelector('#body');
const bodyColor = document.querySelector('#bodyColor');
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const hamburgerMenuTop = document.querySelector('#hamburgerMenuTop');
const hamburgerMenuMiddle = document.querySelector('#hamburgerMenuMiddle');
const hamburgerMenuBottom = document.querySelector('#hamburgerMenuBottom');
const hamburgerMenuLinks = document.querySelector('#hamburgerMenuLinks');

const explanation = document.querySelector('#explanation');



// ハンバーガーメニュークリック
hamburgerMenu.addEventListener('click', () => {
    body.classList.toggle('bodyToggle');
    bodyColor.classList.toggle('bodyColorToggle');
    hamburgerMenuTop.classList.toggle('hamburgerMenuTopToggle');
    hamburgerMenuMiddle.classList.toggle('hamburgerMenuMiddleToggle');
    hamburgerMenuBottom.classList.toggle('hamburgerMenuBottomToggle');
    hamburgerMenuLinks.classList.toggle('hamburgerMenuLinksToggle');
})



// スクロール
window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.active');
  
    boxes.forEach(function(box) {
        const distanceToBox = box.offsetTop;
        if(scroll + windowHeight > distanceToBox) {
            box.classList.add('is-active');
        }
    });
});