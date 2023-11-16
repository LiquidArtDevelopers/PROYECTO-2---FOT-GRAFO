/* recogemos en una constante (array) todos los elementos html que tenga como clase imgObjetivo. Habrá tantos como avatares */
const objetivos = document.getElementsByClassName("imgObjetivo")


/* hacemos una iteración para recorrer cada item de la constante, y escuchamos si se hace evento mouseover o mouseout sobre alguno de ellos */
for(const objetivo of objetivos){
    objetivo.addEventListener("mouseover", function(){
        objetivo.style.transform="rotate(20deg)";
    })
    
    objetivo.addEventListener("mouseout", function(){
        objetivo.style.transform="rotate(0deg)";
    })
}


