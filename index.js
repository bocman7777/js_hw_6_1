function removeCharsFromString(str, charsToRemove) {
    const pattern = new RegExp(`[${charsToRemove.join('')}]`, 'g');
    return str.replace(pattern, '');
}

const inputStr = prompt("Введіть рядок:");
const charsStr = prompt("Введіть символи для видалення (без пробілів):");

const charsArray = charsStr.split('');

const result = removeCharsFromString(inputStr, charsArray);

console.log("Результат:", result);
alert("Результат: " + result);