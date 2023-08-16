const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.queryElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;