const markAll = document.querySelector('#mark-all');
const numberIndeticator = document.querySelector('#number');
const pots = document.querySelectorAll('.post');
console.log(pots);

pots.forEach(post => {
    post.addEventListener('click', () => {
        post.querySelector('.not-read').classList.remove('not-read');
        updateNotification();
    })
})

markAll.addEventListener('click', () => {
    const notReadElements = document.querySelectorAll('.not-read');
    

    notReadElements.forEach((notReadElements) => {
        notReadElements.classList.remove('not-read');
    })

    updateNotification(); 
});

const updateNotification = () => {
    const notReadActual = document.querySelectorAll('.not-read');
    numberIndeticator.innerText = notReadActual.length;
}