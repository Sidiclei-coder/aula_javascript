//var nome = "Rafael Galleani ";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo " + nome + (n1*n2)); //Concatenando string com numeros
//console.log(nome);
//console.log(n1 * n2); //Fazendo operações com numeros
//console.log(n1 * idade); //erro na operação devido a variavel idade não estar declarada
//console.log(frase.replace("Japão", "Brasil")); // replace Procura toda palavra Japão e muda para Brasil
//console.log(frase.toLowerCase()); //toLowerCase Deixa tudo em letra minúscula
//console.log(frase.toUpperCase()); // Deixa tudo em letra maiúscula

//----------------------------------------------------------------------------//

//-------------Array e Dicionário--------------------------//
               //Array//
/*var lista = ["Maçã", "Pêra", "Laranja"];
lista.pop(); //O comando .pop() retira o ultimo item do array o item Laranja
lista.push("Uva");// o comando push adiciona um item após o item Laranja no array
console.log(lista.reverse()); //O comando .reverse() inverte a orde dos itens "Uva. Laranja, Pêra, Maçã"
console.log(lista);
console.log(lista[0]); //O array [0] traz o item Maçã no console
console.log(lista.toString()[0]); //Passando o comando .toString()[0] traz a letra M do item 0 do array Maçã
console.log(lista.toString()); //o comando .toString() traz uma lista dos itens em formato de string
console.log(lista.join(" ! ")); // o comando .join("-") coloca um separador em formatos e textos exemplos ("-,/,\,|,!, espaçamento")
console.log(lista [1]); // Passando o array[1] teremos a resposta Pêra, pois array começa no zero. Exemplo array[0]=Maçâ [1]=Pêra [2]=laranja
*/

//-------------------------------Dicionário----------------------------//

/*var fruta = {nome:"Maçã", cor:"Vermelha"}
console.log(fruta); //Traz a lista {nome:"Maçã", cor:"Vermelha"}
console.log(fruta.nome);// traz um nome "Maçã" 
console.log(fruta.cor); //traz a cor "Vermelha"
*/
//-----------------Lista de Dicionário-----------------------//

var frutas = [{nome:"Maçã", cor:"Vermelha",}, {nome:"Uva", cor:"Roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[0].cor);