// Libs
import $ from 'jquery';

// Framework
import 'bootstrap';

// Import Components
import Header from './components/header';
import Hero from './components/hero';
import Narrative from './components/narrative';
import Carousel from './components/carousel';
import Figure from './components/figure';

window.jQuery = $;
$.noConflict();

window.activeColors = [];

// initialize the component classes
$('.header').each((index, element) => new Header(element));
$('.hero').each((index, element) => new Hero(element));
$('.narrative').each((index, element) => new Narrative(element));
$('.carousel').each((index, element) => new Carousel(element));
$('.figure').each((index, element) => new Figure(element));

// var draw = SVG('drawing').size('100%', '100%');
