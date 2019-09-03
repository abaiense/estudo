var titulo =  document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

var tdImc = paciente.querySelector(".info-imc");

if (peso =< 0 || peso >= 1000){
    console.log("Peso Inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura =< 0 || altura >= 3){
    console.log("Altura Inválido");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

if (pesoEhValido && alturaEhValida){

    var imc = peso / (altura * altura);
    tdImc.textContent = imc;

    console.log(imc);
}


