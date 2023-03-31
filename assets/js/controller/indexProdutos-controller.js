//RENDERIZAÇÃO NA TELA

import { produtosService } from "../service/produtos-service.js"

const criaNovoItem = (nome, imagemUrl, preco) => {
    const itemNovoProduto = document.createElement('ul') 
    const conteudo = `
                <li class="categoria__item">
                    <img class="categoria__imagem" src="${imagemUrl}" alt="imagem">
                    <h3 class="categoria__nome">${nome}</h3>
                    <h3 class="categoria__preco">${preco}</h3>
                </li>
            </ul>
    `
    itemNovoProduto.innerHTML = conteudo;
    return itemNovoProduto;
}

const ficcaoC = document.querySelector('[data-produto-ficcao]');
const romanceH = document.querySelector('[data-produto-romanceH]');
const romanceC = document.querySelector('[data-produto-romanceC]');
const fantasia = document.querySelector('[data-produto-fantasia]');
const suspense = document.querySelector('[data-produto-supense]');


produtosService.listaProdutos()
.then(data => {
    data.forEach(elemento => {
        produto.appendChild(criaNovoItem(elemento.nome, elemento.imagemUrl, elemento.preco))
    })
})