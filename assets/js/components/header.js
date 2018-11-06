import $ from 'jquery';

class Header {
  constructor (element) {
    this.$element = $(element);
    this.scrollTop = null;
    this.activeRamp = true;

    this.$body = $('body');
    this.heightHeader = this.$element.outerHeight();
    this.heightHero = $('.hero').outerHeight();
    this.heightTransition = this.heightHero - this.heightHeader;

    window.requestAnimationFrame(this.handleAnimationFrame.bind(this));
  }

  handleAnimationFrame () {
    this.queryScrollPosition();
    window.requestAnimationFrame(this.handleAnimationFrame.bind(this));
  }

  queryScrollPosition () {
    if (window.scrollY >= this.heightTransition && this.activeRamp) {
      this.$body.addClass('header-normal');
      this.activeRamp = false;
    }

    if (!this.activeRamp && window.scrollY <= this.heightTransition) {
      this.$body.removeClass('header-normal');
      this.activeRamp = true;
    }
  }
}

export default Header;
