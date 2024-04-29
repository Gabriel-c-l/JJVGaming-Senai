let d1, d2, d3;
let fafa;
let dificuldade;



switch (dificuldade) {
    case Fácil:
        alert("Você selecionou a dificuldade Fácil")
        d1 = Math.floor(Math.random() * 50) + 1;
        fafa = document.getElementById("dificuldade1")
        
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
    case Médio:
        alert("Você selecionou a dificuldade Médio")
        break;
    case Difícil:
        alert("Você selecionou a dificuldade Difícil")
    default:
        break;
}