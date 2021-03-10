var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener('click',function(mode){
    console.log(tabela)
    selecionaAluno(mode);  
})


function selecionaAluno(evento){
    console.log(evento)
    var aluno = evento.target.parentNode;
    aluno.classList.add('seleciona-aluno');
    return aluno;
}