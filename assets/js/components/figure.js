import $ from 'jquery';

class Figure {
  constructor(element) {
    this.$element = $(element);
    this.$image = this.$element.find('img');

    this.documenStyle = getComputedStyle(document.documentElement);

    this.rootColors = {
      blue: this.documenStyle.getPropertyValue('--blue').trim(),
      purple: this.documenStyle.getPropertyValue('--purple').trim(),
      pink: this.documenStyle.getPropertyValue('--pink').trim(),
      orange: this.documenStyle.getPropertyValue('--orange').trim(),
      slate: this.documenStyle.getPropertyValue('--slate').trim()
    };

    this.watchLoad();
    this.generateColor();
    console.log('You loaded a figure!');
  }

  watchLoad () {
    this.$image[0].addEventListener('load', () => {
      this.$element.addClass('loaded');
    }, false);
  }

  pickColor () {
    let available = Object.values(this.rootColors).filter(color => {
      if (!window.activeColors.includes(color)) return color;
    });

    let max = Math.floor(available.length);
    let min = Math.ceil(1);

    return available[Math.floor(Math.random() * (max - min)) + min];
  }

  generateColor () {
    // if we don't have any more colors to work with, reset
    if (window.activeColors.length === Object.keys(this.rootColors).length) {
      window.activeColors.splice(window.activeColors.length);
    }

    let selected = this.pickColor();

    this.$element.css('background-color', selected);

    window.activeColors.push(selected);

    console.log('picked: ', selected);
  }
}

export default Figure;
