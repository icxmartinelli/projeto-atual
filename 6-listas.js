console.log('Trabalhando com Listas');

const listaDestinos = new Array(
    'Salvador'
    , 'São Paulo'
    , 'Rio de Janeiro');

listaDestinos.push('Curitiba');
listaDestinos.push('Fernandópolis');

console.log(listaDestinos);

listaDestinos.splice(4, 1);

console.log(listaDestinos);

console.log();