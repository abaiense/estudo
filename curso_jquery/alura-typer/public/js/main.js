var frase = $(".frase").text();

var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");

campo.on("input", function(){

    var conteudo = campo.val();

    var qtdCaractere = conteudo.length;
    /* var qtdPalavras = conteudo.split(" ").length; */
    var qtdPalavras = conteudo.split(/\S+/).length - 1;

    $("#contador-palavras").text(qtdPalavras);
    $("#contador-caracteres").text(qtdCaractere);
});