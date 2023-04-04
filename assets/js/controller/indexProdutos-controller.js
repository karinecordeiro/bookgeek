//RENDERIZAÇÃO NA TELA

import { produtosService } from "../service/produtos-service.js"

const criaNovoItem = (nome, imagemUrl, preco) => {
    const itemNovoProduto = document.createElement('ul') 
    const conteudo = `
                <li class="categoria__itemIndex">
                    <img class="categoria__imagem" src="${imagemUrl}" alt="imagem">
                    <h3 class="categoria__nome">${nome}</h3>
                    <h3 class="categoria__preco">${preco}</h3>
                </li>
    `
    itemNovoProduto.innerHTML = conteudo;
    return itemNovoProduto;
}

const ficcaoC = document.querySelector('[data-produto-ficcao]');
const romanceH = document.querySelector('[data-produto-romanceH]');
const romanceC = document.querySelector('[data-produto-romanceC]');
const fantasia = document.querySelector('[data-produto-fantasia]');
const suspense = document.querySelector('[data-produto-suspense]');

const render =  async () => {
    const produtoService = await produtosService.listaProdutos()

    produtoService.map(elemento => {       
        const produtos = criaNovoItem(elemento.nome, elemento.imagemUrl, elemento.preco)
        if(elemento.categoria === "Ficção Científica"){
            ficcaoC.appendChild(produtos)
        } else if (elemento.categoria === "Romance Histórico") {
            romanceH.appendChild(produtos)
        } else if (elemento.categoria === "Romance Contemporâneo") {
            romanceC.appendChild(produtos)
        } else if (elemento.categoria === "Fantasia") {
            fantasia.appendChild(produtos)
        } else  if (elemento.categoria === "Suspense") {
            suspense.appendChild(produtos)
        }
    })
}

render()
