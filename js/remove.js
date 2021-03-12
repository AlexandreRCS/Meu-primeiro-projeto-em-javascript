var tabela = document.querySelector("#tabela-alunos");
var lixeira = document.querySelector(".lixeira");
var seleciona = document.querySelector('.selecionar');
var sair = document.querySelector('.sair');

seleciona.addEventListener('click',function(){
    sair.classList.remove('invisivel');
    lixeira.classList.remove('invisivel')
    tabela.classList.add('tabela-seleciona');
    tabela.addEventListener('click', function(evento){
        var aluno = selecionaAluno(evento);
        console.log(evento)
         console.log(aluno.classList.length)
         if(aluno.classList.length > 1){
             removerAluno(aluno)
         }
         
        
        
    })
    tabela.addEventListener('dblclick',function(evento){
        removeSelecinadoDoAluno(evento)
    })
})

sair.addEventListener('click',function(evento){
    tabela.classList.remove('tabela-seleciona');
    sair.classList.add('invisivel');
    lixeira.classList.add('invisivel');
})



function selecionaAluno(evento){
    var aluno = evento.target.parentNode;
    aluno.classList.add('seleciona-aluno');
    return aluno;
}

function removeSelecinadoDoAluno(evento){
    var aluno = evento.target.parentNode;
    aluno.classList.remove('seleciona-aluno');
}


function removerAluno(aluno){
    console.log(aluno)
    lixeira.addEventListener('click',function(){
        var verificaRemover = aluno.classList;
        if(verificaRemover[1] === 'seleciona-aluno'){
            swal("Aluno removido com sucesso!", {
                icon: "success",
                buttons: false,
                timer: 900,
              });
            aluno.remove();
            aluno.classList.remove('seleciona-aluno')
        }else{
            swal("Selecione um aluno", {
                icon: "error",
                buttons: false,
                timer: 900,
              });
        }
        
    })
}