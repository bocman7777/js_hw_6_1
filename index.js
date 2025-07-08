function removeCharsFromString(str, charsToRemove) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!charsToRemove.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

let inputStr;

while (true) {
    inputStr = prompt("Введіть рядок:");

    if (inputStr === null) {
        alert("Шкода, що Ви не захотіли ввести рядок.");
        continue;
    }

    if (inputStr.trim() === '') {
        alert("Рядок не може бути порожнім. Спробуйте ще раз.");
        continue;
    }

    let charsStr;
    while (true) {
        charsStr = prompt("Введіть символи для видалення (без пробілів):");

        if (charsStr === null) {
            alert("Шкода, що Ви не захотіли ввести символи для видалення.");
            continue;
        }

        if (charsStr.trim() === '') {
            alert("Символи для видалення не можуть бути порожніми.");
            continue;
        }

        const charsArray = charsStr.split('');
        const result = removeCharsFromString(inputStr, charsArray);

        alert("Результат: " + result);
        console.log("Результат:", result);
        break;
    }
    break;
}