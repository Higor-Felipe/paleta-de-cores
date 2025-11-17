function gerarCorAleatoria() {
    const codigo = "0123456789ABCDEF";
    let cor = "#";
    for (let caractere = 0; caractere < 6; caractere++) {
        cor += codigo[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function gerarPaleta() {
    for (let contagem = 1; contagem <= 5; contagem++) {
        const boxCor = document.getElementById(`color${contagem}`);
        const codigoHEX = document.getElementById(`code${contagem}`);
        const corAleatoria = gerarCorAleatoria();
        boxCor.style.backgroundColor = corAleatoria;
        codigoHEX.innerText = corAleatoria;
    }
}

function copiarCor(codeId) {
    const codigoHEX = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(codigoHEX).then(() => {
        const corBox = document.getElementById(`color${codeId.slice(-1)}`);
        let mensagemCopiada = corBox.querySelector(".mensagem-copiada");
        if (!mensagemCopiada) {
            mensagemCopiada = document.createElement("div");
            mensagemCopiada.className = "mensagem-copiada";
            mensagemCopiada.innerText = "Copiado com SUCESSO!";
            corBox.appendChild(mensagemCopiada);
        }
        mensagemCopiada.classList.add('show');
        setTimeout(() => {
            mensagemCopiada.classList.remove('show');
            setTimeout(() => mensagemCopiada.remove(), 300);
        }, 1000);
    }).catch(err => console.error('Erro ao copiar:', err));
}
window.onload = gerarPaleta;