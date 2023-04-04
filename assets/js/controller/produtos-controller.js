//RENDERIZAÇÃO NA TELA

import { produtosService } from "../service/produtos-service.js"

const criaNovoItem = (nome, imagemUrl, preco, categoria, id) => {
    const itemNovoProduto = document.createElement('ul') 
    const conteudo = `
                <li class="categoria__item">
                    <div class="categoria__divisaoBotao"> 
                        <a href="/editarProdutos.html?id=${id}"><i class="fa-solid fa-pen-to-square categoria__editar"></i></a>
                        <a type="button"><i class="fa-solid fa-rectangle-xmark categoria__excluir"></i></a>
                    </div>
                    <img class="categoria__imagem" src="${imagemUrl}" alt="imagem">
                    <h3 class="categoria__nome">${nome}</h3>
                    <h3 class="categoria__preco">${preco}</h3>
                    <h3 class="categoria__categoria">#${categoria}</h3>
                </li>
    `
    itemNovoProduto.innerHTML = conteudo;
    itemNovoProduto.dataset.id = id;
    return itemNovoProduto;
}

const produto = document.querySelector('[data-produto]')

produto.addEventListener('click', async (evento) => {
    let botaoExcluir = evento.target.className === 'fa-solid fa-rectangle-xmark categoria__excluir'
    if(botaoExcluir){
        try{
            const itemProduto = evento.target.closest('[data-id]')
            let id = itemProduto.dataset.id
            await produtosService.removerProduto(id)
            itemProduto.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = '/erro.html'
        }

    }
})

const render = async ()=> {
    try{
        const produtoService =  await produtosService.listaProdutos()
    
        produtoService.forEach(elemento => {
        produto.appendChild(criaNovoItem(elemento.nome, elemento.imagemUrl, elemento.preco, elemento.categoria, elemento.id))
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href = '/erro.html'
    }
}
render()