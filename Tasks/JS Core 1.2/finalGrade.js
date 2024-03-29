// Реализуйте функцию finalGrade, которая вычисляет итоговую оценку 
// студента на основе двух параметров: оценки за экзамен и количества 
// законченных проектов.

// Функция принимает два аргумента:

// exam — оценка за экзамен, число от 0 до 100; projects — количество 
// проектов, число от 0 и выше. Функция возвращает: число (итоговую оценку).

// Есть четыре возможных итоговых оценки:

// 100, если оценка за экзамен выше 90 или есть больше 10 проектов
// 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
// 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
// 0 в любом другом случае
console.log('finalGrade :>> ', finalGrade(91, 11)); // 100
console.log('finalGrade :>> ', finalGrade(90, 11)); // 90
console.log('finalGrade :>> ', finalGrade(80, 12)); // 90
console.log('finalGrade :>> ', finalGrade(76, 3));  // 75
console.log('finalGrade :>> ', finalGrade(35, 13)); // 0

// * 17.12.2023
function finalGrade(exam, projects) {
	return exam > 90 && projects > 10 ? 100 :
		exam > 75 && projects > 5 ? 90 :
			exam > 50 && projects > 2 ? 75 : 0;
}

//* Old resolution
// function finalGrade(exam, projects){
//     if (exam > 90 || projects > 10) {
//         return 100;
//     }else if (exam > 75 && projects >= 5) {
//         return 90;
//     }else if (exam > 50 && projects >= 2) {
//         return 75;
//     }else {
//         return 0;
//     }
// }