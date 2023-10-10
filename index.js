// function calcularNivel(vitorias, derrotas) {
//   let saldoVitorias = vitorias - derrotas;
//   let nivel = "";

//   if (vitorias < 10) {
//     nivel = "Ferro";
//   } else if (vitorias >= 10 && vitorias <= 20) {
//     nivel = "Bronze";
//   } else if (vitorias >= 21 && vitorias <= 50) {
//     nivel = "Prata";
//   } else if (vitorias >= 51 && vitorias <= 80) {
//     nivel = "Ouro";
//   } else if (vitorias >= 81 && vitorias <= 90) {
//     nivel = "Diamante";
//   } else if (vitorias >= 91 && vitorias <= 100) {
//     nivel = "Lendário";
//   } else {
//     nivel = "Imortal";
//   }

//   return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
// }
// let resultado = calcularNivel(90, 35);
// console.log(resultado);

function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  switch (true) {
    case vitorias < 10:
      nivel = "Ferro";
      break;
    case vitorias >= 11 && vitorias <= 20:
      nivel = "Bronze";
      break;
    case vitorias >= 21 && vitorias <= 50:
      nivel = "Prata";
      break;
    case vitorias >= 51 && vitorias <= 80:
      nivel = "Ouro";
      break;
    case vitorias >= 81 && vitorias <= 90:
      nivel = "Diamante";
      break;
    case vitorias >= 91 && vitorias <= 100:
      nivel = "Lendário";
      break;
    default:
      nivel = "Imortal";
      break;
  }

  return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

resultado = calcularNivel(77, 9);
console.log(resultado);
