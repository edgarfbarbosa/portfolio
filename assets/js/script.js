function initMenuAnimation()
{
  /** Seleciona todos os elementos com a classe 'menu__link'. */
  const menuLinks = document.querySelectorAll('.menu__link')
  
  /** Adiciona a classe 'menu__link--highlight' no primeiro elemento do array-like menuLinks. */
  menuLinks[0].classList.add('menu__link--highlight')
  
  /**
  * Manipula a classe 'menu__link--highlight' nos links dentro de 'menuLinks'.
  * @param {number} index índice do elemento que recebe a classe 'menu__link--highlight'.
  */
  function handleLinkHighlight(index) {
    menuLinks.forEach(link => link.classList.remove('menu__link--highlight'))
    menuLinks[index].classList.add('menu__link--highlight')
  }
  
  /** Adiciona um evento de 'click' a cada link, chamando a função 'handleLinkHighlight(index)' ao passar o mouse por cima. */
  menuLinks.forEach((link, index) => {
    link.addEventListener('click', () => {handleLinkHighlight(index)})
  })
}

initMenuAnimation()