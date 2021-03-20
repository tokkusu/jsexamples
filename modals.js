
const modalButtons     = document.querySelectorAll('[data-modal-button]'),
      modalButtonClose = document.querySelectorAll('[data-modal-close]'),
      allModals        = document.querySelectorAll('[data-modal]');


// Кнопки - открыть модалку
modalButtons.forEach(function (i) {
   i.addEventListener('click', function () {
      const modalId = this.dataset.modalButton;
      const modal   = document.querySelector('#' + modalId);
      modal.classList.remove('text-hidden');

      //Находим внутри открываемой модалки блок modal-window и запрещаем ему передавать клики родителям
      modal.querySelector('.modal-window').addEventListener('click', function (e) {
         e.stopPropagation();         
      });
   });
});

// Кнопки - закрыть модалку
modalButtonClose.forEach(function (item) {
   item.addEventListener('click', function () {
      const modal = this.closest('[data-modal]');
      modal.classList.add('text-hidden');
   });
});

// Закрытие модалки по фейду
allModals.forEach(function (item) {
   item.addEventListener('click', function () {
      this.classList.add('text-hidden');
   });
});