   var nome, nota01, nota02;
   nome = prompt("Digite seu nome:")
   nota01 = prompt("Digite sua primeira nota:")
   nota02 = prompt("Digite sua segunda nota:")

   media = (parseInt(nota01) + parseInt(nota02)) / 2

   if(media >= 5)
        alert("Aprovado! " + nome)
    else
        alert("Reprovado! " + nome)    