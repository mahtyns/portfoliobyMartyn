const card = document.querySelector(".projectInner");

function fliper() {
    card.classList.toggle('flip');
 
}

card.addEventListener("click", fliper); 