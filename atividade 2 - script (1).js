function verificarCnh() {
    const idadeInput = document.getElementById('idade').value;
    const possuiCnh = document.getElementById('possuiCnh').checked;

    if (idadeInput === '') {
        alert('Por favor, informe a sua idade.');
        return;
    }

    const idade = parseInt(idadeInput);
    const divResultado = document.getElementById('resultado');
    const msgResultado = document.getElementById('mensagemResultado');

    // Usando operador lógico E (&&) conforme pedido no exercício
    if (idade >= 18 && possuiCnh) {
        msgResultado.textContent = "Pode dirigir";
        divResultado.className = "resultado pode-dirigir";
    } else {
        msgResultado.textContent = "Não pode dirigir";
        divResultado.className = "resultado nao-pode-dirigir";
    }
}
