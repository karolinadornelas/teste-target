// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
//sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
//escreva um programa na linguagem que desejar onde, informado um número, ele calcule a 
//sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence 
//ou não a sequência.
//IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function isPerfectSquare(x) {
    let s = Math.sqrt(x);
    return s === Math.floor(s);
}

function isFibonacci(num) {
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

function fibonacciVerify() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultadoDiv.textContent = "Por favor, insira um número válido.";
        return;
    }
    if (isFibonacci(numero)) {
        resultadoDiv.textContent = `${numero} pertence à sequência de Fibonacci.`;
    } else {
        resultadoDiv.textContent = `${numero} não pertence à sequência de Fibonacci.`;
    }
}
document.getElementById('verificar-btn').addEventListener('click', fibonacciVerify);
