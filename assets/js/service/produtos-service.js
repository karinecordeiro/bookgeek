//REQUISIÇÕES COM A API

const listaProdutos = () =>{
    return fetch(`https://bookgeek.netlify.app/produtos`)
    .then(resposta => {
        return resposta.json()
    })
}

export const produtosService = {
    listaProdutos,
}

