const palindromes = function (word) {
    alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    let cleanedWord = word.toLowerCase().split('').filter(letter => alphanumerical.includes(letter)).join('');
    let reversedString = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
