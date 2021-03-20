// Находим нужные элементы: кнопка модалки, модалка, кнопка закрытия
const button2     = document.querySelector('[data-modal-button]'),
      modal       = document.querySelector('[data-modal]'),
      buttonClose = document.querySelector('[data-modal-close]');

// Слушаем клик на кнопке открытия, и открываем модалку
button2.addEventListener('click', function () {
   modal.classList.remove('text-hidden');
});

// Слушаем клик на кнопке закрытия, и закрываем модалку
buttonClose.addEventListener('click', function () {
   modal.classList.add('text-hidden');      
})

modal.addEventListener('click', function () {
   modal.classList.add('text-hidden');
})


modal.querySelector('.modal-window').addEventListener('click', function (event) {
   event.stopPropagation();
})