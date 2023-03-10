// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener('blur', (event) => {
//   if (event.target.value.trim().length === Number(inputEl.getAttribute('data-length'))) {
//     event.target.classList.add('valid');
//     event.target.classList.remove('invalid');
//   } else {
//     event.target.classList.add('invalid');
//     event.target.classList.remove('valid');
//   }
// });

const classToggle = (first, second) => {
	inputEl.classList.add(first);
	inputEl.classList.remove(second);
};

inputEl.addEventListener("blur", () => {
	inputEl.value.trim().length === Number(inputEl.getAttribute("data-length"))
		? classToggle("valid", "invalid")
		: classToggle("invalid", "valid");
});
