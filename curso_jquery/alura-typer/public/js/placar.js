$("#botao-placar").click(mostraPlacar);

function removeLinha(event){
    event.preventDefault();

    var linha = $(this).parent().parent();
    
    linha.fadeOut(1000);
    
    setTimeout(() => {
        linha.remove();    
    }, 1000);
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

    $(".placar").slideDown(600);
    scrollPlacar();
}

function mostraPlacar(){
    $(".placar").stop().slideToggle(600)
}

function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;
    $("html, body").animate(
    {
        scrollTop: posicaoPlacar+"px"
    }, 1000);

}