function abrirMenu() {
    document.querySelector(".menu").classList.toggle("aberto");
}
function mostrarMensagem(event) {
    event.preventDefault();

    document.getElementById("mensagem").classList.add("mostrar");

    setTimeout(function() {
        document.getElementById("mensagem").classList.remove("mostrar");
    }, 3000);
}

function abrirModal() {
    document.getElementById("meuModal").classList.add("aberto");
}

function fecharModal() {
    document.getElementById("meuModal").classList.remove("aberto");
}