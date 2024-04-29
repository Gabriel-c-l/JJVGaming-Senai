// Função para gerar um número aleatório entre min e max
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Função para jogar PvP
function playPvP() {
    let magicNumber = prompt("Digite o número mágico:");
    magicNumber = parseInt(magicNumber);

    let guess = 0;
    let attempts = 0;

    while (guess !== magicNumber) {
        guess = prompt("Tente adivinhar o número mágico:");
        guess = parseInt(guess);
        attempts++;

        if (guess < magicNumber) {
            alert("O número mágico é maior!");
        } else if (guess > magicNumber) {
            alert("O número mágico é menor!");
        }
    }

    alert("Parabéns! Você acertou o número mágico em " + attempts + " tentativas!");
}

// Função para jogar PvE
function playPvE() {
    const minNumber = 1;
    const maxNumber = 100;
    const magicNumber = generateRandomNumber(minNumber, maxNumber);

    let guess = 0;
    let attempts = 0;

    while (guess !== magicNumber) {
        guess = prompt("Tente adivinhar o número mágico entre " + minNumber + " e " + maxNumber + ":");
        guess = parseInt(guess);
        attempts++;

        if (guess < magicNumber) {
            alert("O número mágico é maior!");
        } else if (guess > magicNumber) {
            alert("O número mágico é menor!");
        }
    }

    alert("Parabéns! Você acertou o número mágico em " + attempts + " tentativas!");
}

// Função principal para iniciar o jogo
function startGame() {
    let mode = prompt("Escolha o modo de jogo: PvP (digite 'pvp') ou PvE (digite 'pve'):");

    if (mode.toLowerCase() === 'pvp') {
        playPvP();
    } else if (mode.toLowerCase() === 'pve') {
        playPvE();
    } else {
        alert("Modo de jogo inválido. Por favor, escolha PvP ou PvE.");
        startGame(); // Reinicia o jogo se o modo for inválido
    }
}

// Iniciar o jogo
startGame();
