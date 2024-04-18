let indice = 13, soma = 0, k = 0;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
}

console.log(soma); // 91

// ============================================================= 
function isFibonacci(num) {
    let a = 0, b = 1, temp;
    while (b <= num) {
        if (b === num) {
            return true;
        }
        temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}

let number = 44;
console.log(`${number} ${isFibonacci(number) ? "pertence" : "não pertence"} à sequência de Fibonacci`);

//======================================================================
function reverterString(str) {
    let reverter = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverter += str[i];
    }
    return reverter;
}

let str = "mayk";
console.log(reverterString(str));

//======================================================================
/*
Sobre a pergunta das lampadas, minhas resposta é, ligaria o primeiro interruptor e deixaria ligado por alguns minutos
, desligaria e deixaria ligado o segundo interruptor, assim, uma lampada estaria quente, uma acessa e a outra desligada, sendo assim, o primeiro interruptor responsável pela lâmpada quente, a lâmpada ligada seria o segundo interruptor, e a lâmpada desligada o terceiro....
*/