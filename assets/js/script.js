/** Seleciona todos os elementos com a classe 'nav__link'. */
const navLinks = document.querySelectorAll('.nav__link')

/** Adiciona a classe 'nav__link--border' no primeiro elemento do array-like navLinks. */
navLinks[0].classList.add('nav__link--border')

/**
* Manipula a classe 'nav__link--border' nos links dentro de 'navLinks'.
* @param {number} i índice do elemento que recebe a classe 'nav__link--border'.
*/
function handleActiveLink(i) {
  navLinks.forEach(link => link.classList.remove('nav__link--border'))
  navLinks[i].classList.add('nav__link--border')
}

/** Adiciona um evento de 'mouseover' a cada link, chamando a função 'handleActiveLink(i)' ao passar o mouse por cima. */
navLinks.forEach((link, i) => {
  link.addEventListener('mouseover', () => {handleActiveLink(i)})
})