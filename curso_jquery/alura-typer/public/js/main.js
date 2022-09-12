var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});

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
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
        $("#botao-reiniciar").attr("disabled", true);  

        var cronometroID = setInterval(function(){
            tempoRestante--
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
    var frase = $(".frase").text();
    campo.on("input", function(){
    
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
    
        if (digitado == comparavel) {
            campo.removeClass("vermelho")
            campo.addClass("verde");
        } else {
            campo.removeClass("verder")
            campo.addClass("vermelho");
        }
    
    });
};

function removeLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
}

function novaLinha(usuario, palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href","#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Antonio";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
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
