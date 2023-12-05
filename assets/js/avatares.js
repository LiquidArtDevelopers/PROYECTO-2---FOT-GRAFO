/* recogemos en una constante (array) todos los elementos html que tenga como clase imgObjetivo. Habrá tantos como avatares */
const imgObjetivos = document.getElementsByClassName("imgObjetivo")


/* hacemos una iteración para recorrer cada item de la constante, y escuchamos si se hace evento mouseover o mouseout sobre alguno de ellos */
for(const imgObjetivo of imgObjetivos){
    
    imgObjetivo.addEventListener("mouseover", function(){
        imgObjetivo.style.transform="rotate(20deg)";
    })
    
    imgObjetivo.addEventListener("mouseout", function(){
        imgObjetivo.style.transform="rotate(0deg)";
    })
}



