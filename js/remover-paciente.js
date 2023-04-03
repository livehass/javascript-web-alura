//chamamos a classe paciente                               
var pacientes = document.querySelectorAll(".paciente"); 

var tabela = document.querySelector("table");

 tabela.addEventListener("dblclick", function(event){

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