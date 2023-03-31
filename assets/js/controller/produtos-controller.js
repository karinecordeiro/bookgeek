//RENDERIZAÇÃO NA TELA

import { produtosService } from "../service/produtos-service.js"

const criaNovoItem = (nome, imagemUrl, preco, categoria) => {
    const itemNovoProduto = document.createElement('ul') 
    const conteudo = `
                <li class="categoria__item">
                <div class="categoria__divisaoBotao"> 
                        <i class="fa-solid fa-pen-to-square categoria__editar"></i>
                        <i class="fa-solid fa-rectangle-xmark categoria__excluir"></i>
                    </div>
                    <img class="categoria__imagem" src="${imagemUrl}" alt="imagem">
                    <h3 class="categoria__nome">${nome}</h3>
                    <h3 class="categoria__preco">${preco}</h3>
                    <h3 class="categoria__categoria">#${categoria}</h3>
                </li>
            </ul>
    `
    itemNovoProduto.innerHTML = conteudo;
    return itemNovoProduto;
}

const produto = document.querySelector('[data-produto]')

produtosService.listaProdutos()
.then(data => {
    data.forEach(elemento => {
        produto.appendChild(criaNovoItem(elemento.nome, elemento.imagemUrl, elemento.preco, elemento.categoria))
    })
})