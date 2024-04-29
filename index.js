let numeroMagico;
    let tentativas;

    function selecionarModo(modo) {
      if (modo === 'pvp') {
        document.getElementById('modoSelecao').style.display = 'none';
        document.getElementById('inputNumero').style.display = 'block';
      } else if (modo === 'pve') {
        iniciarJogoPvE();
      }
    }

    function iniciarJogo() {
      numeroMagico = parseInt(document.getElementById('numeroInput').value);
      tentativas = 0;

      document.getElementById('inputNumero').style.display = 'none';
      document.getElementById('chuteDiv').style.display = 'block';
    }

    function iniciarJogoPvE() {
      numeroMagico = Math.floor(Math.random() * 100) + 1;
      tentativas = 0;

      document.getElementById('modoSelecao').style.display = 'none';
      document.getElementById('chuteDiv').style.display = 'block';
    }

    function verificarChute() {
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