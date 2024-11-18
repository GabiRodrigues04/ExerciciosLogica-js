//função verificadora de números primos
function NumerosPrimos() {
    //pede o número ao usuário
    const num = parseInt(prompt("Digite um número: "));
    //cria um array para números primos
    let primos = [];
    
    //verifica se o número é primo
    for(let i = 2; i <= num; i++) {

        let isPrimo = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrimo = false;
                break;
            }
        } //caso o número seja primo, adiciona ao array
        if (isPrimo) {
            primos.push(i);
        }
    }

    // caso o número seja inteiro e maior que um, exibe o array de primos
    if (num < 2) {
        console.log('Não há numeros primos até esse número');
    } else {
        console.log(primos)
    }
}

NumerosPrimos();