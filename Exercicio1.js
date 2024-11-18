//função para verificar palíndromos
function Palindromo() {

    //pede o texto ao usuário
    console.log('Verificador de Palíndromo');
    const uInput = prompt('Digite um texto para verificar se é palíndromo: ');

    let isPalindromo = true;

    //normaliza o texto digitado pelo usuário
    const text = uInput.replace(/\s+/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    //verifica se o texto é um palíndromo
    for (let i=0; i<text.length; i++) {
        if (text[i] !== text[text.length - i - 1]) {
            isPalindromo = false;
            break;
        }
    }

    //retorna o resultado ao usuário
    if(isPalindromo) {
        console.log('O texto ' + uInput + ' é um palíndromo');
    } else {
        console.log('O texto ' + uInput + ' não é um palíndromo')
    }

}

Palindromo();