// cuando se detecte movimiento de scroll llamamos a la función scrollFunction
/* window.onscroll = function(){scrollFunction()};
 */




/* //función a la que sólo entraremos cuando esta sea llamada desde el evento
function scrollFunction() {
    //si el top del scroll del body es inferior a 80 de posición, 
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        
        for(const item of document.getElementsByTagName("a")){
            item.style.color="rgba(0, 0, 0)";            
            item.style.transition="1s";
        }       
        //asdasdasdasd
        //dasdasdasd
    } else {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0)";

        for(const item of document.getElementsByTagName("a")){
            item.style.color="rgb(180, 180, 180)";
            item.style.transition="1s";
        }
    }

} */