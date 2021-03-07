/* eslint-disable */
import 'core-js';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import '@popperjs/core';
// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';
import {
  scrollAnimation,
} from '../blocks/js-functions/scroll-animation';
import modalYoutube from '../components/modal-video/modal-youtube';

(() => {
  svg4everybody();
  objectFitImages();
  scrollAnimation();
  modalYoutube();
})();
/* eslint-enable */
