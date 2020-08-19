var input = document.querySelector("#input");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var addBtn = document.querySelector(".add");

//funkcja usuwająca elementy, jeżeli element span zostanie kliknięty
function deleteElementFromList() {
	for (let span of spans) {
		span.addEventListener("click", function () {
			span.parentElement.remove();
			//zapisywanie
			localStorage.setItem('shopList', ul.innerHTML);
		});
	}
}

//funkjca ładująca listę jeśli lista istnieje w localStorage
function loadList() {
	if (localStorage.getItem('shopList')) {
	//pobranie listy jeśli istnieje w localStorage
		ul.innerHTML = localStorage.getItem('shopList');
		deleteElementFromList();
	}
}

//dodanie nowego elementu do listy poprzez klawisz enter
input.addEventListener("keypress", function (keyPressed) {
	if (keyPressed.which === 13) {

		//stworzenie elementu li i span, gdy enter kliknięty
		var li = document.createElement("li");
		var spanElement = document.createElement("span");
		var icon = document.createElement("i");
		icon.className = "icona";

		//jeżeli input jest pusty lub spacja to wyswietlam alert
		if (input.value == '' || input.value == ' ' || input.value == '  ' || input.value == '   ' || input.value == '    ') {
			alert("Napisz coś przed dodaniem do listy!");
			input.value = '';
		} else {

			//dodanie nowego elementu
			//zmienna newElement przechowuje elementy z pola input
			var newElement = document.getElementById("input").value;
			icon.classList.add('fas', 'fa-times');
			spanElement.append(icon);
			spanElement.className = "one";

			ul.appendChild(li).append(spanElement, newElement);
			ul.insertBefore(li, ul.childNodes[0]); //dodanie kolejnego elementu jako pierwsze dziecko
		}
		input.value = ''; //zresetowanie inputa

		//automatyczne zapisywanie po dodaniu
		localStorage.setItem('shopList', ul.innerHTML);
		deleteElementFromList();
	}

});

//jeżeli klikniemy na element li to zostanie on przekreślony
ul.addEventListener('click', function (ev) {
	if (ev.target.tagName == 'LI') {
		ev.target.classList.toggle('checked'); //przy kliknięciu nadaje klase checked i obsługuje to w css
		//zapisywanie
		localStorage.setItem('shopList', ul.innerHTML);
	}
}, false);

//zapis listy do localStorage po to by móc z niej później korzystać
saveBtn.addEventListener('click', function () {
	localStorage.setItem('shopList', ul.innerHTML);

});

//usunięcie listy poprzez kliknięcie klawisza usun
clearBtn.addEventListener('click', function () {
	ul.innerHTML = "";
	localStorage.removeItem('shopList', ul.innerHTML);
});

//funkcja dodająca nowy element i przypisana do klawisza dodaj
function addElement() {

	var li = document.createElement("li");
	var spanElement = document.createElement("span");
	var icon = document.createElement("i");
	icon.className = "icona";

	//jeżeli input jest pusty lub spacja to wyswietlam alert
	if (input.value == '' || input.value == ' ' || input.value == '  ' || input.value == '   ' || input.value == '    ') {
		alert("Napisz coś przed dodaniem do listy!");
		input.value = '';
	} else {

		//dodanie nowego elementu
		//zmienna newElement przechowuje elementy z pola input
		var newElement = document.getElementById("input").value;
		icon.classList.add('fas', 'fa-times');
		spanElement.append(icon);
		spanElement.className = "one";

		ul.appendChild(li).append(spanElement, newElement);
		ul.insertBefore(li, ul.childNodes[0]); //dodanie kolejnego elementu jako pierwsze dziecko
	}
	input.value = ''; //zresetowanie inputa

	//automatyczne zapisywanie po dodaniu
	localStorage.setItem('shopList', ul.innerHTML);
	deleteElementFromList();
}


deleteElementFromList();

loadList();
