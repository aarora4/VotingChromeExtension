var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

if (document.readyState === 'complete') {
  showSlides(slideIndex);
}
else {
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      showSlides(slideIndex);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('prev1');
  // onClick's logic below:
  link.addEventListener('click', function() {
      plusSlides(1);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('next1');
  // onClick's logic below:
  link.addEventListener('click', function() {
      plusSlides(-1);
  });
});