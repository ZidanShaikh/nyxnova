const slideshow = document.querySelector(".bg-slideshow");

const imageCount = 20;
const images = Array.from(
  { length: 20 },
  (_, i) => `images/cats/${i + 1}.jpeg`
);

let index = 0;

function changeBackground() {
  // Fade out
  slideshow.style.opacity = 0;

  setTimeout(() => {
    slideshow.style.backgroundImage = `url('${images[index]}')`;
    // Fade in
    slideshow.style.opacity = 1;
    index = (index + 1) % images.length;
  }, 1500); // match transition duration
}

changeBackground(); // initial image
setInterval(changeBackground, 6000); // every 6 seconds
