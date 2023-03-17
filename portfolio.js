const menuBtn = document.getElementById('menu-close-btn');
const menuSection = document.querySelector('section.mobile-menu');
const closeButton = document.getElementById('close-btn');
const menuItems = document.getElementsByClassName('menu-item');

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', () => {
    menuSection.classList.remove('visible');
  });
}

menuBtn.addEventListener('click', () => {
  menuSection.classList.add('visible');
});

closeButton.addEventListener('click', () => {
  menuSection.classList.remove('visible');
});