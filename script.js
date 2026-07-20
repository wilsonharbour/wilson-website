const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

let language = 'en';
const langButton = document.getElementById('langButton');
langButton.addEventListener('click', () => {
  language = language === 'en' ? 'id' : 'en';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-en][data-id]').forEach(el => {
    el.textContent = el.dataset[language];
  });
  langButton.textContent = language === 'en' ? 'ID' : 'EN';
});

document.getElementById('year').textContent = new Date().getFullYear();
