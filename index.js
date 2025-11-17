/**** Escreva o código abaixo 👇******/
function somar(numero1, numero2) {
  let soma = numero1 + numero2;
  return soma;
}

function multiplicar(numero1, numero2) {
  let operacao = numero1 * numero2;
  return operacao;
}

function subtrair(numero1, numero2) {
  let operacao = numero1 - numero2;
  return operacao;
}

function dividir(numero1, numero2) {
 
    if (numero2 == 0) {
       throw new Error("Erro: divisão por zero");
    }
    return numero1 / numero2;
}

function calcularMedia(numero1, numero2, numero3, numero4) {
  somaMedia = numero1 + numero2 + numero3 + numero4;
  return dividir(somaMedia, 4);
}

function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

function calcularAreaRetangulo(largura, altura) {
  return multiplicar(largura, altura);
}

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }

}

function calcularRaizQuadrada(numero)
{
  return Math.sqrt(numero);
}

function calcularHipotenusa(cateto1,cateto2)
{
  c1 = elevarPotencia(cateto1,2);
  c2 = elevarPotencia(cateto2,2);
  somacatetos = somar(c1,c2);

  return calcularRaizQuadrada(somacatetos);

}







/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
