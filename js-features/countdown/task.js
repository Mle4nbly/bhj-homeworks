const timer = document.getElementById('timer');
let interval = setInterval(() => {
    if (timer.textContent > 0) {
        timer.textContent = Number(timer.textContent) - 1;
    };
}, 100);

setTimeout(() => {
    clearInterval(interval); 
    alert('Вы победили в конкурсе!');
}, 6000);
