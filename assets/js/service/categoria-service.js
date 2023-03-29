const criaNovoItem = (categoria, nome, imagemUrl, preco, id) => {
    const itemNovaCategoria = document.createElement('article') 
    const conteudo = `
            <div class="categoria__divisao">
                <h2 class="categoria__subtitulo">${categoria}</h2>
            </div>
            <ul class="categoria__lista">
                <li class="categoria__item">
                    <img class="categoria__imagem" src="${imagemUrl}" alt="imagem">
                    <h3 class="categoria__nome">${nome}</h3>
                    <h3 class="categoria__preco">${preco}</h3>
                    <h3 class="categoria__codigo">${id}</h3>
                </li>
            </ul>
    `
    itemNovaCategoria.innerHTML = conteudo;
    return itemNovaCategoria;
}

const categoria = document.querySelector('[data-categoria]')


const http = new XMLHttpRequest()

http.open('GET', 'http://localhost:3000/categoria')
http.send()
http.onload = ()=> {
    const data = JSON.parse(http.response)
    data.forEach(elemento => {
        categoria.appendChild(criaNovoItem(elemento.categoria, elemento.nome, elemento.imagemUrl, elemento.preco, elemento.id))
    })
}


