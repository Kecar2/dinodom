function divClicado() {
    console.log("Me has clicado, pero ahora estoy en dinoDom JS");
}
// Cread un función que si la invoco, me oculta el dinoseto del DOM

function ocultarDinoseto() {

// 1. querySelector obtener el dinoseto del DOM
    document.querySelector("#dinoseto").style.display = "none";
    
}

function set_background() {
    myBody = document.getElementsByTagName('body')[0];
    myBody.style.background = "#0080ff"; 
}

let botonCielo = document.querySelector("#pintar");
botonCielo.onclick = set_background;

function ponHuevo() {
    myDiv = document.getElementsByTagName('div')[0];
}

// Asociar evento click a un elemento del DOM
let botonDinoseto = document.querySelector("#dinoBoton");

// 1. Selecciono el elemento del DOM
// 2. Establecemos su propiedad onmouseclick; con la función que debe ejecutar
botonDinoseto.onclick = ocultarDinoseto;


// Usar addEventListener para asociar el evento click al título de la página

let titulo = document.querySelector("#title");
titulo.addEventListener("click", function () {
    console.log("Has hecho click en el titulo");
})

titulo.addEventListener("click", function () {
    console.log("Yo tambien me ejecuto");
});

// Queremos mostrar por consola, las teclas que el usuario pulsa
document.body.addEventListener("keyup", function(event){
    console.log("tecla pulsalda! " + event.key);
});

document.querySelector("#nuevo-huevo").addEventListener("click", function(){

    let huevo = document.createElement('img');
    huevo.src = "./img/dinohuevo.png";

    huevo.id = Math.random();

    huevo.addEventListener("dblclick", function(event){
        console.log("Has hecho dlb click encima de un huevo");
        console.log(event.target.id);

        event.target.src = "./img/eclosion.png"
    })
    
    document.querySelector("#dinoseto").appendChild(huevo);

});

// Recorrer todas las <p> y les voy añadir un evento click

let allParagraphs = document.querySelectorAll("p");

allParagraphs.forEach(nodo => {
   // asociar un evento click en cada uno de los nodos. Quiero mostrar por consola el .textContent de cada nodo cuando hagamos click en el
    nodo.addEventListener("click", function(event){
        console.log(event.target.textContent);
    });

});



