import $ from 'jquery';
import ScrollReveal from 'scrollreveal';

class Narrative {
  constructor (element) {
    this.$element = $(element);
    this.revealPhoto();
    this.revealCopy();
  }

  revealCopy () {
    ScrollReveal().reveal('.narrative__block--left .sr-element', {
      duration: 600,
      easing: 'cubic-bezier(.5,0,0,1)',
      distance: '5px',
      interval: 200,
      origin: 'left',
      reset: true,
      useDelay: 'always',
      viewFactor: 0.35
    });

    ScrollReveal().reveal('.narrative__block--right .sr-element', {
      duration: 600,
      easing: 'cubic-bezier(.5,0,0,1)',
      distance: '5px',
      interval: 200,
      origin: 'right',
      reset: true,
      useDelay: 'always',
      viewFactor: 0.35
    });
  }

  revealPhoto () {
    ScrollReveal().reveal('.narrative figure', {
      duration: 600,
      easing: 'cubic-bezier(.5,0,0,1)',
      interval: 600,
      reset: true,
      useDelay: 'always'
    });
  }
}

export default Narrative;
