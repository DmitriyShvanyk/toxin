import flatpickr from 'flatpickr';
import flatpickrLocaleRu from '../../node_modules/flatpickr/dist/l10n/ru'
import rangePlugin from '../../node_modules/flatpickr/dist/plugins/rangePlugin'
import '../../node_modules/flatpickr/dist/flatpickr.min.css'

import Dropdown from '../blocks/dropdown/dropdown'

import Collapse from '../blocks/collapse/collapse'

import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css'

import '../pages/searchRoom.css'




window.addEventListener('DOMContentLoaded', () => {

  flatpickr('#filterDates', {
    mode: "range",
    enableTime: true,
    minDate: "today",
    dateFormat: "d.m.Y",
    locale: "ru",
    disableMobile: "true",
    allowInput: true,
    nextArrow: '<span class="icon-arrow-right"></span>',
    prevArrow: '<span class="icon-arrow-left"></span>',
    /*"plugins": [new rangePlugin({
      input: "#dateTo"
    })],*/
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
    }
  });

  const dropdownGuests = new Dropdown({
    selector: '.dropdown-guests',
    label: 'Сколько гостей',
    items: ['взрослые', 'дети', 'младенцы'],
    worlds: ['гость', 'гостя', 'гостей']
  });

  const dropdownRoomAmenities = new Dropdown({
    selector: '.dropdown--room-amenities',
    label: 'Кол-во удобств',
    items: ['спальни', 'кровати', 'ванные комнаты'],
    worlds: ['гость', 'гостя', 'гостей']
  });
  

  const sliderCard = new Swiper('.card__slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  const collapses = Array.from(document.querySelectorAll('.collapse')).map(item => new Collapse(item));

});
