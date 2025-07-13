console.log("Trabalhando com Variáveis");

let idade = 29;
const primeiroNome = "Isabella";
const sobrenome = "Martinelli";
const nomeCompleto = primeiroNome + " " + sobrenome;

console.log(primeiroNome, sobrenome);
// console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);
console.log(`Meu nome completo é ${nomeCompleto}`);

/* nome = nome + " " + sobrenome;
 * aqui dá erro se o nome for const,
 * porque só é possível atribuir uma vez
 * , depois não muda;
 * não é recomendado usar let, usar variável,
 * a menos que seja um contador por exemplo;
 */