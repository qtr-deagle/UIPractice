window.addEventListener('scroll', function () {
  const box = document.getElementById('myBox');
  const triggerLine = 50;

  if (window.scrollY > triggerLine) {
    box.classList.add('circle');
  } else {
    box.classList.remove('circle');
  }
});
