// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const valueEl = document.querySelector('#value');

const decrementEl = document.querySelector('button[data-action="decrement"]');

const incrementEl = document.querySelector('button[data-action="increment"]');

decrementEl.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  return
});

incrementEl.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
  return
});