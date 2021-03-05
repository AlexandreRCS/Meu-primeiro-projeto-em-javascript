var aluno = document.querySelector('.alunos');
var notas = aluno.querySelectorAll('.info-nota');
var resulado =  aluno.querySelector('.info-media');
console.log(notas)

var media = calculaMedia(aluno);


function calculaMedia(aluno){
    var notas = aluno.querySelectorAll('.info-nota');
    var soma = 0;
    notas.forEach(function(notas){
        var nota = notas.textContent;
        soma = parseInt(soma) + parseFloat(nota);
    });

   return  soma / 4;
}


console.log(media)

resulado.textContent = media;





