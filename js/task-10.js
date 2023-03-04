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

function getRandomRgb() {
	const red = Math.round(Math.random(0, 1) * 255);
	const green = Math.round(Math.random(0, 1) * 255);
	const blue = Math.round(Math.random(0, 1) * 255);

	return `rgb(${red},${green},${blue})`;
}

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls > input");
const boxesEl = document.querySelector("#boxes");
const limitMin = Number(inputEl.min);
const limitMax = Number(inputEl.max);
const step = Number(inputEl.step);

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
	amount = inputEl.value;
	if (amount >= limitMin && amount <= limitMax) {
		const arrBoxes = [];
		const initialSizeBox = 30;
		for (let i = limitMin - 1; i <= amount; i += step) {
			let size = initialSizeBox + i * 10;
			const divHtml = `<div style="width: ${size}px; height:${size}px; background-color: ${getRandomRgb()}"></div>`;
			arrBoxes.push(divHtml);
		}
		boxesEl.insertAdjacentHTML("beforeend", arrBoxes.join(""));
	} else {
		alert("Your number is out of limits");
	}
}

// btnCreateEl.addEventListener("click", handleBtnCreate);

// function handleBtnCreate() {
// 	const quanity = inputEl.value;
// 	createBoxes(quanity);
// }

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

// function createBoxes(amount) {
// 	const basicSize = 30;
// 	const markup = [];
// 	for (let i = 0; i < amount; i += 1) {
// 		const size = basicSize + i * 10;
// 		const div = document.createElement("div");
// 		const color = getRandomHexColor();
// 		div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color}; )`;
// 		markup.push(div);
// 	}
// 	boxesEl.append(...markup);
// }

function destroyBoxes() {
	boxesEl.innerHTML = "";
	inputEl.value = "";
}
