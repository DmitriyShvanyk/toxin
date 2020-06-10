export default class Collapse {
  constructor(container) {
    this.container = container;
    this.toggle = this.toggle.bind(this);

    const label = this.container.querySelector('.collapse__label');
    label.addEventListener('click', this.toggle);
  }
  toggle() {
    this.container.classList.toggle('collapse--open');
  }
}