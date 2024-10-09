//Victor Hugo Kendi Takehana - 2418380

//1
function fatorial(num) {
  let resultado = 1;

  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}
// console.log(fatorial(5))

//2
function sequenciaMensagem(n, mensagem) {
  let mensagemFinal = "";
  for (let i = 0; i < n; i++) {
    mensagemFinal += mensagem;
  }
  return mensagemFinal;
}
// console.log(sequenciaMensagem(5, 'teste '))


//3
function calculadoraDeDoisValores(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num1 == 0 || num2 == 0) {
        return null;
      }
      return num1 / num2;
    default:
      return null;
  }
}
// console.log(calculadoraDeDoisValores(2, 3, '+'))

//4
function tabuadaNum(num) {
  resultado = [];

  for (let i = 0; i <= 10; i++) {
    resultado[i] = num * i;
  }
  return resultado;
}
// console.log(tabuadaNum(3))


//5
function numeroInvertido(num) {
  let isNegativo = num < 0;
  let numeroFinal = parseInt(num.toString().split("").reverse().join(""));
  return isNegativo ? -numeroFinal : numeroFinal;
}
// console.log(numeroInvertido(123))


//6
function contagemVogais(palavra) {
  let palavraSeparada = palavra.split("");
  let vogais = "aeiouAEIOU";

  return palavraSeparada.filter((element) => vogais.includes(element)).length;
}
// console.log(contagemVogais('teste'))

//7
function sequenciaCorreta(simbolo) {
  let listaSimbolo = [];
  let valores = {
      ')': '(',
      ']': '['
  };

  for (let char of simbolo) {
      if (['(', '['].includes(char)) {
          listaSimbolo.push(char);
      } else if ([')', ']'].includes(char)) {
          if (listaSimbolo.length === 0 || listaSimbolo.pop() !== valores[char]) {
              return false;
          }
      }
  }
  return listaSimbolo.length === 0;
}
// console.log(sequenciaCorreta("(([]))"));
// console.log(sequenciaCorreta("(([)])"));

//8
function objAleatorio(num) {
  const nomes = [
    "João",
    "Maria",
    "José",
    "Victor",
    "Ana",
    "Bruno",
    "Laura",
    "Vinicius",
    "Viviane",
    "Mariah",
    "Thiago",
  ];
  const users = [];

  for (let i = 0; i < num; i++) {
    const id = i + 1;

    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;

    const usuario = {
      id: id,
      nome: nome,
      idade: idade,
    };

    users.push(usuario);
  }
  return users;
}
// console.log(objAleatorio(2))

//9
function mediaIdade(users) {
    if (users.length === 0) {
        return 0;
    }
    let somaIdade = 0;

    users.forEach((element) => {
        somaIdade += element.idade;
    });
    const media = somaIdade / users.length;

    return media;
}
// const usuario = objAleatorio(10);
// console.log(mediaIdade(usuario))

//10
function ordenaLista(users, ordemAtributo){
  switch (ordemAtributo){
    case 'nome':
      return users.sort((a, b) => a.nome.localeCompare(b.nome))
    case 'id':
      return users.sort((a, b) => a.id - b.id)
    case 'idade':
      return users.sort((a, b) => a.idade - b.idade)
  }
}
// console.log(ordenaLista(usuario, 'idade'))
