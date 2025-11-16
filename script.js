window.addEventListener('scroll', function () {
  const triggerLine = 99;

  if (window.scrollY > triggerLine) {
    document.body.classList.add('scroll');
  } else {
    document.body.classList.remove('scroll');
  }
});
