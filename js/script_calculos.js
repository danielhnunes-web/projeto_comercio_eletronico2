function calcularProduto(valor){
    let produto = valor * quantidade;

    return produto;
    
}

function calcularAdicional(valor){

let adicional = 0;

if (valor <= "3000"){
    adicional = "Isento"
}else if (valor == "3001" && valor <= "8000" ){
    adicional = 0.05;
    
}else if (valor == "8001" && valor <= "12000"){
    adicional = 0.10;
    
}else if (valor == "12001" && valor <= "20000"){
    adicional = 0.15;
    
}else if (valor > "20000"){
    adicional = 0.20;
    
}

let produto = valor * adicional;

return produto;

}

export{
    calcularProduto, calcularAdicional
};
