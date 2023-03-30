import { produtosService } from "../service/produtos-service.js";

const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener('submit', (evento)=> {
    evento.preventDefault();

    const nome = evento.target.querySelector('[data-nome]').value;
    const imagemUrl = evento.target.querySelector('[data-url]').value;
    const preco = evento.target.querySelector('[data-preco]').value;
    const categoria = evento.target.querySelector('[data-categoria]').value;

    produtosService.criarProduto(nome, imagemUrl, preco, categoria)
    .then(()=> {
        window.location.href = '/todosProdutos.html'
    })
})