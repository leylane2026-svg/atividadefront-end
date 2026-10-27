function calcular() {
    const num1Input = document.getElementById('num1').value;
    const num2Input = document.getElementById('num2').value;

    if (num1Input === '' || num2Input === '') {
        alert('Por favor, preencha ambos os campos numéricos.');
        return;
    }

    const n1 = parseFloat(num1Input);
    const n2 = parseFloat(num2Input);

    // Operações aritméticas
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const multiplicacao = n1 * n2;
    const divisao = n2 !== 0 ? (n1 / n2).toFixed(2) : 'Divisão por zero não é permitida';
    const resto = n2 !== 0 ? (n1 % n2) : 'Não é possível calcular resto por zero';

    // Exibição dos resultados na tela
    document.getElementById('soma').textContent = soma;
    document.getElementById('subtracao').textContent = subtracao;
    document.getElementById('multiplicacao').textContent = multiplicacao;
    document.getElementById('divisao').textContent = divisao;
    document.getElementById('resto').textContent = resto;

    // Mostrar a div de resultados
    document.getElementById('resultados').classList.remove('hidden');
}
