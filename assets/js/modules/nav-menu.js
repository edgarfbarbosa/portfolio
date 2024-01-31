export default function setupNavMenu() {
  // Seleciona todos os elementos com o atributo data-menu-link.
  const menuLinks = document.querySelectorAll('[data-menu-link]')
  
  // Seleciona todos os elementos com o atributo data-section.
  const sections = document.querySelectorAll('[data-section]')
  
  // Adiciona a classe 'section--show' ao primeiro elemento do array sections.
  sections[0].classList.add('section--show')
  
  /**
  * A função handleShowSection é responsável por manipular a classe 'section--show' dentro das seções.
  * @param {number} i - Índice do elemento que recebe a classe 'section--show'.
  */
  function handleShowSection(i) {
    sections.forEach( section => section.classList.remove('section--show'))
    sections[i].classList.add('section--show')
  }
  
  /**
  * forEach utilizado para receber o index de cada link.
  * Adiciona um evento de 'click' a cada link no menu de navegação.
  * Quando um link é clicado, a função handleShowSection é chamada com o índice do link como argumento.
  * @param {number} i - Índice do link que foi clicado.
  */
  menuLinks.forEach((link, i) => {
    link.addEventListener('click', () => handleShowSection(i))
  })
}