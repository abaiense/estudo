$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria(){

    $("#spinner").toggle();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(() => {
        $("#erro").show();
        setTimeout(function(){
            $("#erro").fadeOut(600);
        }, 2000);
    })
    .always(() => {
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numAleatorio].texto);

    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numAleatorio].tempo);
}

function buscaFrase(data){

    $("#spinner").toggle();

    var fraseID = $("#frase-id").val();
    var dados = { id: fraseID};

    $.get("http://localhost:3000/frases",dados, trocaFrase)
    .fail(() => {
        $("#erro").show();
        setTimeout(function(){
            $("#erro").fadeOut(600);
        }, 2000);
    })
    .always(() => {
        $("#spinner").toggle();
    });

}

function trocaFrase(data){
    var frase = $(".frase");
    
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}

