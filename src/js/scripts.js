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

const inputNumero1 = document.querySelector('#inputNumero1');

const inputNumero2 = document.querySelector('#inputNumero2');

const select = document.querySelector('select');

const span = document.querySelector('.spanNumero1');

console.log(span);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numero1 = parseInt(inputNumero1.value);
    const numero2 = parseInt(inputNumero2.value);
    const operacao = parseInt(select.value);
    
    console.log('select:', select.value);
    // validacao dos dados
    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, digite um número válido.');
        span.innerHTML = '<p class="text-danger">Por favor, digite um número válido!!!</p>'
        return
    }

    if (operacao === 1) {
        const resultado = soma(numero1, numero2);
        alert('Resultado da soma: ' + resultado);
        return
    }

    if (operacao === 2) {
        const resultado = subtracao(numero1, numero2);
        alert('Resultado da subtração: ' + resultado);
        return
    }

    if (operacao === 3) {
        const resultado = multiplicacao(numero1, numero2);
        alert('Resultado da multiplicação: ' + resultado);
        return
    }

    if (operacao === 4) {
        const resultado = divisao(numero1, numero2);
        alert('Resultado da divisão: ' + resultado.toFixed(2));
        return
    }
});

