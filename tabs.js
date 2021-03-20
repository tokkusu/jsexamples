// Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');

// Нашли все contentBox
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
   item.addEventListener('click', function () {
     
      // 1. Скрыть все contentBox
      contentBoxes.forEach(function (i) {
         i.classList.add('text-hidden');         
      })

      // 2. Выбрать нужный contentBox и показать его
      const contentBox = document.querySelector('#' + this.dataset.tab);  
      contentBox.classList.remove('text-hidden');
   })
})