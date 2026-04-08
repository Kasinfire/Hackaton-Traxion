/*     BUSCADOR DE TARJETAS DE CLIENTES
 */const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".client-card");

buscador.addEventListener("keyup", function () {

let texto = buscador.value.toLowerCase();

tarjetas.forEach(function(card){

let nombre = card.querySelector(".client-card__name").textContent.toLowerCase();

if(nombre.includes(texto)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});


/*     GRAFICA DE BARRAS DE LOS SERVICIOS

 */
let datos = {
transporte:88,
almacen:72,
coordinacion:95,
tecnologia:60,
cliente:80
}

function colorPorcentaje(valor){

if(valor >= 85){
return "#28a745"
}

else if(valor >= 70){
return "#d98a1e"
}

else{
return "#d9381e"
}

}

function animar(){

for(let area in datos){

let barra = document.getElementById(area)
let valor = datos[area]

barra.style.height = valor + "%"
barra.style.background = colorPorcentaje(valor)

barra.querySelector(".porcentaje").innerText = valor + "%"

}

}

window.onload = animar

