import Preloader from '../blocks/preloader/preloader'
import Navbar from '../blocks/navbar/navbar'


// preloader
const preloader = new Preloader();
const preloaderPage = document.querySelector('.preloader');
const preloaderPageHidden = 'preloader--hidden';

preloader.load(3000)
  .then(() => {
    preloaderPage.classList.add(preloaderPageHidden);
  }).catch(() => {
    preloaderPage.classList.remove(preloaderPageHidden);
  });


window.addEventListener('DOMContentLoaded', () => {

  // navbar
  const navbar = new Navbar({
    domElemCollapse: '.navbar__collapse',
    domElemBtn: '.navbar__hamburger'
  });


  // current years
  function setCurrentYears(elem) {
    return elem.textContent = `${new Date().getFullYear()}`;
  }

  const footerYears = document.querySelector('.footer__years');
  setCurrentYears(footerYears);
});