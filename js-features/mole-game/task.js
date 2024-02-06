const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const index_list = [1,2,3,4,5,6,7,8,9];

index_list.forEach(index => {
    const hole = document.getElementById(`hole${index}`);
    
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;

            if (Number(dead.textContent) === 10) {
                alert('Вы победили!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1;

            if (lost.textContent == 5) {
                alert('Вы проиграли.');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
});