const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")
burger.onClick = function(){
menu.classlist.toggle("visible")
}