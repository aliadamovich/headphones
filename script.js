"use strict"

//*МЕНЮ БУРГЕР=================
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
const buyButton = document.querySelector('.header__button');


document.addEventListener('click', menu);

function menu(event) {
	if (event.target.closest('.menu__icon')) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		buyButton.classList.toggle('_active');
	}
	if (!event.target.closest('.menu__icon')) {
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
		buyButton.classList.remove('_active');
	}
}



//*===СОБЫТИЕ НА КНОПКУ BUY И ИНФО=========================
buyButton.addEventListener('click', function(event) {
	const choose = document.querySelector('.choose')
	window.scrollTo({
		top: choose.offsetTop,
		behavior: 'smooth'
	})
})

const infoButton = document.querySelector('.header__info');
const sideOriginal = document.querySelector('.side__title');

if (infoButton && sideOriginal) {
	infoButton.addEventListener('click', function(event) {
		console.log("Click event triggered");
		sideOriginal.scrollIntoView({
			block: 'start',
			behavior: 'smooth',
		});
	})
}


//*============================


//Получаем кнопки в переменную. а также все элементы которые будут меняться 
const chooseColor = document.querySelectorAll('.choose__card');
const contentItem = document.querySelectorAll('.cover__item');

//навешиваем событие клик на все кнопки ( с помощью цикла forEach)
chooseColor.forEach(function(item) {
	item.addEventListener('click', open)
})

function open(event) {
	const target = event.currentTarget; //получаем кнопку на которую нажали
	const dataButton = target.dataset.button; //получаем дата атрибут активной кнопки
	//получаем все элементы у которых класс совпадает с дата атрибутом активной кнопки
	const activeItem = document.querySelectorAll(`.${dataButton}`) 


	//в ф-ии у всех кнопок убираем класс эктив
	chooseColor.forEach(function(item) {
		item.classList.remove('choose__card--active')
	})
	//а у той, на которую нажали (currentTarget) - добавляем
	target.classList.add('choose__card--active') 

	//отбираем у всех элементов класс эктив
	contentItem.forEach(function(item) {
		item.classList.remove('cover__item--active')
	})

	//добавляем эктив только тем элементам, у которых такой же класс как у активной кнопки
	activeItem.forEach(function (item) {
		item.classList.add('cover__item--active')
	})

}

//!===============
const paraph = document.querySelectorAll('.anim-paraph');
const title = document.querySelectorAll('.cover__title');

// paraph.forEach((item) => {
// 	console.log(item.offsetParent);
// 	console.log(item.offsetTop);
// })
// // console.log(window.innerHeight)
// let windowCenter = (window.innerHeight / 3) + window.scrollY;
// console.log(windowCenter)

// document.addEventListener('DOMContentLoaded', () => {
	
// 	function scrollAnim() {
// 	//вычисляем динамическую середину окна браузера - размер окна деленный на 2 + кол-во пикселей
// 	//прокрученных на данный момент (чтобы центр окна поспевал за нами)
// 		let windowCenter = (window.innerHeight / 2) + window.scrollY;

// 		//Для каждого из элементов вычисляем точку когда начинает действовать анимация:
// 		// расстояние сверху до эл-та + его размер пополам (в середине объекта)
// 		paraph.forEach(el => {
// 			// let scrollOffset = el.offsetTop + el.offsetHeight / 2;
// 			let scrollOffset = el.offsetTop;

// 			if (windowCenter >= scrollOffset) {
// 				el.classList.add('anim')
// 			} else {
// 				el.classList.remove('anim')
// 			}
// 		})

// 	}
// 	scrollAnim();
// 	window.addEventListener('scroll', scrollAnim)

// })



//мой код
// window.addEventListener('scroll', scroll)

// function scroll() {

// 	paraph.forEach((item) => {
// 		let animPoint = item.offsetTop - item.offsetHeight;

// 		//вычисляем динамическую середину окна браузера - размер окна деленный на 2 + кол-во пикселей
// 		//прокрученных на данный момент (чтобы центр окна поспевал за нами)
// 		let windowCenter = (window.innerHeight / 2) + window.scrollY;
// 		// if (item.offsetHeight > item.offsetTop) {
// 		// 	animPoint = item.offsetTop;
// 		// };
// 		if (windowCenter >= item.offsetTop) {
// 			item.classList.add('anim')
// 		}
// 		else {
// 			//прописываем условие от повторов ( если класса NO нет, то убираем active)
// 			if (!item.classList.contains('anim-no')) {
// 				console.log("Removing anim class");
// 				item.classList.remove('anim')
// 			}
// 		}
// 	})
// }


//интерсекшн

const myObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		
		if (entry.isIntersecting) {
			entry.target.classList.add('anim')
			
			observer.unobserve(entry.target)
		} 
		// else {
		// 	entry.target.classList.remove('anim')
		// }
	});
}, 
{ threshold: 0.5 } 
);

paraph.forEach(item => {
	myObserver.observe(item);
})
//анимация при загрузке страницы ( не доделана)
const header = document.querySelectorAll('.header__anim');
document.addEventListener('DOMContentLoaded', function() {
	header.forEach((item) => {
		item.classList.add('animate')
	})
})


//другой код паралакс анимация 
// let btn = document.querySelector('a');
// btn.addEventListener('click', e => {
// 	// let rect = e.target.getBoundingClientRect();
// 	// let x = e.clientX * 3 - rect.left;
// 	// btn.style.setProperty('--x', x + 'deg');
// 	console.log(this); 
// })




let btn = document.querySelector('a');
btn.addEventListener('click', function(event) {
	// let rect = e.target.getBoundingClientRect();
	// let x = e.clientX * 3 - rect.left;
	// btn.style.setProperty('--x', x + 'deg');
	console.log(this);
})