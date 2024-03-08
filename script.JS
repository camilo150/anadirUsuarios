let personas=[]

function capturarDatos(){
    console.log("capturando datos");
    let persona = {
        nombre: document.getElementById("nombre").value,
        gmail: document.getElementById("gmail").value,
        telefono: document.getElementById("telefono").value,
        ciudad: document.getElementById("ciudad").value,
        fecha: document.getElementById("fecha").value,

    };
   personas.push(persona)
   mostrarCards()
}
function mostrarCards(){
document.getElementById("cards").innerHTML="";
personas.map(function(persona){
let card= document.createElement("section")
let nombre=document.createElement("p")
let correo= document.createElement("p")
let telefono=document.createElement("p")
let fecha=document.createElement("p")
let ciudad=document.createElement("p")
nombre.textContent= persona.nombre
correo.textContent= persona.correo
telefono.textContent= persona.telefono
fecha.textContent= persona.fecha
ciudad.textContent= persona.ciudad
card.append(nombre,ciudad,correo,telefono,fecha)
document.getElementById("cards").append(card)

})


    
}