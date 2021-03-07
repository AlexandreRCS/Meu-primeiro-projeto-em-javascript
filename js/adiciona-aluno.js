var adicionar = document.querySelector('.adicionar');
var tabela = document.querySelector('#tabela-alunos');


adicionar.addEventListener("click", function(event){
    event.preventDefault();
    var formulario = document.querySelector('.adiciona-aluno');
    var alunoForm = obterDadosDoFormulario(formulario);
    var alunoTr = montaTr(alunoForm);
    tabela.appendChild(alunoTr);
    formulario.reset();
    var aluno = [alunoTr];
    adicionaMedia(aluno);
    console.log(aluno);
})


function obterDadosDoFormulario(form){
    var aluno = {
        nome: form.nome.value,
        primeiraNota: form.primeira.value,
        segundaNota: form.segunda.value,
        terceiraNota: form.terceira.value,
        quartaNota: form.quarta.value,
        media: '',
        situacao: '',
    }
    return aluno;
    
}

function calculaMediaForm(notas){
    notas.forEach(function(media){
        
    });
}


function montaTr(conteudo){
    var alunoTr = document.createElement('tr');
    alunoTr.classList.add('alunos');
    alunoTr.appendChild(montaTd(conteudo.nome, 'info-nome'));
    alunoTr.appendChild(montaTd(conteudo.primeiraNota, 'info-nota'));
    alunoTr.appendChild(montaTd(conteudo.segundaNota, 'info-nota'));
    alunoTr.appendChild(montaTd(conteudo.terceiraNota, 'info-nota'));
    alunoTr.appendChild(montaTd(conteudo.quartaNota, 'info-nota'));
    alunoTr.appendChild(montaTd(conteudo.media, 'info-media'));
    alunoTr.appendChild(montaTd(conteudo.situacao, 'info-situacao'))
    return alunoTr
    
}


function montaTd(tr, classe){
    var alunoTd = document.createElement('td');
    alunoTd.classList.add(classe);
    alunoTd.textContent = tr
    return alunoTd

}

