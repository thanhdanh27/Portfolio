
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}


const menu = document.querySelector('.mobile-bar')
const nav = document.querySelector('.navbar')
menu.onclick = function () {
    // var isClose = nav.clientHeight === 136;
    // if (isClose) {
    //     nav.classList.remove('open')
    // }
    // else {
    //     nav.classList.add('open')
    // }
    nav.classList.toggle('open');
}

const menuItems = document.querySelectorAll('.navbar__item')

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function () {
        nav.classList.toggle('open')
    }
}