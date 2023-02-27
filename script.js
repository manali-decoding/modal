const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', function () {
  //   console.log(overlay.classList);
  overlay.classList.toggle('open-modal');
});

closeBtn.addEventListener('click', function () {
  overlay.classList.toggle('open-modal');
});
