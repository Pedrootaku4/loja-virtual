function validaFormulario(){
    var formulario = document.forms['registro'];
    var senha =  formulario['senha'];
    var confirmaSenha = formulario['confirme-senha'];
    var nome = formulario['nome'];
    var contadorDeErros = 0; 
 
    if(nome.value ==='admin') {
        setErro('nome', nome, 'O nome do usuario é inválido');
        addLimpaErrorParaInput(nome);
        contadorDeErros++;
    }

    if (senha.value !== confirmaSenha.value) {
        setErro('confirme-senha', confirmaSenha, 'As senhas não coincidem');
        addLimpaErrorParaInput(confirmaSenha);
        contadorDeErros++;
    }

    if (senha.value.length < 8 ) {
        setErro('senha', senha, 'A senha precisa ter no mínimo 8 caracteres');
        addLimpaErrorParaInput(senha);
        contadorDeErros++;
    }

    if (contadorDeErros > 0) {
        return false;
    }
}

function limpaErro(id){
    var input = document.getElementById(id);
    var menssage = document.getElementsByClassName(`menssage-error ${id}`)[0];
    input.classList.remove('inpute-error');
    menssage.innerHTML = "";
}

function addLimpaErrorParaInput(input) {
    input.addEventListener('input', function (evento) {
    limpaErro(evento.target.id);
    })
}

function setErro(messageClass, input, mensagem = '') {
    var mensagemBox = document.getElementsByClassName(
        `menssage-error ${messageClass}`
        )[0];
        mensagemBox.innerHTML = mensagem;
        input.classList.add('input-error');
        
}