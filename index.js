//IF
/*
let condição1 = true;

if (condição1){
    //Como o valor da condição é true, o código desse bloco é executado
    console.log('Entrei no if1');
}

let condição2 = false;

if (condição2){
    //Como o valor da condição é false, o código desse bloco NÃO é executado
    console.log('Entrei no if2');
}
*/

//Exercício 1
/*
function recebeDoisNumeros(num1, num2){
    if(num1 === num2){
        return 'sucesso'
    }
}
console.log(recebeDoisNumeros(
    Number(prompt('digite um numero')), 
    Number(prompt('digite outro numero'))));
*/

//Exercício 1.1
/*
function nomeEIdade(nome, idade){
    if(idade >= 18){
        return nome + 'você pode dirigir'
    }
    
}
console.log(nomeEIdade(
    prompt('Digite seu nome '),
    Number(prompt('Digite sua idade '))));
    */

    //ELSE
    /*
    let condição = false

    if(condição){
        console.log('Entrei no if!')
    }else{
        //Com o valor da condição é false o código do bloco else será executado
        console.log('Entrei no else!')
    }
    */
//Exercício 2
/*
function recebeDoisNumeros(num1, num2){
    if(num1 === num2){
        return 'são iguais'
    }else{
        num1 !== num2
        return 'são diferentes'
    }
}
console.log(recebeDoisNumeros(
    Number(prompt('digite um numero')), 
    Number(prompt('digite outro numero'))));
    */

//Exercício 3
/*
function comparaNumeros(num1, num2){
    if(num1 === num2){
        return 'são iguais'
    }else if(num1 > num2){
        return 'maior'
    } else(num1 < num2)
        return 'menor'
}
console.log(comparaNumeros(
    Number(prompt('digite um numero')), 
    Number(prompt('digite outro numero'))));
*/

/*
let paisDeOrigem
switch (paisDeOrigem) {
    case 'Brasil':
        console.log('brasileiro')
        break
    case 'EUA' :
        console.log('norte americano')
        break
    case 'Inglaterra' :
        console.log('inglês')
        break
    default:
        console.log('nacionalidade não encontrada')
    break;
}
*/

//Exercício 4
/*
let pokemons = prompt('Qual seu pokemon? ');
switch (pokemons) {
case 'Bulbassauro' :
    console.log('planta e veneno')
    break 
case 'Charmander' :
        console.log('Fogo')
    break
case 'Squirtle' :
        console.log('Agua')
    break
default:
        console.log('pokemon não encontrado')
    break
}
console.log(pokemons);
*/

//Exercício 5

function podeEstudarNaFaculdade(ensinoMedio, idade, cursandoFaculdade){
    if(ensinoMedio == 'sim' && idade >= 18 && cursandoFaculdade == 'não'){
        return 'Pode estudar na faculdade';
    }else { return 'Não pode estudar na faculdade';}
}
console.log(podeEstudarNaFaculdade(prompt('Concluiu o ensino Médio?').toLocaleLowerCase(),
        Number(prompt('Sua idade')), prompt('Está cursando faculdade?').toLocaleLowerCase()));
