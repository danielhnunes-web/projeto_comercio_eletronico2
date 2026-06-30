import { calcularProduto, calcularAdicional } from "./script_calculos.js";

let produtos = [];

function pegarDescricaoProduto() {
    let descricao = document.querySelector("#descricao").value;

    let valor = Number(
        document.querySelector("#valor").value
    );

    let quantidade = Number(
        document.querySelector("#quantidade").value
    );

    let valorTotal = calcularProduto(valor, quantidade);

    let adicional = calcularAdicional(valorTotal);

    valorTotal = valorTotal + adicional;

    let produto = {

        descricao: descricao,
        valor: valor,
        quantidade: quantidade,
        adicional: adicional,
        valorTotal: valorTotal

    };
    return produto;
}

function adicionarProduto(produtos) {
    let lista = document.querySelector("#listaProdutos");
    lista.innerHTML = "";

    for (let produto of produtos) {

        let item = document.createElement("li");

        item.innerHTML = `
            Descrição: ${produto.descricao}<br>
            Valor Unitário: R$ ${produto.valor.toFixed(2)}<br>
            Quantidade: ${produto.quantidade}<br>
            Valor Total: R$ ${produto.valorTotal.toFixed(2)}<br>
            Valor Adicional: ${
                produto.adicional > 0
                ? "R$ " + produto.adicional.toFixed(2)
                : "Isento"
            }
            <hr>

        `;

        lista.appendChild(item);
    }
}

let formulario = document.querySelector("#formProduto");

formulario.addEventListener("submit", function (event) {
    
    event.preventDefault();
    let produto = pegarDescricaoProduto();
    produtos.push(produto);
    adicionarProduto(produtos);
    formulario.reset();
});
