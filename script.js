const buttons = document.querySelectorAll('.btn')
const icons = document.querySelectorAll('.icon')
const paragraphs = document.querySelectorAll('.p')
const links = document.querySelectorAll('a');

links.forEach((link) => {
    link.addEventListener('click', function () {
        let pElement = link.nextElementSibling;
        pElement.classList.toggle("visible")
        let iconElement = link.querySelector('button .icon');
        console.log(iconElement);
        if (iconElement) {
            iconElement.classList.toggle('icon-plus');
        }
    })
})
