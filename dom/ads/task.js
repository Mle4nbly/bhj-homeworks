const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));

function rotator() {
    let interval = setInterval(() => {
        let index = rotatorCases.indexOf(document.querySelector('.rotator__case_active'));        
        rotatorCases[index].classList.remove('rotator__case_active')
        index += 1;

        if (index == rotatorCases.length) {
            index = 0;
        };

        rotatorCases[index].classList.add('rotator__case_active'); 
        rotator();
        clearInterval(interval);
    }, 1000)
};

rotator();
