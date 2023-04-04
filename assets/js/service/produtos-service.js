//REQUISIÇÕES COM A API

const listaProdutos = () =>{
    return fetch(`http://localhost:3000/produtos`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os produtos')
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
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um produto')
    })
}

const removerProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
    .then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover um produto')
        }
    })
}

const expecificarProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível expecificar o produto')
    })
}
const atualizarProduto = (id, imagemUrl, categoria, nome, preco)=>{
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify ({
            imagemUrl: imagemUrl,
            categoria: categoria,
            nome:nome,
            preco: preco
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar o produto')
    })
}

export const produtosService = {
    listaProdutos,
    criarProduto,
    removerProduto,
    expecificarProduto,
    atualizarProduto
}

