// Урок с кодом
// Throttle
// Реализуйте функции throttle.

// Примечание: из-за особенностей тестирования реализация new Date() изменена так, что изначальная текущая дата (new Date() или Date.now()) будет равна нулю и будут вручную увеличиваться в тестах. Учтите это, если будете использовать дату в реализации функций.

// Примечание: функции, полученные из throttle, должны передавать полученные аргументы и контекст вызова в оригинальную функцию

// Примечание: функция throttle может быть реализована без использования таймеров

// Функция должна принимать функцию и время задержки, а возвращать модифицированную функцию. Возвращенная функция должна следовать следующим правилам:

// Функция throttle должна вызывать функцию и запускать таймер, равный времени задержки, в течение которого функция не может быть вызвана заново. Throttle необходим для того, чтобы обеспечить возможность вызова функции не чаще, чем указанное время задержки. Если время задержки равно 500 мс, то при вызове функции, возвращенной из throttle, каждые 100 мс 10 раз подряд функция будет вызвана лишь три раза:
// первый вызов функции на 0мс (первая попытка вызова функции после 0 мс задержки),
// второй на 500 мс (пятая попытка вызова функции после 500 мс задержки)
// и третий на 1000 мс (десятая попытка вызова функции после 1000 мс задержки).
// Пример throttle:


//* 01.01.24
const throttle = (fn, throttleTime) => {
	let isThrottle = false;
	let savedArgs;
	let savedThis;
	function wrapper() {
		if (isThrottle) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}
		fn.apply(this, arguments);
		isThrottle = true;
		setTimeout(() => {
			isThrottle = false
			if (savedArgs) {
				wrapper.apply(savedThis, savedThis);
				savedThis = savedArgs = null;
			}
		}, throttleTime);
	}
	return wrapper;
}
// * Old resolution
// const throttle = (fn, throttleTime) => {
//   let isThrottle = false;

//   function wrapper() {
//     if (isThrottle) {
//       return;
//     }

//     fn.apply(this, arguments);
//     isThrottle = true;

//     setTimeout(function () {
//       isThrottle = false;
//     }, throttleTime);
//   }

//   return wrapper;
// };

// Вариант, при котором гарантировано обрабатывается последний вызов функции.
// const throttle = (fn, throttleTime) => {
//   let isThrottle = false;
//   let savedArgs;
//   let savedThis;

//   function wrapper() {


//     if (isThrottle) {
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     fn.apply(this, arguments);
//     isThrottle = true;

//     setTimeout(function(){
//       isThrottle = false;
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, throttleTime);
//   }

//   return wrapper;
// };


let counter = 0;
const fn = () => {
	counter++;
};

const throttledFn = throttle(fn, 500); // функция может быть вызвана не чаще, чем раз в 500 мс

const intervalId = setInterval(throttledFn, 100);
setTimeout(() => clearInterval(intervalId), 1000); // удаляем интервал через 10 вызовов

console.log(counter); // 3