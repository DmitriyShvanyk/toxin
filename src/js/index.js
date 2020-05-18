import '../pages/index.css'



// current years
function setCurrentYears(elem){  
  return elem.textContent = `${new Date().getFullYear()}`;
}

const footerYears = document.querySelector('.footer__years');
setCurrentYears(footerYears);