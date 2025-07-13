console.log('Trabalhando com laços');

const destinos = new Array('NY', 'IT', 'RJ', 'SP', 'PR', 'BA', 'PA', 'AM');
let idade = 29;
let flag_acompanhante = false;
const destino = 'RJ';

let i = 0;
let flag_existe = false;

while (i <= destinos.length) {
    if (destinos[i] == destino) {
        flag_existe = true;
        console.log('destino ' + destino + ' existe na posição ' + i);
        break;
    }
    i ++;
}

if (!flag_existe) console.log('destino ' + destino + ' não existe');

for (let x = 0; x <= destinos.length; x++) {
    if (destinos[i] == destino) {
        flag_existe = true;
        console.log('destino ' + destino + ' existe mesmo na posição ' + i);
        break;
    }
}
