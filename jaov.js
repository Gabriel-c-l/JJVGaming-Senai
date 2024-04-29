let d1, d2, d3;
let fafa, meme, didi;
let dificuldade;

switch (dificuldade) {
    case document.getElementById('dificuldade1'):
        alert("Você selecionou a dificuldade Fácil")
        d1 = Math.floor(Math.random() * 50) + 1;
        fafa

        if(fafa > d1){
            alert("O número digitado é maior que o número correto!!")
            alert("Tente novamente!")
        }if(fafa < d1){
            alert("O número digitado é menor que o número correto!!")
            alert("Tente novamente!")
        }if(fafa === d1){
            alert("Parabéns você acertou!!")
        }

        break;
    case document.getElementById('dificuldade2'):
        alert("Você selecionou a dificuldade Médio")
        d2 = Math.floor(Math.random() * 100) + 1;
        meme 

        if(meme > d2){
            alert("O número digitado é maior que o número correto!!")
            alert("Tente novamente!")
        }if(meme < d2){
            alert("O número digitado é menor que o número correto!!")
            alert("Tente novamente!")
        }if(meme === d2){
            alert("Parabéns você acertou!!")
        }
        break;
    case document.getElementById('dificuldade3'):
        alert("Você selecionou a dificuldade Difícil")
        d2 = Math.floor(Math.random() * 500) + 1;
        didi
        
        if(didi > d3){
            alert("O número digitado é maior que o número correto!!")
            alert("Tente novamente!")
        }if(didi < d3){
            alert("O número digitado é menor que o número correto!!")
            alert("Tente novamente!")
        }if(didi === d3){
            alert("Parabéns você acertou!!")
        }
    default:
        break;
}

