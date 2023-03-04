// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет инлайн-стиль
// span#text обновляя свойство font-size. В результате при перетаскивании
// ползунка будет меняться размер текста.

const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

function getChangeTextSize() {
	textEl.style.fontSize = `${inputEl.value}px`;
}

getChangeTextSize();

inputEl.addEventListener("input", () => {
	getChangeTextSize();
});
