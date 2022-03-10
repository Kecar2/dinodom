let areaDblClick = document.querySelector("#dobleClick");
let areaEventoMouse = document.querySelector("#eventoMouse");

areaDblClick.addEventListener("dblclick", function () {
    document.body.classList.toggle("fondo");   
});

areaEventoMouse.addEventListener("mouseenter", function () {
    areaEventoMouse.style.border = "5px solid red";  
});

areaEventoMouse.addEventListener("mouseout", function (){
    areaEventoMouse.style.border = "none";
});

