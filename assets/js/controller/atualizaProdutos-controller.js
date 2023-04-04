import { produtosService } from "../service/produtos-service.js";

(async()=> {
    const pegaURL = new URL (window.location) 

    const id = pegaURL.searchParams.get('id')

    const inputUrl = document.querySelector('[data-url]');
    const inputCategoria = document.querySelector('[data-categoria]');
    const inputNome = document.querySelector('[data-nome]');
    const inputPreco = document.querySelector('[data-preco]');

    try{
        const dados = await produtosService.expecificarProduto(id)
        inputUrl.value = dados.imagemUrl;
        inputCategoria.value = dados.categoria;
        inputNome.value = dados.nome;
        inputPreco.value = dados.preco;
    }
    catch(erro){
        console.log(erro);
        window.location.href = 'erro.html'
    }

    

    const formulario = document.querySelector('[data-formulario]');

    formulario.addEventListener('submit', async (evento)=> {
        evento.preventDefault()

        try{
            await produtosService.atualizarProduto(id, inputUrl.value, inputCategoria.value, inputNome.value, inputPreco.value)
            window.location.href = "/sucessoEdicao.html"
        }
        catch(erro){
            console.log(erro);
            window.location.href = '/erro.html'
        }
        
    })
}) ()