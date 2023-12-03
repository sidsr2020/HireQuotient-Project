var zoomImage = document.querySelector('.container2');
var scrollPos = 0;
window.addEventListener('scroll', function () {
  var element = document.querySelector('.scroll-text');
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight / 1.5) {
    element.classList.add('show');
  } else {
    element.classList.remove('show');
  }
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > scrollPos) {
    // Scrolling down
    zoomImage.style.transform = 'scale(1.2)'; // Zoom in
  } else {
    // Scrolling up
    zoomImage.style.transform = 'scale(1)'; // Zoom back to normal
  }

  scrollPos = currentScroll <= 0 ? 0 : currentScroll;
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

