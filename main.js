const markAll = document.querySelector('#mark-all');

markAll.addEventListener('click', () => {
    const notReadElements = document.querySelectorAll('.not-read');
    notReadElements.forEach((notReadElements) => {
        notReadElements.classList.remove('not-read');
    })
});