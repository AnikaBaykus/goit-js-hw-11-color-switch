// ? Есть массив цветов в hex - формате и кнопки Start и Stop.
// ? Напиши скрипт, который после нажатия кнопки Start,
// ? раз в секунду меняет цвет фона body на случайное значение
// ? из массива используя инлайн - стиль.При нажатии на кнопку Stop,
// ? изменение цвета фона должно останавливаться.
// !Учти, на кнопку Start можно нажать бесконечное количество раз.
// !Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// ? Для генерации случайного числа(индекс элемента массива цветов),
// ? используй функцию randomIntegerFromInterval.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnEl = document.querySelector('[data-action="start"]');
const stopBtnEl = document.querySelector('[data-action="stop"]');
const bodyEl = document.querySelector('body');

startBtnEl.addEventListener('click', onLaunchesColorSwitch);
stopBtnEl.addEventListener('click', onStopColorSwitch);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalChangeColor = null;

function onLaunchesColorSwitch() {
  if (!intervalChangeColor) {
    intervalChangeColor = setInterval(() => {
      const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
      bodyEl.style.backgroundColor = randomColor ;
    }, 1000)
  };
};

function onStopColorSwitch() {
  clearInterval(intervalChangeColor);
};

