window.addEventListener('scroll', function () {
  const box = document.getElementById('NavBar');
  const triggerLine = 50;

  if (window.scrollY > triggerLine) {
    box.classList.add('square');
  } else {
    box.classList.remove('square');
  }
});
