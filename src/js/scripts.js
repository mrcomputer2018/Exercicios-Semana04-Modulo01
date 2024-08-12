console.log("Script funcionando")

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

function validarNumero(numero) {
    if (isNaN(numero)) {
        return false;
    }
    return true;
}

function gerarResultado(numero1, numero2, operacao) {
    if (operacao === 1) {
        //alert('O resultado da soma é: ' + soma(numero1, numero2));
        return soma(numero1, numero2);
    }

    if (operacao === 2) {
        //alert('O resultado da subtração é: ' + subtracao(numero1, numero2));
        return subtracao(numero1, numero2);
    }

    if (operacao === 3) {
        //alert('O resultado da multiplicação é: ' + multiplicacao(numero1, numero2));
        return multiplicacao(numero1, numero2);
    }

    if (operacao === 4) {
        //alert('O resultado da divisão é: ' + divisao(numero1, numero2));
        return divisao(numero1, numero2);
    }

    if (operacao === "") {
        return false;
    }
 }

const form = document.querySelector('form');

const inputNumero1 = document.querySelector('#inputNumero1');

const inputNumero2 = document.querySelector('#inputNumero2');

const select = document.querySelector('select');

const span = document.querySelector('.spanNumero1');

const span2 = document.querySelector('.spanNumero2');

const spanResultado = document.getElementById ('txt-resultado');

//document.getElementById("demo").innerHTML = x + y;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numero1 = parseInt(inputNumero1.value);
    const numero2 = parseInt(inputNumero2.value);
    const operacao = parseInt(select.value);

    // validacao dos dados
    if (isNaN(numero1)) {
        span.innerHTML = '<p class="text-danger">Por favor, digite um número válido!!!</p>'
        return
    }

    if (isNaN(numero2)) {
        span2.innerHTML = '<p class="text-danger">Por favor, digite um número válido!!!</p>'
        return
    }
    
    if (isNaN(numero1) && isNaN(numero2)) {
        span.innerHTML = '<p class="text-danger">Por favor, digite um número válido!!!</p>'
        span2.innerHTML = '<p class="text-danger">Por favor, digite um número válido!!!</p>'
        return
    }

    const resultado = gerarResultado(numero1, numero2, operacao);

    //alert('O resultado é: ' + resultado);

    if (resultado === undefined) {
        spanResultado.innerText = 'Por favor, selecione uma operação!!!';
        return
    }

    spanResultado.innerText = `O resultado da ${operacao} é: ${resultado}`;
});

