// Показати вікно з написом "Вітаю!" після завантаження сторінки
window.addEventListener('load', function() {
  alert('Вітаю!');
});

// Обробник події для елементу з класом 'gamePad', виводить повідомлення про улюблену гру
var gamepad2 = document.querySelector('.gamePad');
gamepad2.addEventListener('click', function(){
  alert("Моя улюблена гра - Фіфа");
});

// Обробник події для елементу з класом 'boOk', виводить повідомлення про улюблену книжку
var book2 = document.querySelector('.boOk');
book2.addEventListener('click', function(){
  alert("Улюблена книжка - Рейнджер");
});

// Обробник події для елементу з класом 'musIc', виводить повідомлення про улюбленого виконавця
var musIc2 = document.querySelector('.musIc');
musIc2.addEventListener('click', function(){
  alert("Виконавець який мені подобається - YakTak");
});

// Обробник події для елементу з класом 'tV', виводить повідомлення про найкращий фільм
var tV2 = document.querySelector('.tV');
tV2.addEventListener('click', function(){
  alert("Найкращий фільм - Прокляття Монахині");
});

// Обробник події для елементу з класом 'bold1', змінює колір тексту при наведенні
let hello1 = document.querySelector('.bold1');
var originalColor; 

hello1.addEventListener('mouseenter', function(){
  originalColor= hello1.style.color;
  hello1.style.color = 'blue';
})

hello1.addEventListener('mouseleave', function(){
  hello1.style.color = originalColor; 
})

// Аналогічні обробники подій для елементів з класами 'bold2' і 'bold3'
let education1 = document.querySelector('.bold2');
var originalColor; 

education1.addEventListener('mouseenter', function(){
  originalColor= education1.style.color;
  education1.style.color = 'blue';
})

education1.addEventListener('mouseleave', function(){
  education1.style.color = originalColor; })

let factsfrommylife1 = document.querySelector('.bold3');
var originalColor; 

factsfrommylife1.addEventListener('mouseenter', function(){
  originalColor= factsfrommylife1.style.color;
  factsfrommylife1.style.color = 'blue';
})
let hobby1 = document.querySelector('.bold4');
var originalColor; 

hobby1.addEventListener('mouseenter', function(){
  originalColor= hobby1.style.color;
  hobby1.style.color = 'blue';
})

hobby1.addEventListener('mouseleave', function(){
  hobby1.style.color = originalColor; })

factsfrommylife1.addEventListener('mouseleave', function (){
  factsfrommylife1.style.color = originalColor; })

// Додатковий код, який визначає і використовує кнопку для прокрутки вверх сторінки
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Показати або приховати кнопку при прокрутці
  window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  });

  // Прокрутити сторінку вверх при кліку на кнопку
  scrollToTopBtn.addEventListener("click", () => {
      document.body.scrollTop = 0; // Для Safari
      document.documentElement.scrollTop = 0; // Для інших браузерів
  });
});


  