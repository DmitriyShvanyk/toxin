import Navbar from '../blocks/navbar/navbar'
import '../pages/login.css'

window.addEventListener('DOMContentLoaded', () => {  
  
  const navbar = new Navbar({
    domElemCollapse: '.navbar__collapse',
    domElemBtn: '.navbar__hamburger'
  });

});



// current years
function setCurrentYears(elem) {
  return elem.textContent = `${new Date().getFullYear()}`;
}

const footerYears = document.querySelector('.footer__years');
setCurrentYears(footerYears);