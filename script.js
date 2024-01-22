let greeting = document.querySelector(".greeting-wrap");
const greetingBtn = document.querySelector(".greeting-layer__btn");
let greetingTxt = document.querySelector(".greeting-layer__title");


// const heroClick = greetingBtn.addEventListener( "click", () => {
//   greeting.style.display = "none";
//   console.log("hi")
// });

//создаем инстанс обсервер и конструктор IntersectonObserver и нам нужно передать некую коллбек функция и некие опции

//этот блок не работает когда я делаю querySelectoAll и не работает if
// const options = {
// }

// const skillObserver = function (entries, observer){
//     entries.forEach( skill  => {
   
//      console.log(skill);      
//      console.log("done")

//      if(skill.isIntersectin){
//       target.classList.add(".skills__wrap-list_bt")
//       console.log('work')
//      }
//     });
//   };

//   const observer = new IntersectionObserver(skillObserver, options)

//   let target = document.querySelector(".skills__wrap");
//   observer.observe(target)
//до сюда
 
//теперь попробуеи создать еше один intersection
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if(entry.isIntersecting) {
//       entry.target.classList.add('.show')
//       console.log('work')
//     } else {
//       entry.target.classList.remove('.show')
//     }
//   })
// })

// const animItems = document.querySelector('.anim');
// observer.observe(animItems)
// animItems.forEach((el) => observer.observe(el))



const btnPrev = document.getElementById("prev-btn").addEventListener("click", () => {
  const left = document.querySelector(".projects__hr-scroll-slider").scrollLeft -= 350
  console.log('lol1')
});

const btnNext = document.getElementById("next-btn").addEventListener("click", () => {
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

// Я бы сделал массив слов и переменную которая считала с какого индекса надо брать слово.
// сделать функцию которая будет каждые 2сек брать слово с массива и выводить его 

// let i = 0;
// const greet = ['привет', 'hello']

// function changeGreeting() {
//   greetingTxt.innerHTML = greet[i++]
//   //остаток от целочисленного деления от 2
//   i = i % 2
// }
// setInterval(changeGreeting, 2000);

