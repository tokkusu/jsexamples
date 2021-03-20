const button = document.querySelector('#button'),
      text   = document.querySelector('#text');
      
button.addEventListener('click', function() {

   if (text.classList.toggle('text-hidden')) {
      button.textContent = 'Показать';
   } else {
      button.textContent = 'Убрать';
   }
});

   // if (text.classList.contains('text-hidden'))