document.addEventListener('scroll', () => {
    const revealElements = Array.from(document.querySelectorAll('.reveal'));
    
    revealElements.forEach((reveal) => {
        const { top, bottom } = reveal.getBoundingClientRect();
    
        if (bottom < 0) {
            return;
        }

        if (top > window.innerHeight) {
            return;
        }
        
        reveal.classList.add('reveal_active');
    })
})