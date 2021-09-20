let burgerMenu = document.querySelector('.burger-menu');
let navigation = document.querySelector('nav');

let openMenu = () => {
    if (navigation.style.display === 'flex') {
        navigation.style.display = 'none';
    } else {
    navigation.style.display = 'flex';
    }
};

burgerMenu.addEventListener('click', openMenu);
navigation.addEventListener('click', () => {navigation.style.display = 'none'})


