// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836, 43
// • RJ – R$36.678, 66
// • MG – R$29.229, 88
// • ES – R$27.165, 48
// • Outros – R$19.849, 53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

document.getElementById('calcular-btn').addEventListener('click', function () {
    const sp = parseFloat(document.getElementById('sp').value) || 0;
    const rj = parseFloat(document.getElementById('rj').value) || 0;
    const mg = parseFloat(document.getElementById('mg').value) || 0;
    const es = parseFloat(document.getElementById('es').value) || 0;
    const outros = parseFloat(document.getElementById('outros').value) || 0;

    const total = sp + rj + mg + es + outros;

    const percentualSP = (sp / total * 100).toFixed(2);
    const percentualRJ = (rj / total * 100).toFixed(2);
    const percentualMG = (mg / total * 100).toFixed(2);
    const percentualES = (es / total * 100).toFixed(2);
    const percentualOutros = (outros / total * 100).toFixed(2);

    document.getElementById('resultado').innerHTML = `
        <p>percentual de SP: ${percentualSP}%</p>
        <p>percentual de RJ: ${percentualRJ}%</p>
        <p>percentual de MG: ${percentualMG}%</p>
        <p>percentual de ES: ${percentualES}%</p>
        <p>percentual de Outros: ${percentualOutros}%</p>
    `;
});

//resultados:
// percentual de SP: 35.68%
// percentual de RJ: 19.29%
// percentual de MG: 15.37%
// percentual de ES: 15.37%
// percentual de Outros: 14.29%