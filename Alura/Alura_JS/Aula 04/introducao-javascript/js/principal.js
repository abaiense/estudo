var titulo =  document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i]; 

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    if (peso <= 0 || peso >= 1000){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3){
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida){
    
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    
    }
    

    
}



