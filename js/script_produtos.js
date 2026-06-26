import { calcularProduto, calcularAdicional } from "./script_calculos.js";

function pegarDescricaoProduto(){
    let descricao = document.querySelector("#descricao").value;

    let valor = Number(
        document.querySelector("#valor").value
    );

    let  quantidade = Number(
        document.querySelector("#quantidade").value
    );

    let adicional = calcularAdicional(valor);


    let valorTotal = calcularProduto((valor + adicional), quantidade);

    let produto = {
        descricao: descricao,
        valor: valor,
        quantidade: quantidade,
        adicional: adicional,
        valorTotal: valorTotal

    };

    return produto;
}

function adicionarProduto(produto){
    let lista = document.querySelector("#listaProdutos");

    let item = document.createElement("li");

    item.innerHTML = `
    Descrição: ${produto.descricao}<br>
    Valor: R$ ${produto.valor.toFixed(2)} reais<br>
    Quantidade: ${produto.quantidade} unidades<br>
    Adicional: ${produto.adicional.toFixed(2)}<br>
    Valor Total: R$ ${produto.valorTotal.toFixed(2)} reais
    `;

    lista.appendChild(item);
}

let formulario = document.querySelector("#formProduto");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let produto = pegarDescricaoProduto();

    adicionarProduto(produto);

    formulario.reset();
});