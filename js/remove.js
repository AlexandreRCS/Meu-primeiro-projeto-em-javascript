var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener('click',function(mode){
    selecionaAluno(mode);  
})


tabela.addEventListener('dblclick', function(evento){
    removeSelecinadoDoAluno(evento);
})

function selecionaAluno(evento){
    console.log(evento)
    var aluno = evento.target.parentNode;
    aluno.classList.add('seleciona-aluno');
    return aluno;
}

function removeSelecinadoDoAluno(evento){
    var aluno = evento.target.parentNode;
    aluno.classList.remove('seleciona-aluno');
}