function VerificarChute(chute){
    const numero = +chute

    if(wrongGuess(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido.</div>'
        return
    }

    if (numberLessOrMore(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido o número precisa está entre ${menorValor} e ${maiorValor} !</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1> Você acertou! </h1>
            <h3> O número secreto era: ${numeroSecreto} ! </h3>

            <button id="playAgain" class="btn-play">Jogar Novamente! </button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i> </div>`
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } 
}

function wrongGuess(numero){
    return Number.isNaN(numero);
}

function numberLessOrMore(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'playAgain') {
        window.location.reload()
    }
})