/* eslint-disable */
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import {
  scrollAnimation,
} from '../blocks/js-functions/scroll-animation';
import {
  uiKitNavigation,
} from "../pages/ui-kit/ui-kit";

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  scrollAnimation();
  uiKitNavigation();
});
/* eslint-enable */
