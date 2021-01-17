	/* Функция, которая создает кружков навигации столько, сколько у нас будет картинок */

function CreateMenuSlider (a, b, c) {
	for (let i = 0; i<a.length; i++) {
		let div = document.createElement("div");
		div.className = c;
		div.setAttribute("data-number", i);
		a[i].setAttribute("data-number", i);
		b.appendChild(div);
	}
}
	
	/* Слайдер HOMEPAGE */

	const imgsTitle = document.querySelectorAll(".home-page-slider");
	const menuImage = document.querySelector(".home-page-menu-slider");
	
	/* Создаем кружки навигации для слайдера HOMEPAGE*/
	
	CreateMenuSlider(imgsTitle, menuImage,"menuImageDiv");
	
	/* Даем последнемуму кружку активный класс */
	
	const btn = document.querySelectorAll(".menuImageDiv");
	btn[btn.length-1].className = "menuImageDivActiv";
	
	
	/* Обработчик события(клик) на кружки слайдера HOMEPAGE и интервал на автоматическое перелистывание*/
	
	function timer() {
	
		for (let i = 0; i < btn.length; i++) {
		
			if  (btn[i] == btn[btn.length-1] &&  btn[i].className == "menuImageDivActiv") {
					btn[0].className = "menuImageDivActiv"
					btn[i].className = "menuImageDiv"
					break
			} else if (btn[i].className == "menuImageDivActiv") {
					btn[i].className = "menuImageDiv";
					btn[i+1].className = "menuImageDivActiv";
					break
				}
		}
	
		for ( let i = 0; i< imgsTitle.length; i++) {
			imgsTitle[i].style.opacity = 0;
			for ( let i = 0; i < btn.length; i++){
				if (btn[i].dataset.number == i && btn[i].className == "menuImageDivActiv") {
					imgsTitle[i].style.opacity = 1;
				}
			}
				
		}
	}
	
	let SI = setInterval ( timer, 4000); 
	
	
	function slide (a) {
		for (let i = 0; i<btn.length; i++) {
			btn[i].className = "menuImageDiv";
		}
		
		a.className = "menuImageDivActiv";
		
		for (let i = 0; i<imgsTitle.length; i++) {
			imgsTitle[i].style.opacity = 0;
			if (a.dataset.number == i) {
				imgsTitle[i].style.opacity = 1;
			}
		}
	
		clearInterval (SI)
		SI = setInterval ( timer, 5000); 
	}
	
	
	menuImage.addEventListener("click", function (e)  {
	
		if (e.target.className === menuImage.className) return
		slide(e.target)
	})
	
	/* Слайдер комнат главной страницы*/
		
	const menuRooms = document.querySelector(".rooms-rooms-nav");
	const menuRoomsDiv = document.getElementsByClassName("rooms-rooms-nav-div");
	const room = document.querySelectorAll(".rooms-room");
	const text = document.querySelectorAll(".rooms-rooms-text h4");
	const roomsLine = document.querySelector(".rooms-rooms-line");
	/* const roomsImg = document.querySelectorAll(".rooms-rooms-img");
	const roomsText = document.querySelectorAll(".rooms-rooms-text"); */
	
		function restart() {
			for (let i = 0; i<menuRoomsDiv.length; i++){
						if (i === 0) {
							menuRoomsDiv[i].classList.add("activ-rooms-menu")
						} else 
						{menuRoomsDiv[i].classList.add("inactiv-rooms-menu")}
					}
				
					menuRooms.addEventListener("click", function (e)  {
						if (e.target.classList.contains("rooms-rooms-nav")) 
						return
						roomsLine.style.left = (-(e.target.dataset.number) * room[0].offsetWidth) + "px";
				
						for (let i = 0; i<menuRoomsDiv.length; i++) {
							if (menuRoomsDiv[i].classList.contains("activ-rooms-menu")) {
								menuRoomsDiv[i].classList.remove("activ-rooms-menu");
								menuRoomsDiv[i].classList.add("inactiv-rooms-menu");
							}
						}
				
						e.target.classList.add("activ-rooms-menu");
						e.target.classList.remove("inactiv-rooms-menu");
					})
		} 
	
		CreateMenuSlider(room, menuRooms, "rooms-rooms-nav-div");
		
		for (let i = 0; i<text.length; i++) {
			let x = text[i].textContent;
			menuRoomsDiv[i].textContent = x;
		}
		
		restart();
	
		for (let i = 0; i<room.length; i++)  {
			room[i].addEventListener ("click", function (e)  {
				e.currentTarget.firstElementChild.classList.toggle("hover-img");
				e.currentTarget.lastElementChild.classList.toggle("hover-text");
			})
		}