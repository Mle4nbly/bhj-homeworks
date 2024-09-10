const allTabs = Array.from(document.querySelectorAll('.tab'));
const allContents = Array.from(document.querySelectorAll('.tab__content'));

allTabs.forEach(clickTab => {
    let index = allTabs.indexOf(clickTab);

    clickTab.onclick = () => {
        if (clickTab !== document.querySelector('.tab_active')) {
            document.querySelector('.tab_active').classList.remove('tab_active');
            document.querySelector('.tab__content_active').classList.remove('tab__content_active');
    
            clickTab.classList.add('tab_active');
            allContents[index].classList.add('tab__content_active');
        };
    };
});

