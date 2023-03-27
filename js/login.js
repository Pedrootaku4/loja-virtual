"user strict";

function validaFormulario(){
    var formulario = document.forms['login'];
    var senha = formulario['senha'];
    var contadorDeErros = 0;

    if(senha.value.length < 8 ){
        setErro(senha, 'Sua senha precisa ter mais de 8 caracteres');
        addLimpaErrorParaInput(senha);
        contadorDeErros++;
    }

    if(contadorDeErros > 0){
        return false;
    }

    return true;

}

function setErro(input, mensagem= 'Vampo inválido.'){
    var messageBox = document.getElementsByClassName(`mensage-error ${input.id}`)[0];
    messageBox.innerHTML = mensagem;
    input.classList.add('input-error');
}

function addLimpaErrorParaInput(input){
    input.addEventListener('input', function(evento){
        limpaErro(evento.target.id)
    });
}

function limpaErro(inputId){
    var mensagemBox = document.getElementsByClassName(`mensage-error ${inputId}`)[0];
    var input = document.getElementById(inputId);
    mensagemBox.innerHTML = "";
    input.classList.remove('input-error');

}