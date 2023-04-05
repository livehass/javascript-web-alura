//chama botão do html
var botaoAdicionar = document.querySelector("#adicionar-paciente"); 
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    // pegando o valor do formulario
    var form = document.querySelector("#form-adiciona"); 
    
    // criando variaveis com os  valores internos do formulario
    var paciente = obtemPacienteDoFormulario(form);   
  
     //variavel de erro 
     var erros = validaPaciente(paciente);
        console.log(erros);
    // quando botão clicado compara se altura é valida
    if(erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    }
    //chamamos a função. add paciente a  tabela
    AdicionaPacienteNaTabela(paciente);
    
    // reseta o formulario, deixa em branco para colocar outro paciente.
    form.reset(); 
    // criando uma variavel para pegar novamente o ul para apagar seu conteudo
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = ""; // colocamos vazio para ficar em branco a ul
    
});
function AdicionaPacienteNaTabela(paciente){
    //criando uma nova tabela "TR"    
    var pacienteTr = montaTr(paciente);
    //Adiciona o novo pacienteTr dentro da tabela
    var tabela = document.querySelector("#tabela-pacientes");
    //coloca  o paciente tr na  tabela
    tabela.appendChild(pacienteTr);
}
// função de erros que  recebe o array de erros
function exibeMensagemDeErro(erros){  // colocamos dentro da funcão o innerHTML para que limpe a ul apos adicionar usuario
    var ul = document.querySelector("#mensagens-erro"); // variavel para editarmos usando innerHTML
    
    //propriedade innerHTML permite controlar o elemento dentro do html, está em branco para resetar
    //innerHTML é uma propriedade, não uma função
    //então ela recebe o novo conteúdo, ou seja, utilizamos um sinal de igual (=) 
    ul.innerHTML = ""; 

    erros.forEach(function(erro){                       
        var li = document.createElement("li");         
        li.textContent = erro;                      
        ul.appendChild(li);
    });    
}
// criamos um objeto paciente para ultilizarmos ele em outras partes do codigo
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome:    form.nome.value,
        peso:    form.peso.value,
        altura:  form.altura.value,
        gordura: form.gordura.value,
        imc:     calculaImc(form.peso.value, form.altura.value)
    }
        return paciente;
 
}
// criamos uma função para criar uma tr e reutilizar o codigo
function montaTr(paciente){
    // cria a tr da td do paciente
    var pacienteTr = document.createElement("tr");
    //adiciona classe paciente
    pacienteTr.classList.add("paciente");

    // variaveis retornam da montaTD
    var nomeTd      = montaTd(paciente.nome,"info-nome");
    var pesoTd      = montaTd(paciente.peso, "info-peso");
    var alturaTd    = montaTd(paciente.altura, "info-altura");
    var gorduraTd   = montaTd(paciente.gordura, "info-gordura");
    var imcTd       = montaTd(paciente.imc, "info-imc");
    
    //appendChild ou coloque como filho, vamos pegar a tabela, paciente "tr" e adicionar os seus filhos as "Td"
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);              // retorno da função calcula imc
    
    return pacienteTr;
}
// criamos um função para criar uma td com os dados, e atribuir uma classe;
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}
//função para validar o paciente
function validaPaciente(paciente){
// array de erros   
    var erros = [];
    
    if(!validaPeso(paciente.peso)) erros.push("Peso é invalido");   
    if(!validaAltura(paciente.altura))erros.push("Altura é invalido");
    if(paciente.nome.length == 0)erros.push("Nome não pode ser em branco");
    if(paciente.gordura.length == 0)erros.push("Gordura não pode ser em branco");
    if(paciente.peso.length == 0)erros.push("Pesó não pode ser em branco");
    if(paciente.altura.length == 0)erros.push("Altura não pode ser em branco");
    return erros;   
}

