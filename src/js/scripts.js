function soma(numero1, numero2) {
   return numero1 + numero2;
}

function subtracao(numero1, numero2) {
   return numero1 - numero2;
}

function multiplicacao(numero1, numero2) {
   return numero1 * numero2;
}

function divisao(numero1, numero2) {
   return numero1 / numero2;
}

const form = document.querySelector('form');

const inputNumero1 = document.querySelector('.inputNumero1');

const inputNumero2 = document.querySelector('.inputNumero2');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numero1 = parseInt(inputNumero1.value);
    const numero2 = parseInt(inputNumero2.value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, digite um número válido.');
        return
    }

    const resultadoSoma = soma(numero1, numero2);
    const resultadoSubtracao = subtracao(numero1, numero2);
    const resultadoMultiplicacao = multiplicacao(numero1, numero2);
    const resultadoDivisao = divisao(numero1, numero2);

    console.log('Soma:', resultadoSoma);
    console.log('Subtração:', resultadoSubtracao);
    console.log('Multiplicação:', resultadoMultiplicacao);
    console.log('Divisão:', resultadoDivisao);
});

