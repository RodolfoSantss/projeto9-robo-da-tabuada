const number = parseInt(prompt("Digite um número de 1 a 20 para calcular a tabuada:"))
let result

for (let i = 1; i <= 20; i++) {
    result += `${number} x ${i} = ${number * i}\n`
}

alert("A tabuada de " + number + " é:\n" + result)