var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso   = paciente.querySelector(".info-peso");
    var peso     = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura   = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); // retorno da função valida apeso
    var alturaEhValida = validaAltura(altura); // retorno da função valida altura

    // verificamos se o peso é valido ou não, usamos o "!" para inverter de valido para invalido
    if(!pesoEhValido){ 
        console.log("Peso inválido");
       pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido")
    }
    if(!alturaEhValida){
        console.log("Altura inválida")
       alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido")
    }
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}
function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
        console.log("passou por aqui true peso");
    }else{
        return false;
        console.log("passou por aqui false peso");
    }
}
function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
        console.log("passou por aqui true altura");
    }else{
        return false;
        console.log("passou por aqui false altura");
        
    }
}
// cria uma função para calcular o imc, assim conseguimos exportar essa função para outras areas do nosso codigo
function calculaImc(peso,altura){           // função recebe peso e altura como parametros
    var imc = 0;                            // iniciamos o imc com 0;
    imc = peso / (altura * altura);         // calculamos o imc, recebendo os parametros
    return imc.toFixed(2);                  // e a função retorna o valor de pc para ser usado
                                            // o .toFixed(2) é usado para limitar a casa decimal
}

