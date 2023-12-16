/* Evento para cuando hay selección de contenido en el nav (movil) para plegar el menú */
const contenido = document.getElementsByClassName("inf");
const toggle = document.querySelector('input[name=toggle]');
console.log("dasda")
for(const item of contenido){
    item.addEventListener("click", function(){       
        console.log("dasda") 
        if(toggle){
            toggle.checked=false;
        }
    });
}
