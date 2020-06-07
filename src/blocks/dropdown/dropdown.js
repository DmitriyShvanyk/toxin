export default class Dropdown {
  constructor({ selector, label, worlds = [] }) {
    this.container = document.querySelector(selector);
    this.label = label;
    this.worlds = worlds;

    this.render();

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.closeOutside = this.closeOutside.bind(this);
    this.onCount = this.onCount.bind(this);
    this.clear = this.clear.bind(this);
    this.apply = this.apply.bind(this);

    if(!this.container){
      return
    }

    const dropdownLabel = this.container.querySelector('.dropdown__label');
    const dropdownClear = this.container.querySelector('.dropdown__clear');
    const dropdownApply = this.container.querySelector('.dropdown__apply');
    dropdownApply.dataset.guests = 0;

    dropdownLabel.addEventListener('click', () => dropdownLabel.classList.contains('dropdown__label--active') ? this.close() : this.open());
    document.addEventListener('click', this.closeOutside);
    this.container.addEventListener('click', this.onCount);
    this.container.addEventListener('change', this.onCount);
    dropdownClear.addEventListener('click', this.clear);
    dropdownApply.addEventListener('click', this.apply);
  }

  // method create
  create() {
    return `
          <div class="dropdown__box">
            <button class="dropdown__label" type="button">   
              <span class="dropdown__label-text">${this.label}</span>
              <span class="icon-expand dropdown__icon"></span>
            </button>
            <div class="dropdown__inner">
              <div class="dropdown__body">
                <div class="dropdown__item dropdown__item--adults">
                  <div class="dropdown__text">взрослые</div>
                  <div class="dropdown__counts">
                    <button class="dropdown__minus" type="button" disabled>-</button>
                    <input type="number" class="dropdown__count" min="0" value="0">
                    <button class="dropdown__plus" type="button">+</button>
                  </div>
                </div>
                <div class="dropdown__item dropdown__item--child">
                  <div class="dropdown__text">дети</div>
                  <div class="dropdown__counts">
                  <button class="dropdown__minus" type="button" disabled>-</button>
                    <input type="number" class="dropdown__count" min="0" value="0">
                    <button class="dropdown__plus" type="button">+</button>
                  </div>
                </div>
                <div class="dropdown__item dropdown__item--child">
                  <div class="dropdown__text">младенцы</div>
                  <div class="dropdown__counts">
                  <button class="dropdown__minus" type="button" disabled>-</button>
                    <input type="number" class="dropdown__count" min="0" value="0">
                    <button class="dropdown__plus" type="button">+</button>
                  </div>
                </div>
              </div>
              <div class="dropdown__foot">
                <button class="dropdown__clear" type="button">очистить</button>
                <button class="dropdown__apply" type="button">применить</button>
              </div>
            </div>
          </div>`
  }

  // render
  render() {
    if (this.container === null) {
      return;
    }
    this.container.insertAdjacentHTML('beforeend', this.create());
  }

  // method open
  open() {
    const dropdownLabel = this.container.querySelector('.dropdown__label');
    const dropdownInner = this.container.querySelector('.dropdown__inner');

    if (!dropdownLabel) {
      return;
    }

    dropdownLabel.classList.add('dropdown__label--active');
    dropdownInner.classList.add('dropdown__inner--active');
  }

  // method close
  close() {
    const dropdownLabel = this.container.querySelector('.dropdown__label');
    const dropdownInner = this.container.querySelector('.dropdown__inner');

    if (!dropdownLabel) {
      return;
    }

    dropdownLabel.classList.remove('dropdown__label--active');
    dropdownInner.classList.remove('dropdown__inner--active');
  }

  // method close select click outside
  closeOutside(e) {
    if (!this.container.contains(e.target)) {
      this.close();
    }
  }

  // method onCount
  onCount(e) {
    const target = e.target;

    if (target.classList.contains('dropdown__plus')) {
      const countElem = target.previousElementSibling;
      +countElem.value++
      if (+countElem.value > 0) {
        countElem.previousElementSibling.removeAttribute('disabled');
        this.container.querySelector('.dropdown__clear').classList.add('dropdown__clear--active');
      }
    }

    if (target.classList.contains('dropdown__minus')) {
      const countElem = target.nextElementSibling;
      if (+countElem.value === 0) {
        target.setAttribute('disabled', 'disabled');
        this.container.querySelector('.dropdown__clear').classList.remove('dropdown__clear--active');
        return
      }
      +countElem.value--
    }

    const guests = document.querySelectorAll('.dropdown__count');
    const totalGuests = Array.from(guests).map(g => g.value).reduce((p, c) => +p + +c, 0);
    this.container.querySelector('.dropdown__apply').dataset.guests = `${totalGuests}`;
  }

  // method apply
  apply() {
    const totalGuests = +this.container.querySelector('.dropdown__apply').dataset.guests;

    if (totalGuests > 0) {

      this.container.querySelector('.dropdown__label-text').textContent = this.declensionGuests(totalGuests, this.worlds);
    }
    else {
      this.container.querySelector('.dropdown__label-text').textContent = `${this.label}`;
    }
  }

  // method declension guests
  declensionGuests(num, arr) {
    if (num === 1) {
      return `${num} ${arr[0]}`;
    }
    else if (num > 1 && num < 5) {
      return `${num} ${arr[1]}`;
    }
    else {
      return `${num} ${arr[2]}`;
    }
  }

  // method clear
  clear() {
    this.container.querySelector('.dropdown__label-text').textContent = `${this.label}`;
    this.container.querySelector('.dropdown__clear').classList.remove('dropdown__clear--active');
    const guests = Array.from(document.querySelectorAll('.dropdown__count')).map(g => g.value = 0);
    const minus = Array.from(this.container.querySelectorAll('.dropdown__minus')).map(m => m.setAttribute('disabled', 'disabled'));
  }

  // method destroy
  destroy() {
    this.container.innerHTML = '';
  }

}