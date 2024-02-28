console.log("Trabalhando com Variáveis");

const idade = 28;
const primeiroNome = "Isabella";
const sobrenome = "Martinelli";

console.log(primeiroNome, sobrenome);
// console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

/* nome = nome + " " + sobrenome;
aqui dá erro se o nome for const, porque só é possível atribuir uma vez, depois não muda;
não é recomendado usar let, usar variável, a menos que seja um contador por exemplo;
 */

const nomeCompleto = primeiroNome + " " + sobrenome;
