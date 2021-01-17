/* Бургер меню */

document.querySelector(".header-nav-burger").addEventListener ("click", function () {
	document.querySelector(".header-nav-burger-line").classList.toggle("activ")
	document.querySelector(".header-nav").classList.toggle("activ")
	document.querySelector("body").classList.toggle("lock")
})
	
document.querySelector(".header-nav").addEventListener("click", function () {
	document.querySelector(".header-nav-burger-line").classList.toggle("activ")
	document.querySelector(".header-nav").classList.toggle("activ")
	document.querySelector("body").classList.toggle("lock")
})