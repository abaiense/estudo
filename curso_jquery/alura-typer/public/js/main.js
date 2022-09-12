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

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function(){
    var cronometroID = setInterval(function(){
        tempoRestante--
        $("#tempo-digitacao").text(tempoRestante);    

        if(tempoRestante < 1){
            campo.attr("disabled", true);

            clearInterval(cronometroID);
        };
    }, 1000);
});