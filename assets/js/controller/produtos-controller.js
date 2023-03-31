//RENDERIZAÇÃO NA TELA

import { produtosService } from "../service/produtos-service.js"

const criaNovoItem = (nome, imagemUrl, preco, categoria, id) => {
    const itemNovoProduto = document.createElement('ul') 
    const conteudo = `
                <li class="categoria__item">
                    <div class="categoria__divisaoBotao"> 
                        <a href="/sucessoProduto.html"><button class="categoria__editar"><i class="fa-solid fa-pen-to-square"></i></button></a>
                        <button class="categoria__excluir" type="button"><i class="fa-solid fa-rectangle-xmark"></i></button>
                    </div>
                    <img class="categoria__imagem" src="${imagemUrl}" alt="imagem">
                    <h3 class="categoria__nome">${nome}</h3>
                    <h3 class="categoria__preco">${preco}</h3>
                    <h3 class="categoria__categoria">#${categoria}</h3>
                </li>
    `
    itemNovoProduto.innerHTML = conteudo;
    itemNovoProduto.dataset.id = id;
    console.log(itemNovoProduto)
    return itemNovoProduto;
}

const produto = document.querySelector('[data-produto]')

produto.addEventListener('click', (evento) => {
    let botaoExcluir = evento.target.className === 'categoria__excluir'
    if(botaoExcluir){
        const itemProduto = evento.target.closest('[data-id]')
        let id = itemProduto.dataset.id
        produtosService.removerProduto(id)
        .then(() => {
            itemProduto.remove()
        })
    }
})

produtosService.listaProdutos()
.then(data => {
    data.forEach(elemento => {
        produto.appendChild(criaNovoItem(elemento.nome, elemento.imagemUrl, elemento.preco, elemento.categoria, elemento.id))
    })
})