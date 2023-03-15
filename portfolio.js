// const togglerButton = document.querySelector('#menuIcon');
// const displayElement = document.querySelector('.desktop-list');
// const exitIcon = document.querySelector('#exit-icon');
// const body = document.querySelector('body')

// togglerButton.addEventListener('click', () => {
//   displayElement.style.display = 'block';
//   togglerButton.style.display = 'none'
//   console.log('#exitIcon')
//   body.classList.toggle('open');

// });
const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const menuOptions = document.querySelectorAll('.desktop-list a');

toggle.addEventListener('click', () => {
  body.classList.toggle('open');
});

menuOptions.forEach(option => {
  option.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.remove('open');
  });
});
