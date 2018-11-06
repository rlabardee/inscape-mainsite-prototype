import $ from 'jquery';

class Hero {
  constructor (element) {
    this.$element = $(element);
    this.$heroImage = this.$element.find('.hero__image');
    this.loadBackgroundImage();
  }

  loadBackgroundImage () {
    let img = new Image();

    img.addEventListener('load', () => {
      this.$heroImage.css({
        'background-image': `url(${img.src})`
      }).addClass('loaded');
    }, false);

    img.src = '//inscape-rockit.com/assets/img/photos/slide_03/photo_2880.jpg';
  }
}

export default Hero;
