let greeting = document.querySelector(".greeting-wrap");
const greetingBtn = document.querySelector(".greeting-layer__btn");
let greetingTxt = document.querySelector(".greeting-layer__title");


const heroClick = greetingBtn.addEventListener( "click", () => {
  greeting.style.display = "none";
  console.log("hi")
});

const btnPrev = document.querySelector(".scroll-btn--prev").addEventListener("click", () => {
  const left = document.querySelector(".projects__slider").scrollLeft -= 350
  console.log('lol1')
});

const btnNext = document.querySelector(".scroll-btn--next").addEventListener("click", () => {
  const right = document.querySelector(".projects__slider").scrollLeft += 350
  console.log('lol2')
});


const keyPrev = document.querySelector(".scroll-btn--prev").addEventListener("keypress", (event) => {
  if(event.key === "") {

  }
});

const keyNext = document.querySelector(".scroll-btn--next").addEventListener("keypress", (event) => {
  if (event.key === "") {

  }
});

function changeGreeting() {
  greetingTxt.innerHTML = "привет";

}
setInterval(changeGreeting, 2000);