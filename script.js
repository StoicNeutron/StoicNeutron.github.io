window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('.back-to-top');
  if (window.pageYOffset > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});