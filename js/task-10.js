// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку
// Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр -
//   число.Функция создает столько < div >, сколько указано в amount и
//   добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего
// на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls > input");
const boxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", handleBtnCreate);

btnDestroyEl.addEventListener("click", destroyBoxes);

function handleBtnCreate() {
	const quanity = inputEl.value;
	createBoxes(quanity);
}

// function createBoxes(amount) {
// 	const basicSize = 30;
// 	const fragment = document.createDocumentFragment();
// 	for (let i = 0; i < amount; i += 1) {
// 		const size = basicSize + i * 10;
// 		const div = document.createElement("div");
// 		const color = getRandomHexColor();
// 		div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color}; )`;
// 		console.log(fragment.appendChild(div));
// 	}
// 	boxesEl.appendChild(fragment);
// }

function createBoxes(amount) {
	const basicSize = 30;
	const markup = [];
	for (let i = 0; i < amount; i += 1) {
		const size = basicSize + i * 10;
		const div = document.createElement("div");
		const color = getRandomHexColor();
		div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color}; )`;
		markup.push(div);
	}
	boxesEl.append(...markup);
}

function destroyBoxes() {
	boxesEl.innerHTML = "";
	inputEl.value = "";
}
