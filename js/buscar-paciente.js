//chamamos o botão adicionar pacientes.
var botaoAdicionar = document.querySelector('#buscar-pacientes');
//evento de click 
botaoAdicionar.addEventListener("click", function(){
    //XMLHttpRequest requisição de dados no js.
    var xhr = new XMLHttpRequest();
    //função que abra a conexão que queremos fazer, tipo "get" para pegar o arquivo
    xhr.open("get", "https://gist.githubusercontent.com/livehass/617db24070179e60029b384dc801240f/raw/6eef6086e6ef767eb1a0fa75532fbe930c3d47e8/pacientes.jason");
    //variavel para manipular o erro ao carregar clientes.
    var erroAjax = document.querySelector("#erro-ajax");
    // quando a "xhr" estiver carregada executa uma função
    xhr.addEventListener("load", function(){
        //deixa o nosso erro invisivel
        erroAjax.classList.add("invisivel");
        //se o codigo for 200 significa que deu tudo ok com a requisição
        if(xhr.status == 200){
             //variavel que recebe as informaçoes de  texto do xhr.
        var resposta = xhr.responseText;
        //"json.parse" tem a função de transformar o json em objeto js.
        var pacientes = JSON.parse(resposta);
        //para cada paciente da tabela usar a função 
        pacientes.forEach(function(paciente) {                  
            AdicionaPacienteNaTabela(paciente);                 
        });
        //caso não tenha ocorrido tudo certo com a  requisição
        }else{
            //add nosso erro na tela e no console.
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

       

    } )
    
    xhr.send();
})
/*
O método send(), do XMLHttpRequest, envia uma requisição para o servidor.
Se a solicitação for assíncrona (que é o padrão), 
esse método retornará assim que a solicitação for enviada e o resultado for entregue usando eventos.
Se a solicitação for síncrona, esse método não retornará até que a resposta chegue.
AJAX requisição de javascript de forma assíncrona
sem travar seu  js, sem ultilizara  o navegador.*/
