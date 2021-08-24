// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(string) {
    return string === true || string === false ? "Hello, World!" : 'Hello, ' + string + '!'
}

function isFive(number) {
    return number == 5;
}

function isEven(number) {
  return number % 2 === 0
}

function isVowel(letter) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for(var i = 0; i < vowels.length; i++) {
        if(letter.toLowerCase() === vowels[i]) {
            return true;
        }
    }

     return false;
}

function add(a, b) {
    //return isNaN(b) ? NaN : Number(a) + Number(b);
    if(isNaN(b)) {
        return NaN;
    }
    return Number(a) + Number(b);
}

console.log(add('banana', 'split'));
console.log(add(2, 'apples'));
console.log(add());




