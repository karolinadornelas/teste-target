// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada
// de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;
// Função para inverter a string

function inverterString(s) {
    let stringInvertida = ""; 
    let i = s.length - 1; 
    while (i >= 0) {
        stringInvertida += s[i]; 
        i--;
    }

    return stringInvertida;
}
function mostrarStringInvertida() {
    const entrada = document.getElementById('entrada').value;
    const resultado = inverterString(entrada);
    document.getElementById('resultado').innerText = "String invertida: " + resultado; // Exibe o resultado
}