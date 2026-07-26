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
// Copy Contract Address
const copyButton = document.getElementById("copyButton");
const contractAddress = document.getElementById("contractAddress");

if (copyButton && contractAddress) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(
        contractAddress.textContent.trim()
      );

      const originalText = copyButton.textContent;

      copyButton.textContent = "Copied ✓";
      copyButton.classList.add("copied");

      setTimeout(() => {
        copyButton.textContent = originalText;
        copyButton.classList.remove("copied");
      }, 2000);

    } catch (err) {
      alert("Failed to copy contract address.");
    }
  });
}