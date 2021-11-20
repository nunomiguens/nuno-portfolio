'use strict';

/* ----- Back to Top Button ----- */

const backToTopButton = document.querySelector('.back-to-top');
let isBackToTopRendered = false;

let alterStyles = isBackToTopRendered => {
  backToTopButton.style.visibility = isBackToTopRendered ? 'visible' : 'hidden';
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? 'scale(1)'
    : 'scale(0)';
};

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

/* ----- Submit outside form ----- */

function myFunction() {
  document.getElementById('form1').submit();
}

/* ----- Toggle dark mode ----- */

function darkMode() {
  const element = document.body;
  element.classList.toggle('dark-mode');
}

/* ----- Toggle Nav menu ----- */

const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.nav__items');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
});

navigation.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
});
