
const buscador = document.getElementById("buscador");
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