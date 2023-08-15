const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const sliderEl = document.querySelector('.slider');
const initialSlider = document.getElementById('0');
const dotsElNodeMap = document.querySelectorAll('.nav-dot');
const dotsElArray = Array.from(dotsElNodeMap);
console.log(dotsElArray);


dotsElArray.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideSlider(index);
  })
})
const slideSlider = (slideTo) => {
  translateX(slideTo);
  dotsElArray[currentSlider].classList.remove('active');
  dotsElArray[slideTo].classList.add('active');
  currentSlider = slideTo;
}

const stringToNum = (string) => {
  return Number(string);
}

const translateX = (slide) => {
  sliderEl.style.transform = `translateX(-${slide * 500}px)`;
}

const autoScrollSlider = () => {
  console.log('should work');
  if (currentSlider === 4) {
    slideSlider(0);
  } else {
    let nextSlider = currentSlider + 1;
    slideSlider(nextSlider);
  }
}

btnPrev.addEventListener('click', () => {
  if (currentSlider !== 0) {
    let prevSlider = currentSlider - 1; 
    slideSlider(prevSlider);
  }
});

btnNext.addEventListener('click', () => {
  if (currentSlider !== 4) { 
    let nextSlider = currentSlider + 1;
    slideSlider(nextSlider);
  }
});

let currentSlider = stringToNum(initialSlider.id);
console.log('original currentSlider', currentSlider);


setInterval(autoScrollSlider, 3000);