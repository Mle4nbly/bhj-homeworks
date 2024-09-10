const button = document.querySelector('.dropdown__value');
const menu = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');

function clickMenu() {
    if (menu.className == 'dropdown__list') {
        menu.classList.add('dropdown__list_active');
    } else {
        menu.classList.remove('dropdown__list_active');
    }
};

button.addEventListener('click', clickMenu);

items.forEach((item) => {
    item.onclick = () => {
        button.textContent = item.textContent;
        menu.classList.remove('dropdown__list_active');

        return false;
    }
});





