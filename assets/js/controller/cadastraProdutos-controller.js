import { produtosService } from "../service/produtos-service.js";

const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener('submit', async (evento)=> {
    evento.preventDefault();

    try{
        const nome = evento.target.querySelector('[data-nome]').value;
        const imagemUrl = evento.target.querySelector('[data-url]').value;
        const preco = evento.target.querySelector('[data-preco]').value;
        const categoria = evento.target.querySelector('[data-categoria]').value;

        await produtosService.criarProduto(nome, imagemUrl, preco, categoria)
        window.location.href = '/todosProdutos.html'
    }
    catch(erro){
        console.log(erro);
        window.location.href = '/erro.html'
    }

})