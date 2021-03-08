/* eslint-disable */
import 'core-js';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import $ from 'jquery';
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
import 'parsleyjs';
import modalYoutube from '../components/modal-video/modal-youtube';
import autosize from 'autosize';

(() => {
  svg4everybody();
  objectFitImages();
  scrollAnimation();
  modalYoutube();

  const lang = document.querySelector('html').getAttribute('lang').toLowerCase();

  if (lang === 'lv') {
    Parsley.addMessages('lv', {
      defaultMessage: 'Šis ieraksts veikts nekorekti.',
      type: {
        email: 'Šeit jāieraksta derīgs e-pasts.',
        url: 'Šeit jāieraksta korekts url.',
        number: 'Šeit jāieraksta derīgs skaitlis.',
        integer: 'Šeit jāieraksta vesels skaitlis.',
        digits: 'Šeit jāieraksta cipari.',
        alphanum: 'Šeit derīgi tikai alfabēta burti vai cipari.'
      },
      notblank: 'Šis ieraksts nedrīkst būt tukšs.',
      required: 'Šis ieraksts ir obligāti jāaizpilda.',
      pattern: 'Šis ieraksts aizpildīts nekorekti.',
      min: 'Šai vērtībai jābūt lielākai vai vienādai ar %s.',
      max: 'Šai vērtībai jābūt mazākai vai vienādai ar %s.',
      range: 'Šai vērtībai jābūt starp %s un %s.',
      minlength: 'Vērtībai jābūt vismaz %s simbolu garai.',
      maxlength: 'Vērtībai jābūt %s simbolus garai vai īsākai.',
      length: 'Šīs vērtības garums ir neatbilstošs. Tai jābūt %s līdz %s simbolus garai.',
      mincheck: 'Jāizvēlas vismaz %s varianti.',
      maxcheck: 'Jāizvēlas %s varianti vai mazāk.',
      check: 'Jāizvēlas no %s līdz %s variantiem.',
      equalto: 'Šai vērtībai jāsakrīt.',
      mailphone: 'Ievadiet pareizo e-pasta adresi vai tālruni formātā + x xxx xxx xxxx'
    });
  } else if (lang === 'ru') {
    Parsley.addMessages('ru', {
      defaultMessage: 'Некорректное значение.',
      type: {
        email: 'Введите адрес электронной почты.',
        url: 'Введите URL адрес.',
        number: 'Введите число.',
        integer: 'Введите целое число.',
        digits: 'Введите только цифры.',
        alphanum: 'Введите буквенно-цифровое значение.',
      },
      notblank: 'Это поле должно быть заполнено.',
      required: 'Обязательное поле.',
      pattern: 'Это значение некорректно.',
      min: 'Это значение должно быть не менее чем %s.',
      max: 'Это значение должно быть не более чем %s.',
      range: 'Это значение должно быть от %s до %s.',
      minlength: 'Это значение должно содержать не менее %s символов.',
      maxlength: 'Это значение должно содержать не более %s символов.',
      length: 'Это значение должно содержать от %s до %s символов.',
      mincheck: 'Выберите не менее %s значений.',
      maxcheck: 'Выберите не более %s значений.',
      check: 'Выберите от %s до %s значений.',
      equalto: 'Это значение должно совпадать.',
      mailphone: 'Введите корректный адрес электронной почты или телефон в формате + x xxx xxx xxxx'
    });
  } else {
    Parsley.addMessages('en', {
      defaultMessage: 'This value seems to be invalid.',
      type: {
        email: 'This value should be a valid email.',
        url: 'This value should be a valid url.',
        number: 'This value should be a valid number.',
        integer: 'This value should be a valid integer.',
        digits: 'This value should be digits.',
        alphanum: 'This value should be alphanumeric.',
      },
      notblank: 'This value should not be blank.',
      required: 'This value is required.',
      pattern: 'This value seems to be invalid.',
      min: 'This value should be greater than or equal to %s.',
      max: 'This value should be lower than or equal to %s.',
      range: 'This value should be between %s and %s.',
      minlength: 'This value is too short. It should have %s characters or more.',
      maxlength: 'This value is too long. It should have %s characters or fewer.',
      length: 'This value length is invalid. It should be between %s and %s characters long.',
      mincheck: 'You must select at least %s choices.',
      maxcheck: 'You must select %s choices or fewer.',
      check: 'You must select between %s and %s choices.',
      equalto: 'This value should be the same.',
      euvatin: 'It`s not a valid VAT Identification Number.',
      mailphone: 'Enter the correct email or phone in the format +x xxx xxx xxxx'
    });
  }

  Parsley.setLocale(lang);

  Parsley.addValidator(
      'mailphone',
      (value, refOrValue) => {
        const expForMail = /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))$/;
        const expForPhone = /^\+[0-9]?[0-9](\s|\S)\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!value) {
          return true; // Builtin validators all accept empty strings, except `required` of course
        }
        let result;
        if (value.indexOf('@') > 0) {
          result = expForMail.test(value.toLowerCase());
        } else {
          result = expForPhone.test(value.toLowerCase());
        }
        return result;
      }, 256)
    .addMessage('en', 'mailphone', 'Enter the correct email or phone in the format +x xxx xxx xxxx');

  $('.needs-validation').parsley({
    trigger: 'submit',
    errorClass: 'is-invalid',
    successClass: 'is-valid',
    excluded: 'input[type=button], input[type = submit], input[type = reset], input[type = hidden], [disabled], [data-not-verified]',
    errorsWrapper: '<ul class="list-unstyled"></ul>',
    errorsContainer(el) {
      return $(el.element).siblings('.invalid-feedback');
    },
  });

  autosize(document.querySelectorAll('textarea'));
})();
/* eslint-enable */
