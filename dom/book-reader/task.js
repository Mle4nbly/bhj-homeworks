const fonts = Array.from(document.querySelectorAll('.font-size'));
let activeFont = document.querySelector('.font-size_active')
const book = document.querySelector('.book')


fonts.forEach(font => {
    font.addEventListener('click', (event) => {
            event.preventDefault();
            activeFont.classList.remove('font-size_active');
            activeFont = font;
            activeFont.classList.add('font-size_active');

            book.classList.remove('book_fs-small', 'book_fs-big');
            const size = event.target.dataset.size;

            if (size) {
                book.classList.add(`book_fs-${size}`);
              }
        }
    )
})