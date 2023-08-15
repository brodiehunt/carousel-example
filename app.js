const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const sliderEl = document.querySelector(".slider");
const initialSlider = document.getElementById("0");
const dotsElNodeMap = document.querySelectorAll(".nav-dot");
const dotsElArray = Array.from(dotsElNodeMap);
let currentSlider;

const translateX = (slide) => {
  sliderEl.style.transform = `translateX(-${slide * 500}px)`;
};

const slideSlider = (slideTo) => {
  translateX(slideTo);
  dotsElArray[currentSlider].classList.remove("active");
  dotsElArray[slideTo].classList.add("active");
  currentSlider = slideTo;
};

const stringToNum = (string) => Number(string);

const autoScrollSlider = () => {
  if (currentSlider === 4) {
    slideSlider(0);
  } else {
    const nextSlider = currentSlider + 1;
    slideSlider(nextSlider);
  }
};

dotsElArray.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideSlider(index);
  });
});

btnPrev.addEventListener("click", () => {
  if (currentSlider !== 0) {
    const prevSlider = currentSlider - 1;
    slideSlider(prevSlider);
  }
});

btnNext.addEventListener("click", () => {
  if (currentSlider !== 4) {
    const nextSlider = currentSlider + 1;
    slideSlider(nextSlider);
  }
});

currentSlider = stringToNum(initialSlider.id);

setInterval(autoScrollSlider, 3000);
