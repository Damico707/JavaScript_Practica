const likear= document.querySelector("#likeBtn");
const estado = document.querySelector("#estado")

function darclick(){
    likear.classList.toggle("liked") //si la clase esta, la quita y si no esta, la agrega

    if(likear.classList.contains("liked")){ //le pregunto si tiene la accion de la clase
        likear.textContent="Te gusta"
        estado.textContent="Estado: Te gusta" 
    }
    else{
        likear.textContent="<3"
        estado.textContent="Estado: No te gusta"
    }
}

likear.addEventListener("click",darclick);