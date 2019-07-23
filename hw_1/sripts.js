// Задача №1
function isTimeValid(hour, minute){
	if (hour >=0 && hour <=23 && minute >=0 && minute <=59) {
		return true;
	} else {
		return false;
	};
};
console.log(isTimeValid(23, 40));
console.log(isTimeValid(24, 60));
console.log(isTimeValid(25, 70));

// Задача №2
function addMinutes(hours, min, addMin){
	var newMin = (min + addMin) % 60;
	var newHours = (hours + Math.floor((min + addMin)/60)) % 24;
		if (newHours <= 9) {
			newHours = '0' + newHours;
		};
		if (newMin <= 9) {
			newMin = '0' + newMin;
		};
			return newHours + ":" + newMin;
}
console.log(addMinutes(23, 40, 83));
console.log(addMinutes(10, 30, 23));

// Задача №3
var month = +prompt('Введите номер месяца', );
if (month <= 12) {
	if (month == 12 || month >=1 && month <=2) {
		alert( 'Зима' );
	};
	if (month >= 3 && month <= 5) {
		alert( 'Весна' );
	};
	if (month >= 6 && month <= 8) {
		alert( 'Лето' );
	};
	if (month >= 9 && month <= 11) {
		alert( 'Осень' );
	};
} else {
	alert( 'Месяцев в году 12 а не ' +  month);
};

// Задача №4
var days = ['День','Дня','Дней'];
var day = +prompt('Введите номер дня', );

function declension(day, days) {
	var result;
	var count = day % 100;
		if (count >= 5 && count <= 20) {
			result = days['2'];
		} else {
		count = count % 10;
			if (count == 1) {
				result = days['0'];
			} else if (count >= 2 && count <= 4) {
				result = days['1'];
			} else {
				result = days['2'];
			}
	    }
    return result;
}
alert (day + ' ' + declension(day, days) );

//Задача №5
var n = +prompt('Введите число для подсчёта суммы', );
function summ(n){
    var result = 0;
	while(n){
	    result += n--;
	}
    return result;
}
console.log(summ(n));

//Задача №5 через рекурсию
var recursion = function sum(a) {
	if (a === 1) {
		return 1;
	} else {
		return a + sum(--a);
	}    
}
var summ = +prompt('Введите число для подсчёта суммы', );
console.log(recursion(summ));

//Задача №6
var multiplicationTable = +prompt('Введите число для умножения', );
	for (var i = 1; i <= 10; i++) {
		result =  multiplicationTable * i;
		console.log(multiplicationTable + '*' + i + '=' + result);
	};

//Задача №7, круг
var xT = +prompt('Введите координаты точки x', ); 
var yT = +prompt('Введите координаты точки y', );
var x0 = 3, y0 = 5;
var R = 4*4;

function isPointInCircle() {
	return ((xT - x0)*(xT - x0)) + ((yT - y0)*(yT - y0));
}
var circle = isPointInCircle(xT, yT, x0, y0);

if (circle <= R) {
	alert('Точка ' + xT + ':' + yT + ' входит внутрь круга');
} else {
	alert('Точка ' + xT + ':' + yT + ' не входит внутрь круга');
};

//Задача №7, прямоугольник
function graf(x, y) {

	var p1 = -0.6 * x + 3;
	var p2 = 0.4 * x - 2;
	var p3 = -1.5 * x - 12;
	var p4 = 0.5 * x + 4;

	if (y <= p1 && y >= p2 && y >= p3 && y <= p4) {
		return true;
	} else {
		return false;
	};
};
console.log(graf(-7, 0));
console.log(graf(-2, 1));
console.log(graf(-8, 1));