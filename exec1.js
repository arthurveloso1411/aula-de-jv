let contagem = 6;
let acerto = false;

while (!acerto && contagem >1 ) {
    contagem --;
    console.log(`contagem regresiva ${contagem}`);
    
    if (contagem === 1) acerto = true;
}

console.log("Fim da contagem regressiva");