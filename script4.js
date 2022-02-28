var slideIndex = 1;
presentSlides(slideIndex);

// Next/previous controls
function addSlides(n) {
  presentSlides(slideIndex += n);
}

// Thumbnail image controls
function shownSlide(n) {
  presentSlides(slideIndex = n);
}

function presentSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
