var menu_button = document.querySelector(".main-nav__open");
var menu = document.querySelector(".main-nav__close");

// отлавливает событие
menu_button.addEventListener("click", function(event) {
    if (menu.classList.contains("main-nav__close--show")) {
        // отмена действия по умолчанию
        event.preventDefault();
        // вывод в консоль
        console.log("клик таки");
        // без точки, Карл, ибо этот метод работает только с классами
        menu.classList.remove("main-nav__close--show");
    }
    else {
        event.preventDefault();
        menu.classList.add("main-nav__close--show");
    }
});