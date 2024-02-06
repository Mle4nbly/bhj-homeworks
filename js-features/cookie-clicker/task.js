const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = () => {
    if ((Number(counter.textContent) % 2) === 0) {
        cookie.width += 20;
        cookie.height += 20;

        counter.textContent = Number(counter.textContent) + 1;
    } else {
        cookie.width -= 20;
        cookie.height -= 20;

        counter.textContent = Number(counter.textContent) + 1;
    }


}