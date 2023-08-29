// Procura: a
const padraoRegexp = /a/;

const texto = 'JavaScript';
const novoTexto = texto.replace(padraoRegexp, 'B');
console.log(novoTexto);


// Procura: J seguido de a, v e a
const regexp = /Java/;

console.log('JavaScript'.replace(regexp, 'Type'));


// Procura: Todo a
const regexpG = /a/g;

console.log('JavaScript'.replace(regexpG, 'i'));

// Procura: Todo PE, Pe, pE e pe
const regexpI = /Pe/gi;

console.log('Perdeu perdido'.replace(regexpI, 'Ba'));


// Procura: Todo a, A, i, I
const regexpChar = /[ai]/gi;

console.log('JavaScript'.replace(regexpChar, 'u'));

// Procura: - ou .
const regexpSpecChar = /[-.]/g;

console.log('111.222-333-44'.replace(regexpSpecChar, ''));

// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l
const regexpOneOther = /Bra[sz]il/g;

console.log('Brasil é com z: Brazil'.replace(regexpOneOther, 'Prazer'));

// Busca por itens de a à z
const regexpAZ = /[a-z]/g;

console.log('JavaScript é a linguagem.'.replace(regexpAZ, '0'));

// Busca por itens de a à z e A à Z
const regexpAz = /[a-zA-Z]/g;

console.log('JavaScript é a linguagem.'.replace(regexpAz, '1'));


// Busca por números de 0 à 9
const regexpNumero = /[0-9]/g;

console.log('123.333.333-33'.replace(regexpNumero, 'X'));

// Procura: tudo que não estiver entre a e z
const regexpDeny = /[^a-z]/g;

console.log('Brasil é com z: Brazil'.replace(regexpDeny, ' '));

// Procura: todos os caracteres menos quebra de linha
const regexpAll = /./g;

console.log('JavaScript é a linguagem.'.replace(regexpAll, '0'));

// Procura: todos os pontos
const regexpPoints = /\./g;
const regexpAlternativa = /[.]/g;

console.log('999.222.222.11'.replace(regexpPoints, '-'));

// Procura: todos os alfanuméricos
const regexpAlpha = /\w/g;

console.log('Guarda-chuva R$ 23,00.'.replace(regexpAlpha, '-'));

// Procura: o que não for caracter alfanuméricos
const regexpNotAlpha = /\W/g;

console.log('Guarda-chuva R$ 23,00.'.replace(regexpNotAlpha, '-'));

// Procura: todos os dígitos
const regexpAllDigs = /\d/g;

console.log('+55 (21) 2222-2222'.replace(regexpAllDigs, 'X'));

// Procura: o que não for dígito
const regexpNotDigs = /\D/g;

console.log('+55 (21) 2222-2222'.replace(regexpNotDigs, ''));

// Procura: espaços em branco
const regexpWhiteSpace = /\s/g;

console.log('+55 (21) 2222-  2222  '.replace(regexpWhiteSpace, ''));

// Procura: o que não for espaço em branco
// /[\s\S]/g irá selecionar tudo

const regexpNotWhiteSpace = /\S/g;

console.log('+55 (21) 2222-  2222  '.replace(regexpNotWhiteSpace, 'x'));

// Procura: 4 a's seguidos
const regexpQuant = /aaaa/g;
const regexpAlt = /a{4}/g;

console.log('Vaaaai ali por favor.'.replace(regexpQuant, 'a'));  


// Procura: dígitos seguidos de 2 à 3
const regexpTwoThree = /\d{2,3}/g;

console.log('222.333.222.42'.replace(regexpTwoThree, 'X'));

// Procura: letras seguidos com 1 caracter ou mais
const regexpLetras = /\w{1,}/g;

console.log('A melhor linguagem é JavaScript'.replace(regexpLetras, 'X'));

// Procura: dígitos em ocorrência de um ou mais
const regexpD = /\d+/g;

console.log('222.333.222.42'.replace(regexpD, 'X'));


// Procura: Começa com d, seguido por uma ou mais letras.
const regexpLetters = /d\w+/g;

console.log('Dígitos, dados, desenhos, Dito, d'.replace(regexpLetters, 'X'));

// Procura: Começa com d, seguido por zero ou mais letras.
const regexpDChar = /d\w*/g;

console.log('Dígitos, dados, desenhos, Dito, d'.replace(regexpDChar, 'X'));

// Procura: Por regex com p opcional
const regexpOp = /regexp?/g;

console.log('Qual é o certo, regexp ou regex?'.replace(regexpOp, 'Regular Expression'));

// Procura: java ou php (case insensitive)
const regexpOu = /java|php/gi;

console.log('PHP e Java são linguagens diferentes'.replace(regexpOu, 'X'));

// Procura: java (case insensitive)
const regexpBoundary = /\bjava\b/gi;
console.log('Java não é JavaScript.'.replace(regexpBoundary, 'X'));

// Procura: Dígitos em sequência, que estejam isolados
const regexpDigito = /\b\d+\b/gi;
console.log('O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexpDigito, 'X'));
console.log('11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X'));

const regexpDigitoInverse = /\B\d+\B/gi;

console.log('11_22 33-44 55é66 77e88'.replace(regexpDigitoInverse, 'X'));

// Procura: sequência de alfanuméricos
// no início da linha.
const regexpFirstWords = /^\w+/g;

`andre@origamid.com
contato@origamid.com`.replace(regexpFirstWords, 'X');
// X@origamid.com
// contato@origamid.com

// Procura: sequência de alfanuméricos
// no final da linha.
const regexpLastWords = /\w+$/g;

`andre@origamid.com
contato@origamid.com`.replace(regexp, 'X');
// andre@origamid.com
// contato@origamid.X

// Procura: sequência de alfanuméricos
// no final da linha.
const regexpEndOfLines = /\w+$/gm;

`andre@origamid.com
contato@origamid.com`.regexpEndOfLines(regexp, 'X');
// andre@origamid.X
// contato@origamid.X

// Procura: sequência de alfanuméricos
// no início da linha.
const regexpBegginingOfLines = /^\w+/gm;

`andre@origamid.com
contato@origamid.com`.replace(regexpBegginingOfLines, 'X');
// X@origamid.com
// X@origamid.com

// $& referencia a palavra que foi selecionada. Usado ao substituir para usar o texto selecionado.


