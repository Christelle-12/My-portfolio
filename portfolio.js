const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const menuOptions = document.querySelectorAll('.desktop-list a');

toggle.addEventListener('click', () => {
  body.classList.toggle('open');
});

menuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.remove('open');
  });
});

// const seeProjectBtn = document.querySelector('.project-container button');
// const popupContainer = document.querySelector('#popup-container');
// const closeBtn = document.querySelector('.close-btn');

// seeProjectBtn.addEventListener('click', () => {
//   popupContainer.classList.toggle('show');
// });

// closeBtn.addEventListener('click', () => {
//   popupContainer.classList.remove('show');
// });

// popup-window


