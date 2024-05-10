const open = document.getElementById('open');
const close = document.getElementById('close');
const closeBtn = document.getElementById('close-btn');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));
closeBtn.addEventListener('click', () => container.classList.remove('show-nav'));
