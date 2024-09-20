// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
//faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

let valoresFaturamentoJSON = [];
let valoresFaturamentoTabela = [];
let contadorDias = 1;

document.getElementById('carregar-btn').addEventListener('click', function () {
    const fileInput = document.getElementById('fileInput');
    const resultadoDiv = document.getElementById('resultado');

    if (!fileInput.files.length) {
        resultadoDiv.textContent = "os dados devem estar no formato JSON.";
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        try {
            const faturamento = JSON.parse(event.target.result);
            valoresFaturamentoJSON = faturamento.filter(item => item.valor > 0).map(item => item.valor);
        } catch (error) {
            resultadoDiv.textContent = "erro";
        }
    };

    reader.readAsText(file);
});

//adicionar valores manualmente
document.getElementById('adicionar-btn').addEventListener('click', adicionarValor);
document.getElementById('novoValor').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarValor();
    }
});

function adicionarValor() {
    if (contadorDias > 31) {
        alert("máximo de 31 dias atingido. apenas calculos mensais.");
        return;
    }

    const novoValorInput = document.getElementById('novoValor');
    const novoValor = parseFloat(novoValorInput.value);

    if (isNaN(novoValor) || novoValor <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    valoresFaturamentoTabela.push(novoValor);
    adicionarLinhaTabela(contadorDias, novoValor);
    contadorDias++;
    novoValorInput.value = ''; //limpa o campo de entrada
}


document.getElementById('calcular-json-btn').addEventListener('click', function () {
    calcularFaturamento(valoresFaturamentoJSON, "valores JSON");
});

document.getElementById('calcular-tabela-btn').addEventListener('click', function () {
    calcularFaturamento(valoresFaturamentoTabela, "valores da tabela");
});

function calcularFaturamento(valores, tipo) {
    const resultadoDiv = document.getElementById('resultado');

    if (valores.length === 0) {
        resultadoDiv.textContent = `nenhum valor em ${tipo}.`;
        return;
    }

    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const mediaMensal = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
    const diasAcimaMedia = valores.filter(valor => valor > mediaMensal).length;

    resultadoDiv.innerHTML = `
        <p><strong>${tipo}:</strong></p>
        <p>menor valor de faturamento: R$ ${menorValor.toFixed(2)}</p>
        <p>maior valor de faturamento: R$ ${maiorValor.toFixed(2)}</p>
        <p>número de dias com faturamento acima da média mensal: ${diasAcimaMedia}</p>
    `;
}

function adicionarLinhaTabela(dia, valor) {
    const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];
    const maisLinha = tabela.insertRow();

    const celulaDia = maisLinha.insertCell(0);
    const celulaValor = maisLinha.insertCell(1);

    celulaDia.textContent = dia;
    celulaValor.textContent = `R$ ${valor.toFixed(2)}`;
}
