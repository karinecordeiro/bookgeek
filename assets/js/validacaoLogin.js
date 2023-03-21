const formulario = document.getElementById('formulario');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.mensagem__erro');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$/;

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidado();
    senhaValidada();
})

function inserirErro(index){
    campos[index].style.borderBottom = '2px solid #b92424';
    spans[index].style.display = 'block';
}
function removerErro(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function emailValidado(){
    if(!emailRegex.test(campos[0].value)){
        inserirErro(0);
    } else{ 
        removerErro(0);
    }
}
function senhaValidada(){
    if(!senhaRegex.test(campos[1].value)){
        inserirErro(1);
    } else{ 
        removerErro(1);
        
    }
}
