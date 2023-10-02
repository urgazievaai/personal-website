let greeting = document.querySelector(".greeting-wrap");
const greetingBtn = document.querySelector(".greeting-layer__btn");
let greetingTxt = document.querySelector(".greeting-layer__title");
let animItems = document.querySelectorAll("._anim-items");

// const heroClick = greetingBtn.addEventListener( "click", () => {
//   greeting.style.display = "none";
//   console.log("hi")
// });

//проверяем на наличие элементов, поскольку  queryselectorAll возвращает список узлов из элементов, мы проверяем их с помощью for
if(animItems.length > 0) {  
  window.addEventListener('scroll', animOnscroll)
//
  function animOnscroll() {
    for(let index = 0; index < animItems.length; index++){
  //получаем каждый элемент из массива     
      const animItem = animItems[index];
  //получаем высоту объекта     
      const animItemHeight = animItem.offsetHieght;
  //получаем позицию объекта относительно вверха, тоесть на сколько объект находится ниже вверха страницы 
      const animItemOffset = offset(animItem).top;
  //тут пишем коефициент с какого уровня видения начинать анимацию 
      const animStart = 4;

//настройка момента старта анимации
      //с высоты окна браузера отнимаем высоту объекта и делим на наш коефициет
      let animStartPoint = window.innerHeight -  animItemHeight / animStart;
    //в случае если высота анимируемого объекта выше высоты окна браузера  
      if(animItemHeight > window.innerHeight) {
        animStartPoint = window.innerHeight - window.innerHeight / animStart 
      }

    //если кол-во пикселей прокрученный в окне больше высоты объекта относительно окна минус точка старта и кол-во пикселей прокрученный в окне меньше высоты объекта относительно окна плюс высота объекта то вызываем класс анимации    
      if((scrollY > animItemOffset - animStartPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('._activ');
      } else {
        animItem.classList.remove('._activ');
      }
    }
  } 
// получаем корректное значение высоты страницы относительно объекта
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  animOnscroll();
}


const btnPrev = document.querySelector(".projects__hr-scroll-btn_prev").addEventListener("click", () => {
  const left = document.querySelector(".projects__hr-scroll-slider").scrollLeft -= 350
  console.log('lol1')
});

const btnNext = document.querySelector(".projects__hr-scroll-btn_next").addEventListener("click", () => {
  const right = document.querySelector(".projects__hr-scroll-slider").scrollLeft += 350
  console.log('lol2')
});


// const keyPrev = document.querySelector(".scroll-btn--prev").addEventListener("keypress", (event) => {
//   if(event.key === "") {

//   }
// });

// const keyNext = document.querySelector(".scroll-btn--next").addEventListener("keypress", (event) => {
//   if (event.key === "") {

//   }
// });

//Я бы сделал массив слов и переменную которая считала с какого индекса надо брать слово.
// сделать функцию которая будет каждые 2сек брать слово с массива и выводить его 

// let i = 0;
// const greet = ['привет', 'hello']

// function changeGreeting() {
//   greetingTxt.innerHTML = greet[i++]
//   //остаток от целочисленного деления от 2
//   i = i % 2
// }
// setInterval(changeGreeting, 2000);

