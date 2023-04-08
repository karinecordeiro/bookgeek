//RENDERIZAÇÃO NA TELA

import { produtosService } from "../service/produtos-service.js"

const pegaURL = new URL (window.location) 
const id = pegaURL.searchParams.get('id')

const produto = document.querySelector('[data-produto]')

produtosService.expecificarProduto(id)

.then(data => {
    produto.innerHTML += `
        <article class="produto__artigo">
            <div class="produto__divisao">
                <img class="produto__imagem" src="${data.imagemUrl}" alt="img-produto" width="150px">
            </div>
            <div  class="produto__divisao">
                <h2 class="produto__nome">${data.nome}</h2>
                <h3 class="produto__preco">${data.preco}</h3>
                <h3 class="produto__categoria">${data.categoria}</h3>
                <p class="produto__texto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptatibus magnam quia tempora ab veniam consequatur nam non obcaecati quas voluptatum totam voluptatem eos eligendi repudiandae necessitatibus mollitia, sed recusandae. Repellendus, autem necessitatibus illo veritatis quo reprehenderit, amet fugiat ipsa dolor quasi eligendi excepturi dolorem. Incidunt ut optio placeat. Quod dicta quibusdam harum consequuntur. Placeat id sapiente non recusandae! Impedit illum debitis repudiandae cupiditate adipisci, deleniti libero alias incidunt dicta ullam eaque odio, inventore dolores et asperiores praesentium distinctio! Repudiandae et minima natus animi fugiat at rem doloribus deserunt dolores.</p>
                <h4 class="produto__codigo">#000${data.id}</h4>
                <a class="produto__link" href="index.html"> voltar a página inicial</a>
            </div>
        </article>
    `
})

