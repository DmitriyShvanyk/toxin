export default class Navbar {
  constructor({ domElemCollapse, domElemBtn }) {
    this.domElemCollapse = document.querySelector(domElemCollapse);
    this.domElemBtn = document.querySelector(domElemBtn);

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);

    this.domElemBtn.addEventListener('click', this.toggle);

  }
  toggle() {
    this.domElemCollapse.classList.toggle('navbar__collapse--open');
    this.domElemBtn.classList.toggle('navbar__hamburger--open');
  }
  close() {
    this.domElemCollapse.classList.remove('navbar__collapse--open');
    this.domElemBtn.classList.remove('navbar__hamburger--open');
  }
}
