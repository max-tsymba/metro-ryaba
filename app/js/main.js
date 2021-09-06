/*====================================IMPORT MODULES====================================*/
import { burgerOpener } from './modules/libs';
import IMask from 'imask';
/*======================================================================================*/


/*======================================DOM LOADED======================================*/
window.addEventListener('DOMContentLoaded', () => {
    burgerOpener('burger', '.header__menu', '.header__menu-close', '.header__menu-link');
    burgerOpener('reg__button', '#overlay', '.close-btn');

    function mask() {

        let phones = document.getElementsByName('phone');
        let newMaskOption = {
          mask: '+{38}(000)-000-0000',
        }
  
        phones.forEach((item) => {
          let mask = IMask(item, newMaskOption);
        })
      }
  
    mask();
});
/*======================================================================================*/