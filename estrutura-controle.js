/*escreval("Digite seu nome")
   leia(nome)
   escreval("Digite sua primeira nota")
   leia(nota01)
   escreval("Digite sua segunda nota")
   leia(nota02)
   media := (nota01 + nota02) / 2
   
   se media >= 5 entao
      escreval("Aprovado! ", nome)
   senao
      escreval("Reprovado! ", nome)
   fimse*/

   var nome, nota01, nota02;
   nome = prompt("Digite seu nome:")
   nota01 = prompt("Digite sua primeira nota:")
   nota02 = prompt("Digite sua segunda nota:")

   media = (parseInt(nota01) + parseInt(nota02)) / 2

   if(media >= 5)
        alert("Aprovado! " + nome)
    else
        alert("Reprovado! " + nome)    