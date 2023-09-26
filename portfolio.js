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

// form validation
// get form elements
const form = document.querySelector('.form');
const emailInput = document.getElementById('email');
const submitBtn = form.querySelector('.see-project');
// add event listener to the form submission
form.addEventListener('submit', (event) => {
  // prevent default form submission behavior
  event.preventDefault();

  // check if email is in lowercase
  if (emailInput.value === emailInput.value.toLowerCase()) {
    // email is in lowercase, submit the form
    form.submit();
  } else {
  // email is not in lowercase, show error message
    const errorMsg = document.querySelector('.error-message');
    errorMsg.textContent = 'Email should be in lowercase.';
    errorMsg.style.color = '#FF4136';
    submitBtn.insertAdjacentElement('afterend', errorMsg);
  }
});
const dropdown = document.querySelector('.dropdown');
const dropIcon = document.querySelector('.drop');

dropIcon.addEventListener('click', () => {
  dropdown.classList.toggle('visible');
});

document.addEventListener('click', (e) => {
  if (!e.target.matches('.dropdown')) {
    dropdown.classList.remove('visible');
  }
});