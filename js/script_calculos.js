function calcularProduto(valor, quantidade){

    return valor * quantidade;
    
}

function calcularAdicional(valor){
    let adicional = 0;

    if (valor < 3000) {
        adicional = 0;
    } else if (valor <= 8000) {
        adicional = 0.05;
    } else if (valor <= 12000) {
        adicional = 0.10;
    } else if (valor <= 20000) {
        adicional = 0.15;
    } else {
        adicional = 0.20;
    }

    // Retorna o valor numérico do adicional
    return valor * adicional;
}

export{
    calcularProduto, calcularAdicional
};
