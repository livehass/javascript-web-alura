//chamamos o input filtro.
var  campoFiltro = document.querySelector("#filtrar-tabela");
//o evento "input" vai ser chamado ao digitar.
campoFiltro.addEventListener("input", function(){           
         console.log(this.value);
    // var paciente pegamos o array de todos os pacientes.
    var pacientes = document.querySelectorAll(".paciente");
    
    //se for o valor digitado for maior que zero.
    if(this.value.length > 0){ 
        console.log("digitado")
        // o for irá percorrer todos os pacientes.
        for(var i = 0; i < pacientes.length ; i++){
            // pegamos o paciente especifico e colocamos no var paciente.
            var paciente =  pacientes[i];
            // pegamos o nome do paciente da td.
            var tdNome = paciente.querySelector(".info-nome");
            // extraimos o conteudo da  td ou seja o nome.
            var nome = tdNome.textContent;
            // if compara se o nome é diferente do valaor que é digitado
            if(nome != this.value){                 
                    paciente.classList.add("invisivel");    //se o nome for diferente do digitado, remove da tela.
            }else{
                    paciente.classList.remove("invisivel"); //se não remove a classe invisivel do "css display none"   
            }
        }
    }else{ 
        for(var i = 0; i < pacientes.length ; i++){ // no caso da condição do for acima não ser verdadeira
            var paciente =  pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

      
}); 