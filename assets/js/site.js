// libraries
import $ from 'jquery';
import 'bootstrap';

// components
import './components/hero';



$('#exampleModal').on('show.bs.modal', function (e) {
  console.log('opened');
});

var lastScrollY = 0;
var ticking = false;
var updatedHeader = false;

var update = function () {
  // do your stuff
  // console.log('scroll', lastScrollY);

  if (lastScrollY >= 289 && !updatedHeader) {
    document.querySelector('body').classList.add('header-normal');
    updatedHeader = true;
  }

  if (updatedHeader && lastScrollY <= 467) {
    document.querySelector('body').classList.remove('header-normal');
    updatedHeader = false;
  }

  ticking = false;
};

var requestTick = function () {
  if (!ticking) {
    window.requestAnimationFrame(update);
    ticking = true;
  }
};

var onScroll = function () {
  lastScrollY = window.scrollY;
  requestTick();
};

$(window).on('scroll', onScroll);



// loading hero...
const $heroImageContainter = $('.hero__image');

var img = new Image();

img.addEventListener('load', function () {
  $heroImageContainter.css({
    'background-image': `url(${img.src})`
  }).addClass('loaded');
}, false);

img.src = '//inscape-rockit.com/assets/img/photos/slide_03/photo_2880.jpg'; // Set source path
