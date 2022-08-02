const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  const menu = document.querySelector('.hamburger-menu');
  const top = document.querySelector('.top');
  const middle = document.querySelector('.middle');
  const bottom = document.querySelector('.bottom');
  menu.classList.toggle('hide');
  top.classList.toggle('active');
  middle.classList.toggle('active');
  bottom.classList.toggle('active');
});

const items = document.querySelector('.hamburger-menu').childNodes;

items.forEach((item) => {
  item.addEventListener('click', () => {
    const menu = document.querySelector('.hamburger-menu');
    const top = document.querySelector('.top');
    const middle = document.querySelector('.middle');
    const bottom = document.querySelector('.bottom');
    menu.classList.toggle('hide');
    top.classList.toggle('active');
    middle.classList.toggle('active');
    bottom.classList.toggle('active');
  });
});
