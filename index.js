let numeroMagico;
let tentativas;

function selecionarModo(modo) {
  if (modo === 'pvp') {
    document.getElementById('modoSelecao').style.display = 'none';
    document.getElementById('inputNumeroPvP').style.display = 'block';
  } else if (modo === 'pve') {
    document.getElementById('modoSelecao').style.display = 'none';
    document.getElementById('dificuldadeSelecao').style.display = 'block';
  }
}

function selecionarDificuldade(dificuldade) {
  if (dificuldade === 'facil') {
    iniciarJogoPvE(50); 
  } else if (dificuldade === 'medio') {
    iniciarJogoPvE(100); 
  } else if (dificuldade === 'dificil') {
    iniciarJogoPvE(200); 
  }
}

function ocultarDificuldades() {
  document.getElementById('dificuldadeSelecao').style.display = 'none';
}

function iniciarJogoPvP() {
  numeroMagico = parseInt(document.getElementById('numeroInputJogador1').value);
  tentativas = 0;

  document.getElementById('inputNumeroPvP').style.display = 'none';
  document.getElementById('chuteDiv').style.display = 'block';
}

function iniciarJogoPvE(maximo) {
  numeroMagico = Math.floor(Math.random() * maximo) + 1;
  tentativas = 0;

  document.getElementById('inputNumeroPvE').style.display = 'none';
  document.getElementById('chuteDiv').style.display = 'block';
}

function verificarChute() {
  const chute = parseInt(document.getElementById('chuteInput').value);
  document.getElementById('chuteInput').focus();
  document.getElementById('chuteInput').value = '';
  tentativas++;

  const diferenca = Math.abs(chute - numeroMagico);

  if (chute === numeroMagico) {
    document.getElementById('resultado').innerText = `Parabéns! Você acertou o número mágico em ${tentativas} tentativas.`;
    document.getElementById('chuteDiv').style.display = 'none';
  } else if (diferenca <= 2) {
    document.getElementById('resultado').innerText = `Esta quase pegando fogo 🥵`;
  } else if (diferenca <= 5) {
    document.getElementById('resultado').innerText = `Esta esquentando 🔥🔥`;
  } else if (diferenca <= 10) {
    document.getElementById('resultado').innerText = `Morno`;
  } else if (diferenca <= 15) {
    document.getElementById('resultado').innerText = `Esta começando a esquentar 🧊`;
  } else if (diferenca <= 20) {
    document.getElementById('resultado').innerText = `pegue logo um cachecol esta muito frio 🧣❄️`;
  } else if (diferenca <= 35) {
    document.getElementById('resultado').innerText = `Mais um pouco e você chega no polo norte ⛄🐧🎅`;
  } else {
    document.getElementById('resultado').innerText = "Você está tão longe que nem sente mais as pernas de tanto frio 🥶";
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
