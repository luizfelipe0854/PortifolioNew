const fadeMarriott = document.getElementById("fade-marriott");
const modalMarriott = document.getElementById("modal-marriott");
const fecharmodalMarriott = document.getElementById("fechar-modal-marriott");
const abrirmodalMarriott = document.getElementById("abrir-modal-marriott");

const toggleModal = () => {
    modalMarriott.classList.toggle("hide");
    fadeMarriott.classList.toggle("hide");
}

[abrirmodalMarriott, fecharmodalMarriott, fadeMarriott].forEach((elemento) => {elemento.addEventListener("click", toggleModal)})

const fadeContato = document.getElementById("fade-contato");
const modalContato = document.getElementById("modal-contato");
const fecharmodalContato = document.getElementById("fechar-modal-contato");
const abrirmodalContato = document.getElementById("abrir-modal-contato");

const toggleModalContato = () => {
    modalContato.classList.toggle("hide");
    fadeContato.classList.toggle("hide");
}

[abrirmodalContato, fecharmodalContato, fadeContato].forEach((elemento) => {elemento.addEventListener("click", toggleModalContato)})


