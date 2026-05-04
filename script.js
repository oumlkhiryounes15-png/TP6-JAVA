
let paragraphe = document.getElementById("monParagraphe");

paragraphe.textContent = "Le texte a été modifié";


let div = document.querySelector(".maDiv");


div.addEventListener("click", function() {
  paragraphe.textContent = "Un clic a été détecté";
});
