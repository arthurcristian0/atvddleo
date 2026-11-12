const caixas = document.querySelectorAll(".caixa");

const principal = document.querySelector("#principal");
const secundario = document.querySelector("#secundario");

caixas.forEach(function(caixa) {

    caixa.addEventListener("click", function() {

        caixa.classList.remove("azul");
        caixa.classList.add("verde");

    });

});

secundario.addEventListener("click", function() {

    caixas.forEach(function(caixa) {

        caixa.classList.remove("verde");
        caixa.classList.remove("azul");

    });

});

principal.addEventListener("click", function() {

    caixas.forEach(function(caixa) {

        caixa.classList.remove("verde");
        caixa.classList.add("azul");

    });

});