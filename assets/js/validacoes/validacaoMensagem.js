const formulario = document.getElementById('formulario');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.input__erro');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    nomeValidado() 
    mensagemValidado() 
    window.location.href = '/sucessoMensagem.html'
})

function inserirErro(index){
    campos[index].style.borderBottom = '2px solid #b92424';
    spans[index].style.display = 'block';
}
function removerErro(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nomeValidado(){
    if(campos[0].value.length < 3){
        inserirErro(0);
    } else{ 
        removerErro(0);
    }
}
function mensagemValidado(){
    if(campos[1].value.length < 3 || campos[1].value.length >= 300){
        inserirErro(1);
    } else{ 
        removerErro(1);
    }
}
