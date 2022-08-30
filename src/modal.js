/*
(() => { const refs = { openModalBtn:
document.querySelector("[data-modal-open]"), closeModalBtn:
document.querySelector("[data-modal-close]"), modal:
document.querySelector("[data-modal]"), };
refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal); function
toggleModal() { refs.modal.classList.toggle("is-hidden"); } })();
*/

(() => {
    const menuOpenBtn = document.querySelector('[data-menu-open]');
    const menuCloseBtn = document.querySelector('[data-menu-close]');
  
    const mobileMenu = document.querySelector('[data-menu]');
    // const body = document.querySelector('body');
  
    menuOpenBtn.addEventListener('click', openModal);
    menuCloseBtn.addEventListener('click', openModal);
  
    function openModal() {
      mobileMenu.classList.toggle('is-open');
      // body.classList.toggle('no-scroll');
    }
  })();