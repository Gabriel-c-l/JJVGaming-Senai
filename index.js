let numeroMagico;
let tentativas;

function limparResposta() {
    document.getElementById('resultado').innerText = '';
}

function selecionarModo(modo) {
    limparResposta();
    if (modo === 'pvp') {
    document.getElementById('modoSelecao').style.display = 'none';
    document.getElementById('inputNumero').style.display = 'block';
    } else if (modo === 'pve') {
    iniciarJogoPvE();
    }
}

function iniciarJogo() {
    limparResposta();
    numeroMagico = parseInt(document.getElementById('numeroInput').value);
    tentativas = 0;

    document.getElementById('inputNumero').style.display = 'none';
    document.getElementById('chuteDiv').style.display = 'block';
}

function iniciarJogoPvE() {
    limparResposta();
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;

    document.getElementById('modoSelecao').style.display = 'none';
    document.getElementById('chuteDiv').style.display = 'block';
}

function verificarChute() {
    limparResposta();
    const chute = parseInt(document.getElementById('chuteInput').value);
    tentativas++;

    if (chute === numeroMagico) {
    document.getElementById('resultado').innerText = `Parabéns! Você acertou o número mágico em ${tentativas} tentativas.`;
    document.getElementById('chuteDiv').style.display = 'none';
    } else if (chute > numeroMagico) {
    document.getElementById('resultado').innerText = "O número mágico é menor.";
    } else {
    document.getElementById('resultado').innerText = "O número mágico é maior.";
    }
}

function toggleModoNoturno() {
    var modoNoturnoBtn = document.getElementById("modoNoturnoBtn");
    var emojiAtual = modoNoturnoBtn.textContent;
    var body = document.body;
  
    if (emojiAtual === "🌛") {
      modoNoturnoBtn.textContent = "☀️"; 
      body.classList.add("modo-noturno");
    } else {
      modoNoturnoBtn.textContent = "🌛"; 
      body.classList.remove("modo-noturno"); 
    }
  }
  