// Напиши скрипт, который изменяет цвета фона элемента < body > через 
// инлайн стиль при клике на button.change - color и выводит значение 
// цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');

const hexTextEl = document.querySelector('.color');

const bodyEl = document.querySelector('.widget').parentNode;

btnEl.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  hexTextEl.textContent = newColor;
});

