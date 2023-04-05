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
            //expressão regular, no nosso caso usada para procurar nomes no filtro
            //RegExp é um objesto epecial do js para essa função
            // o "i" "case insensitive" diz se queremos ignorar letras maiusculas ou não, no nosso caso "sim"
            var expressao = RegExp(this.value,"i"); 
                                                                
            // compara se o nome é diferente do valor que é digitado
            //a expressão "test" testa se no nome ira ter ou não uma string, e retorna um valor              
            if(!expressao.test(nome)){ 
                    //se o nome for diferente do digitado, remove da tela.
                    paciente.classList.add("invisivel");    
            }else{  //se não remove a classe invisivel do "css display none"
                    paciente.classList.remove("invisivel");    
            }
        }
        // no caso da condição do for acima não ser verdadeira
    }else{
         
        for(var i = 0; i < pacientes.length ; i++){ 
            var paciente =  pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

      
}); 