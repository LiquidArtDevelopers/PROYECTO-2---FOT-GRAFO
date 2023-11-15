/* DECLARACIÓN DE VARIABLES */

var numFotos = 12;/* número total de fotos para el slider */
var ordenPrincipal, ordenSiguiente;
var intervalo, temporizador;
var tiempoEspera = 5000;

const flechaIzd = document.getElementById("flechaIzd");
const flechaDer = document.getElementById("flechaDer");
const fotoActiva = document.getElementById("fotoActiva");

/* -----------ACCIÓN DE FLECHAS AL PULSAR, PASAR ADELANTE O ATRÁS EN INFINITO------ */


/* ESCUCHAMOS CLICK EN ELEMENTO FLECHA IZD */
flechaIzd.addEventListener("click", function(){

    /* recogemos el valor String del atributo orden del elemento img con la foto principal */
    ordenPrincipal = fotoActiva.getAttribute("orden");

    /* lo pasamos a número para poder operar */
    ordenPrincipal = Number(ordenPrincipal);

    /* condición para controlar que no se salga del total de fotos */
    if(ordenPrincipal===1){
        /* si el orden actual es 1, y restamos una posición, pasamos al orden 10 */
        ordenSiguiente = numFotos;
    }else{
        /* en caso de cualquier otro orden, restamos una posición de orden */
        ordenSiguiente = ordenPrincipal-1;
    }

    /* cambiamos el SRC de la foto teniendo en cuenta el número que corresponde */
    fotoActiva.src = `./assets/img/slider${ordenSiguiente}.jpg`;
    /* cambiamos el valor del atributo orden */
    fotoActiva.setAttribute("orden", ordenSiguiente);

    /* cuando pulsamos en la flecha, quitamos el temporizador actual y creamos uno nuevo de otros 5seg */
    clearTimeout(temporizador)
    crearIntervalo(tiempoEspera);
})


/* ESCUCHAMOS CLICK EN ELEMENTO FLECHA DER */
flechaDer.addEventListener("click", function(){

    /* recogemos el valor String del atributo orden del elemento img con la foto principal */
    ordenPrincipal = fotoActiva.getAttribute("orden");

    /* lo pasamos a número para poder operar */
    ordenPrincipal = Number(ordenPrincipal);

    /* condición para controlar que no se salga del total de fotos */
    if(ordenPrincipal===numFotos){
        /* si el orden actual es 1, y restamos una posición, pasamos al orden 10 */
        ordenSiguiente = 1;
    }else{
        /* en caso de cualquier otro orden, restamos una posición de orden */
        ordenSiguiente = ordenPrincipal+1;
    }

    /* cambiamos el SRC de la foto teniendo en cuenta el número que corresponde */
    fotoActiva.src = `./assets/img/slider${ordenSiguiente}.jpg`;
    /* cambiamos el valor del atributo orden */
    fotoActiva.setAttribute("orden", ordenSiguiente);

    /* cuando pulsamos en la flecha, quitamos el temporizador actual y creamos uno nuevo de otros 5seg */
    clearTimeout(temporizador)
    crearIntervalo(tiempoEspera);
})



/* -----------------IMAGEN RANDOM CADA VEZ QUE CARGUE A WEB------------- */

/* LLAMAMOS A LA FUNCIÓN RANDOM PARA QUE CARGUE UNA IMAGEN DE LAS EXISTENTES DIFERENTES */
random();


/* FUNCIÓN RANDOM */
function random(){
    //crear un número aleatorio
    let numAleatorio;
    numAleatorio = Number(numAleatorio); /* Pasamos a tipo número */
    numAleatorio = Math.random()*numFotos; /* obtenemos un número entre 1 y 10 (incluyendo decimales) */
    numAleatorio = Math.ceil(numAleatorio) /* redondeamos a número entero el resultado */
    
    fotoActiva.src=`./assets/img/slider${numAleatorio}.jpg` /* asignamos el src con el nuevo número */
    fotoActiva.setAttribute("orden", numAleatorio)
}





/* -----------------CAMBIO AUTOMÁTICO DE IMÁGENES CADA X SEGUNDOS------------- */

crearIntervalo(tiempoEspera);

function crearIntervalo(valorRecibido){
    //en caso de que exista en la variable intervalo un setInterval anterior, lo borramos con clearInterval
    if(intervalo != undefined){
        clearInterval(intervalo)
    }
    //creamos el intervalo en bucle donde ejecutará cada "valor de tiempo" la función random (que lo que hace es elegir un num random del 1 al 10 y mostrar la imagen en grande con dicho número)
    intervalo = window.setInterval(random,valorRecibido)
}