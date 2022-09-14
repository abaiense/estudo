$("#botao-frase").click(fraseAleatoria);

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

