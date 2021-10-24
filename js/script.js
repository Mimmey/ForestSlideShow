const timeTextArea = document.getElementById("time");
let slideIndex = 1;
let timeout;
let time = 2000;
showSlidesByHand(slideIndex)

function handOnClick() {
  clearTimeout(timeout);
}

function plusSlides(n) {
  showSlidesByHand(slideIndex += n);
}

function currentSlide(n) {
  showSlidesByHand(slideIndex = n);
}

function showSlidesByHand(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides() {
  if (timeTextArea.value != '' && timeTextArea.value != 0) {
    time = timeTextArea.value * 1000;
  }

  clearTimeout(timeout);
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    timeout = setTimeout(showSlides, time);
}
