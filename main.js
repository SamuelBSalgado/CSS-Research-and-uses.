const bttn = document.getElementById("firstButton");
const bttn2 = document.getElementById("secondButton");
let sizeChange = document.querySelector('h2[lang="es-MX"]');

bttn.addEventListener('click', () => {
    sizeChange.setAttribute('class', "grande");
});

bttn2.addEventListener('click', () => {
    sizeChange.removeAttribute("class");
});