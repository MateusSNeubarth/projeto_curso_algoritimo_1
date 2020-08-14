/*
   leia(numero)
   fatorial := 1
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreva("O fatorial de ", numero, " é: ", fatorial)
   */
function acaoBotao(){
    var numero, fatorial
    numero = prompt("Digite o numero para calcular o fatorial: ")
    fatorial = 1
    
    for(var contador = 1; contador <= parseInt(numero); contador++){
        fatorial = fatorial * contador;
    }


    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial;
    }