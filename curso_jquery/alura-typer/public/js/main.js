var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();

    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });

    $(".tooltip").tooltipster({
        trigger: 'custom'
    });
});

function atualizaTempoInicial(tempo){
    $("#tempo-digitacao").text(tempo);
}

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
};

function inicializaContadores(){
    campo.on("input", function(){
        var conteudo = campo.val();
    
        var qtdCaractere = conteudo.length;
        /* var qtdPalavras = conteudo.split(" ").length; */
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
    
        $("#contador-palavras").text(qtdPalavras);
        $("#contador-caracteres").text(qtdCaractere);
    });
};

function inicializaCronometro() {
    campo.one("focus", function(){
        var tempoRestante = $("#tempo-digitacao").text();
        $("#botao-reiniciar").attr("disabled", true);  

        var cronometroID = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante); 
    
            if(tempoRestante < 1){
                clearInterval(cronometroID);

                finalizaJogo();
            };
        }, 1000);
    });    
};

function finalizaJogo(){
    campo.attr("disabled", true);
    $("#botao-reiniciar").attr("disabled", false);
    campo.addClass("campo-desativado");

    inserePlacar();
};

function inicializaMarcadores(){
    campo.on("input", function(){
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
    
        if (digitado == comparavel) {
            campo.removeClass("vermelho");
            campo.addClass("verde");
        } else {
            campo.removeClass("verder");
            campo.addClass("vermelho");
        }
    
    });
};

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    
    campo.removeClass("campo-desativado");
    campo.removeClass("verde");
    campo.removeClass("vermelho");

    inicializaCronometro();
};
