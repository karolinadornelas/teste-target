// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 13;
let SOMA = 0;
let k = 0;

while (k < indice){
    k = k + 1;
    SOMA = SOMA + k;
}

console.log(SOMA);

//O valor da variável SOMA será 91.