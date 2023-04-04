//chamamos a classe paciente                               
var pacientes = document.querySelectorAll(".paciente"); 
//chamamos a tabela 
var tabela = document.querySelector("table");
 //evento de duplo click   
 tabela.addEventListener("dblclick", function(event){
    // var alvoEvento = event.target;          somente vistual 
    //var paiDoAlvo = alvoEvento.parentNode; Tr = paciente = remover

    //adicionamos a classe do css de opacidade, para fazer uma transição ao tirar o item
    event.target.parentNode.classList.add("fadeOut"); 

    setTimeout(function(){                              
        event.target.parentNode.remove();           //setTimeout para adicionar um delay a ação.      
    },500);                                        // nesse caso de "500ms"
         
 })

/*
diferença entre um "this" e um "target" é que o target 
escuta o elemento que está dentro da tabela 
dentro do elemento pai, que no caso seria a tabela em si
sendo as li, se ultilizarmos "this" nesse caso apagaria
a tabela toda e não só um objeto 

usamos a variavel em um for each, com uma função anonima 

pacientes.forEach(function(paciente){

    passamos o evento de click duplo, para outra função anonima
    
    paciente.addEventListener("dblclick", function(){
        
        console.log("fui clicado com duplo click");
        
        this.remove();
    });
}); 
*/