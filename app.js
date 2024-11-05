const botonLinkedin=document.getElementById("btn-linkedin");
const botonGit=document.getElementById("btn-github");
const botonMenu=document.getElementById("btn-menu");

//Enlazar linkedin

botonLinkedin.addEventListener('click',function()
{
    window.open("https://www.linkedin.com/in/daniel-enrique-horna-zegarra-a93b85323", "_blank");
});

botonGit.addEventListener('click',function()
{
    window.open("https://github.com/danhorz", "_blank");
});


    function mostrarDiv() {
        document.getElementById("popup").classList.add("show");
        document.body.classList.add("no-scroll"); // Agrega la clase para desactivar el scroll
    }

    function cerrarDiv() {
        document.getElementById("popup").classList.remove("show");
        document.body.classList.remove("no-scroll");
    }
