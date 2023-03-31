//REQUISIÇÕES COM A API

const listaProdutos = () =>{
    return fetch(`http://localhost:3000/produtos`)
    .then(resposta => {
        return resposta.json()
    })
}

const criarProduto = (nome, imagemUrl, preco, categoria) => {
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST',
        headers: { 
            'Content-type' : 'application/json'
        }, 
        body: JSON.stringify ({
            nome:nome,
            imagemUrl: imagemUrl,
            preco: preco,
            categoria: categoria
        })
    })
    .then(resposta => {
        // if(resposta.ok){
            return resposta.body
        // }
        // throw new Error('Não foi possível criar um produto')
    })
}

const removerProduto = (id) => {
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'DELETE' 
    })
    // .then(resposta => {
    //     if(!resposta.ok){
    //         throw new Error('Não foi possível remover um ciente')
    //     }
    // })
}

export const produtosService = {
    listaProdutos,
    criarProduto,
    removerProduto,
}

