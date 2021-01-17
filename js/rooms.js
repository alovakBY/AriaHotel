
function CreateMenuSlider (a, b, c) {
	for (let i = 0; i<a.length; i++) {
		let div = document.createElement("div");
		div.className = c;
		div.setAttribute("data-number", i);
		a[i].setAttribute("data-number", i);
		b.appendChild(div);
	}
}


/* Слайдер комнат страниц Room1.html, Room2.html, Suite.html*/
	
const rMenuRooms = document.querySelector(".main-room-slider-menu");
const rMenuRoomsDiv = document.getElementsByClassName("main-room-slider-menu-div");
const rRoom = document.querySelectorAll(".main-room-slider-line-img");
const rRoomsLine = document.querySelector(".main-room-slider-line");
const touch = document.querySelector(".main-room-slider");


let l = 0;
CreateMenuSlider(rRoom, rMenuRooms, "main-room-slider-menu-div");

/* Выполнение кода в зависмости от ширины экрана */

if (document.documentElement.clientWidth > 970) {
	for (let i = 0 ; i<rMenuRoomsDiv.length; i++) {
		if (i === 0) {
			rMenuRoomsDiv[i].classList.add("activ-rooms-menu");
		} else {
			rMenuRoomsDiv[i].classList.add("inactiv-rooms-menu");}
};

	rMenuRooms.addEventListener("click", function (e) {

		if (e.target.classList.contains("main-room-slider-menu")) 

		return

		rRoomsLine.style.transform = "translateX(" + (-(e.target.dataset.number) * rRoomsLine.offsetWidth) + "px)";
		
		for (let i = 0 ; i<rMenuRoomsDiv.length; i++) {
			if (rMenuRoomsDiv[i].classList.contains("activ-rooms-menu")) {
				rMenuRoomsDiv[i].classList.remove("activ-rooms-menu");
				rMenuRoomsDiv[i].classList.add("inactiv-rooms-menu");
			}
		};
		
		e.target.classList.add("activ-rooms-menu");
		e.target.classList.remove("inactiv-rooms-menu");
	});
	

} else {
	for (let i=0; i<rRoom.length; i++) {
		console.log(rRoom[i]);
		l = l + rRoom[i].offsetWidth;
	}

	touch.addEventListener("click", function (e) {
		rRoomsLine.style.transform = "translateX(" + ((-e.target.dataset.number - 1) * rRoomsLine.offsetWidth) + "px)";
		

		if (rRoomsLine.style.transform == "translateX(-"+ l +"px)") {
			rRoomsLine.style.transform = "translateX(0px)";
		}
		
	});
};
