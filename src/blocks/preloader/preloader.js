export default class Preloader {
  load(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }
}