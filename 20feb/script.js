const titulo= document.getElementById("titulo");
console.log(titulo);

const carta=document.querySelector(".card");  //devuelve le primero de la lista
console.log(carta)

const divs= document.querySelectorAll("div");
console.log(divs);

//cambiar el contendio del texto
 const parrafo = document.getElementById('parrafoprueba')
 parrafo.textContent="Parrafo Modificado"
//cambiar todos los div por una etiqueta nueva
 divs.forEach(div=>{
     const nuevoElemento=document.createElement("p")
     nuevoElemento.textContent="Nuevos elementos de parrafo"
     div.replaceWith(nuevoElemento)
 })
 const hipervinculo = document.querySelector(".card a")
 const input= document.querySelector(".card input")
 hipervinculo.setAttribute("href","https://www.google.com") //cambiar atributo
 hipervinculo.textContent= "ir a pagina"

const boton= document.querySelector("button")

boton.addEventListener("click",() =>{
    alert("hiciste click")
})


// titulo.style.color="red"
titulo.setAttribute("style","color:red" )   //¿el programa como sabe que titulo es un id?

/*CLASSLIST*/

