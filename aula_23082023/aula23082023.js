/*function somar(a,b=0){
    if(a == undefined || b == undefined){
        return "Incorreto";
    }
    return a+b;
}

console.log(somar(2,5));

function somar2(...numeros){
    return numeros.length;
}

console.log(somar2(2,3,4,5,6,7));

function somar3(...numeros){
    var soma = 0;
    for (let i=0; i<numeros.length; i++){
        soma = soma + numeros[i];
    }
    return soma;
}

console.log(somar3(2,3,4,5,6,7));

function contar(n){
    if(n>0){
        contar(n-1)
        console.log(n); // o contar antes faz a contagem ser crescente, o contar depois faz ser decrescente
   }
}

contar(5);

const calculadora = {
    somar: function(a,b){
        return a+b;
    },
    subtrair: function(a,b){
        return a-b;
    },
    multiplicar: function(a,b){
        return a*b;
    }
}

console.log(calculadora.somar(3,4));
console.log(calculadora.subtrair(8,4));

const calculadora2 = {
    somar(a,b){
        return a+b;
    },
    subtrair(a,b){
        return a-b;
    }
}

console.log(calculadora2.somar(3,4));
console.log(calculadora2.subtrair(8,4));*/

function enviaEmail(){
    console.log("Email: Download finalizado");
}

function baixarArquivo(nomedoArquivo, callback){
    console.log("baixando arquivo " + nomedoArquivo);
    setTimeout(() => {
        console.log(nomedoArquivo + " baixado com sucesso");
        callback();
    }, 5000);
    
}

baixarArquivo("auladeJS.mp4", enviaEmail);