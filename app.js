/* 
AGREGAR TEXTO INICIAL
*/


document.querySelector(".nombre").textContent="Daniel Horna ";
document.querySelector(".descripcion").textContent="Futuro programador Full Stack ";


/* 


ELEMENTOS DE BOTONES 


*/
const botonLinkedin = document.getElementById("btn-linkedin");
const botonGit = document.getElementById("btn-github");
const botonMenu = document.getElementById("btn-menu");

const botonComunitario = document.getElementById("btn-comunitario");
const botonLinktree = document.getElementById("btn-linktree");
const botonInstrumentos = document.getElementById("btn-instrument");


/*





ENLAZAR CADA BOTON A UN LINK _BLANK





*/

botonLinkedin.addEventListener('click', function () {
    window.open("https://www.linkedin.com/in/daniel-enrique-horna-zegarra-a93b85323", "_blank");
});

botonGit.addEventListener('click', function () {
    window.open("https://github.com/danhorz", "_blank");
});


botonComunitario.addEventListener('click', function () {
    window.open("https://danhorz.github.io/practicas/", "_blank");
});

botonLinktree.addEventListener('click', function () {
    window.open("https://danhorz.github.io/perfil-linktree/", "_blank");
});
botonInstrumentos.addEventListener('click', function () {
    window.open("https://danhorz.github.io/instrumentos_page/", "_blank");
});


/* 

CARRUSEL




*/

/* NOMBRES DE LOS ARCHIVOS DE IMG */
const imagenes = ["./assets/p1.jpeg", "./assets/p2.jpeg", "./assets/p3.jpeg"];
let indice = 0;




/* obtner elemto imagen, INDICADORES Y BOTONES PARA CAMBIAR DE IMAGEN */

const botonIzquierda = document.getElementById("boton-izquierda-carrosel");
const botonDerecha = document.getElementById("boton-derecha-carrosel");
const imagenMenu = document.querySelector("#img-project");
const circulo1 = document.getElementById("punto1");
const circulo2 = document.getElementById("punto2");
const circulo3 = document.getElementById("punto3");

// FUNCION PARA MOSTRAR EL ESPACIO EN BLANCO DEL BOTON
function mostrarDiv() {
    const popup = document.getElementById("popup");
    popup.classList.add("show");
    document.body.classList.add("no-scroll"); // Agrega la clase para desactivar el scroll
    /* PARA QUE SE PUEDA DESLIZAR A LA HORA QUE SE ABRA */
    popup.style.overflowY = "scroll";
    popup.style.scrollbarColor = "darkblue"
    /* INICIA CON LA IMAGEN INICIAL UBICADA EN LA POSICION 0 (IMG1) + PONER EL PRIMER PUNTITO EN NEGRO Y EL RESTO EN BLANCO PARA SEÑALAR
    LA PRIMERA IMAGEN COMO ACTIVA */
    imagenMenu.src = imagenes[0];
    circulo1.style.backgroundColor = "black";
    circulo2.style.backgroundColor = "white";
    circulo3.style.backgroundColor = "white";

}

/* CERRAMOS EL DIV EN EL BOTON CERRAR +REMOVER LA CLASE CREADA PARA MOSTRALO */
function cerrarDiv() {
    document.getElementById("popup").classList.remove("show");
    document.body.classList.remove("no-scroll");
}

let contador = 0;
/* REUTILIZACION DE COFIGO EN CASO QUE HAYA UN COLOR ACTIVADO O DESACTIVADO */
function cambiarColorYImagen() {
    if (contador === 0) {
        circulo1.style.backgroundColor = "black";
        circulo2.style.backgroundColor = "white";
        circulo3.style.backgroundColor = "white";
    } else if (contador === 1) {
        circulo1.style.backgroundColor = "white";
        circulo2.style.backgroundColor = "black";
        circulo3.style.backgroundColor = "white";
    } else if (contador === 2) {
        circulo1.style.backgroundColor = "white";
        circulo2.style.backgroundColor = "white";
        circulo3.style.backgroundColor = "black";
    }

    imagenMenu.src = imagenes[contador];
}


//FUNCION CLICK DERECHA

botonDerecha.addEventListener("click", function () {
    contador = (contador + 1) % 3;  // Cambia de 0 a 2 y reinicia

    cambiarColorYImagen();


});

botonIzquierda.addEventListener("click", function () {
    contador = (contador - 1 + 3) % 3;  // Disminuye y vuelve a 2 después de llegar a -1

    cambiarColorYImagen();


});