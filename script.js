//Função para o modo PvP
function playPvP(){
    let numeroMagico = prompt("Digite o número mágico: ")
    numeroMagico = parseInt(numeroMagico)

    let tentativa = 0
    let chances = 0

    while(tentativa !== numeroMagico){
        tentativa = prompt("Tente adivinhar o número mágico")
        tentativa = parseInt(tentativa)
        chances++
    }
    
}
// Função para o modo PvE
function playPvE(){
    
}











//Função inicial para começar o jogo

function startGame() {
    let mode = prompt("Escolha o modo de jogo: PvP (digite 'pvp') ou PvE (digite 'pve'):")

    if (mode.toLowerCase() === 'pvp') {
        playPvP()
    } else if (mode.toLowerCase() === 'pve') {
        playPvE()
    } else {
        alert("Modo de jogo inválido. Por favor, escolha PvP ou PvE.")
        startGame()
    }
}


//Começar o jogo 

startGame()