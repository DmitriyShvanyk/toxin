import flatpickr from 'flatpickr';
import flatpickrLocaleRu from '../../node_modules/flatpickr/dist/l10n/ru'
import rangePlugin from '../../node_modules/flatpickr/dist/plugins/rangePlugin'
import '../../node_modules/flatpickr/dist/flatpickr.min.css'

import Navbar from '../blocks/navbar/navbar'

import Dropdown from '../blocks/dropdown/dropdown'

import '../pages/searchRoom.css'




window.addEventListener('DOMContentLoaded', () => {  
  flatpickr('#dateFrom', {
    enableTime: true,
    dateFormat: "d.m.Y",
    locale: "ru",
    disableMobile: "true",
    allowInput: true,
    nextArrow: '<span class="icon-arrow-right"></span>',
    prevArrow: '<span class="icon-arrow-left"></span>',
    "plugins": [new rangePlugin({
      input: "#dateTo"
    })],
    onReady: function (selectedDates, dateStr, instance) {

      const flatpickrInnerContainer = document.querySelector('.flatpickr-calendar');
      const flatpickrFoot = document.createElement('div');

      flatpickrFoot.classList.add('flatpickr__foot');

      const buttonClear = document.createElement('button');
      buttonClear.classList.add('flatpickr__btn', 'flatpickr__btn--clear');
      buttonClear.textContent = 'очистить';
      buttonClear.dataset.clear;

      const buttonApply = document.createElement('button');
      buttonApply.classList.add('flatpickr__btn', 'flatpickr__btn--apply');
      buttonApply.textContent = 'применить';

      flatpickrFoot.appendChild(buttonClear);
      flatpickrFoot.appendChild(buttonApply);
      flatpickrInnerContainer.appendChild(flatpickrFoot);

      //console.log(instance)

      buttonClear.addEventListener('click', () => {
        instance.clear()
      });
    },
    onChange: function (selectedDates, dateStr, instance) {

    },

  });

  const navbar = new Navbar({
    domElemCollapse: '.navbar__collapse',
    domElemBtn: '.navbar__hamburger'
  });

  const dropdownGuests = new Dropdown({
    selector: '.dropdown',
    label: 'Сколько гостей',
    worlds: ['гость', 'гостя', 'гостей']
  }); 

})








// current years
function setCurrentYears(elem) {
  return elem.textContent = `${new Date().getFullYear()}`;
}

const footerYears = document.querySelector('.footer__years');
setCurrentYears(footerYears);