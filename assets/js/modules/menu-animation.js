export default function initMenuAnimation() {
  // Seleciona todos os elementos com o atributo data-menu-link.
  const menuLinks = document.querySelectorAll('[data-menu-link]')
  
  // Adiciona a classe 'menu__link--active' ao primeiro link do menu.
  menuLinks[0].classList.add('menu__link--active')
  
  /**
  * Função para manipular a classe 'menu__link--active'.
  * Remove a classe de todos os links do menu e adiciona novamente ao link clicado.
  * @param {*} i - Índice do link do menu.
  */
  function handleLinkHighlight(i) {
    menuLinks.forEach(link => link.classList.remove('menu__link--active'))
    menuLinks[i].classList.add('menu__link--active')
  }
  
  /**
  * Adiciona um event listener de click a cada link do menu.
  * Quando um link é clicado, chama a função handleLinkHighLight com o índice do link.
  */
  menuLinks.forEach((link, i) => {
    link.addEventListener('click', () => {handleLinkHighlight(i)})
  })
}