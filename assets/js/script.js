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

function setupMenuNav()
{
  /** Seleciona todos os elementos com a classe 'menu__link'. */
  const menuLinks = document.querySelectorAll('.menu__link')
  /** Seleciona todos os elementos com a classe 'section__container'. */
  const sections = document.querySelectorAll('.section__container')
  
  /** Adiciona a classe 'section--show' no primeiro elemento do array sections. */
  sections[0].classList.add('section--show')
  
  /**
  * A função handleShowSection é responsável por manipular a classe 'section--show' dentro das seções.
  * @param {number} i índice do elemento que recebe a classe 'section--show'.
  */
  function handleShowSection(i) {
    /** forEach utilizado para remover a classe 'section--show' de cada seção. */
    sections.forEach( section => section.classList.remove('section--show'))
    sections[i].classList.add('section--show')
  }
  
  /** forEach utilizado para receber o index de cada link. */
  menuLinks.forEach((link, index) => {
    /**
    * Adiciona um evento de 'click' a cada link no menu de navegação.
    * Quando um link é clicado, a função handleShowSection é chamada com
    * o índice do link como argumento.
    * @param {number} index índice do link que foi clicado.
    */
    link.addEventListener('click', () => handleShowSection(index))
  })
}

setupMenuNav()