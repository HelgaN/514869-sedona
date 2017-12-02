var link = document.querySelector(".button-search-hotels");
var popup = document.querySelector(".modal-show");
var close = document.querySelector(".button-close");
var form = popup.querySelector("form");
var enter = popup.querySelector("[name=enter]");
var exit = popup.querySelector("[name=exit]");
var grownups = popup.querySelector("[name=grownups]");
var children = popup.querySelector("[name=children]");

link.addEventListener("click", function(evt){
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.add("modal-container");
});

close.addEventListener("dblclick", function(evt){
evt.preventDefault();
popup.classList.remove("modal-container");
popup.classList.add("modal-show");
});

form.addEventListener("submit", function (evt) {
 if (!enter.value || !exit.value || !grownups.value || !children.value) {
 evt.preventDefault();
 alert("Необходимо указать период пребывания в гостинице и количество посетителей!");
} else {
  localStorage.setItem("grownups", grownups.value);
  localStorage.setItem("children", grownups.value);
}
 });
