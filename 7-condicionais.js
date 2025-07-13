console.log('Trabalhando com condicionais')
const listaDestinos = new Array('RJ', 'SP', 'PR', 'PA', 'AM');
console.log(listaDestinos);

let idade = 15;
let flag_acompanhante = true;

if (idade >= 18 || flag_acompanhante) {
    console.log('pode comprar');
} /* else if (flag_acompanhante) {
    console.log('o acompanhante pode comprar');
} */ else {
    console.log('procure um adulto');
}
