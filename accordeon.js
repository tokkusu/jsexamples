const headers = document.querySelectorAll('[data-name="acc-title"]');

      
headers.forEach(function(item) {
   item.addEventListener('click', showContent);
})

function showContent() {
   this.nextElementSibling.classList.toggle('text-hidden');
}