function validaForm(form){
    var valida = false;
    if(form.nome.value.length > 3 && form.nome.value.length <= 15 ){
        var nota = validaNotas([form.querySelectorAll('.nota')]);
        if(nota == 0){
            valida = true;
        }
    }
    console.log(valida);
    return valida;
}

function validaNotas(notas){
    console.log(notas[0][0].value.length)
    var erro = 0;
    notas[0].forEach(function(nota){
        if(nota.value <= 0 || nota.value > 10 ){
            erro += 1;
        }
    })
    console.log(erro)

    return erro;

}