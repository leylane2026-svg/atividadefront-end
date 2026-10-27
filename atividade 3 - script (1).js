function verificarRelacao() {
    const num1Input = document.getElementById('num1').value;
    const num2Input = document.getElementById('num2').value;

    if (num1Input === '' || num2Input === '') {
        alert('Por favor, preencha ambos os campos numéricos.');
        return;
    }

    const n1 = parseFloat(num1Input);
    const n2 = parseFloat(num2Input);

    let maiorTexto = '';
    let menorTexto = '';
    let igualdadeTexto = '';

    // Usando operadores relacionais (>, <, ==, etc.)
    if (n1 > n2) {
        maiorTexto = `O primeiro número (${n1}) é maior.`;
        menorTexto = `O segundo número (${n2}) é menor.`;
    } else if (n2 > n1) {
        maiorTexto = `O segundo número (${n2}) é maior.`;
        menorTexto = `O primeiro número (${n1}) é menor.`;
    } else {
        maiorTexto = 'Não há maior (os números são iguais).';
        menorTexto = 'Não há menor (os números são iguais).';
    }

    if (n1 === n2) {
        igualdadeTexto = `Sim, os números são iguais (${n1} == ${n2}).`;
    } else {
        igualdadeTexto = `Não, os números não são iguais (${n1} != ${n2}).`;
    }

    // Exibição na tela com aplicação da classe de destaque em negrito
    const spanMaior = document.getElementById('maior');
    spanMaior.textContent = maiorTexto;
    spanMaior.className = 'destaque-negrito';

    document.getElementById('menor').textContent = menorTexto;
    document.getElementById('igualdade').textContent = igualdadeTexto;

    // Mostra a seção de resultados
    document.getElementById('resultados').classList.remove('hidden');
}
