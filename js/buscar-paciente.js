//chamamos o botão adicionar pacientes.
var botaoAdicionar = document.querySelector('#buscar-pacientes');
//evento de click 
botaoAdicionar.addEventListener("click", function(){
    //XMLHttpRequest requisição de dados no js.
    var xhr = new XMLHttpRequest();
    //função que abra a conexão que queremos fazer, tipo "get" para pegar o arquivo
    xhr.open("get", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    // quando a "xhr" estiver carregada executa uma função
    xhr.addEventListener("load", function(){
        //variavel que recebe as informaçoes de  texto do xhr.
        var resposta = xhr.responseText;
        //"json.parse" tem a função de transformar o json em objeto js.
        var pacientes = JSON.parse(resposta);
        //para cada paciente da tabela usar a função 
        pacientes.forEach(function(paciente) {
            AdicionaPacienteNaTabela(paciente);
        });

    } )

    xhr.send();
})