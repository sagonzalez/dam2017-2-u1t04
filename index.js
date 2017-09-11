var converter = require('number-to-words');

function getNameNumber(number){
    return converter.toWords(13);
}
function getOrdinalNumber(number){
    return converter.toOrdinal(number);
}
function getWordToOrdinal(number){
    return converter.toWordsOrdinal(number);
}
console.log(getNameNumber(-34));
console.log(getOrdinalNumber(34));
console.log(getWordToOrdinal(4));

