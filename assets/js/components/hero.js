import $ from 'jquery';

class Hero {
  constructor (element) {
    this.$element = $(element);
    this.$heroImage = this.$element.find('.hero__image');
    this.imgEl = new Image();
    this.loadBackgroundImage();
  }

  update () {
    this.$heroImage.css({
      'background-image': `url(${this.imgEl.src})`
    }).addClass('loaded');
  }

  loadBackgroundImage () {
    this.imgEl.addEventListener('load', () => {
      this.update();
    }, false);

    // assign a source to the img to begin loading
    this.imgEl.src = this.$heroImage.data('src');
  }
}

export default Hero;
