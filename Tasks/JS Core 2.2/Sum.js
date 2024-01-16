// Реализуйте функцию sum, которая принимает неограниченное количество
// чисел в качестве аргументов и возвращает их сумму. Вызов функции без
// аргументов должен вернуть 0. В случае, если аргумент не является числом
// и не может быть приведен к таковому, нужно проигнорировать его. Если
// его можно привести к числу, то приведите его и прибавьте, как и обычное число.

//* 24.12.23
const sum = (...rest) => {
	return rest.filter(x => Number(x)).reduce((acc, el) => acc += el, 0);
}
//* Old resolution
// const sum = (...rest) => {
//     let arr = Array.from(rest);
//     arr = arr.filter(element => Number(element));
//     return arr.reduce((a, i) => a + i, 0);
// };


console.log(
	sum(1, 2, 3, 4, 5, 6),
); // 21
console.log(
	sum(-10, 15, 100),
); // 105
console.log(
	sum(),
); // 0
console.log(
	sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),
); // 11. Прим: true было приведено к 1 (см. преобразование типов в js)

console.log(sum(NaN, undefined, null, 'fwqf', true, {}, 22));