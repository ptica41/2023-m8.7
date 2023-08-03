let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
minValue = minValue < -999 ? -999 : minValue;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
maxValue = maxValue > 999 ? 999 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

function oneToStr(i) {
    switch (i){
        case 0:
            return '';
            break
        case 1:
            return 'один';
            break
        case 2:
            return 'два';
            break
        case 3:
            return 'три';
            break
        case 4:
            return 'четыре';
            break
        case 5:
            return 'пять';
            break
        case 6:
            return 'шесть';
            break
        case 7:
            return 'семь';
            break
        case 8:
            return 'восемь';
            break
        case 9:
            return 'девять';
            break     
        case 10:
            return 'десять';
            break
        case 11:
            return 'одиннадцать';
            break
        case 12:
            return 'двенадцать';
            break
        case 13:
            return 'тринадцать';
            break
        case 14:
            return 'четырнадцать';
            break
        case 15:
            return 'пятнадцать';
            break
        case 16:
            return 'шестнадцать';
            break
        case 17:
            return 'семнадцать';
            break
        case 18:
            return 'восемнадцать';
            break    
        default:
            return 'девятнадцать';
  
    } 
}

function twoToStr(i) {
    switch (i){
        case 2:
            return 'двадцать';
            break
        case 3:
            return 'тридцать';
            break
        case 4:
            return 'сорок';
            break
        case 5:
            return 'пятьдесят';
            break
        case 6:
            return 'шестьдесят';
            break
        case 7:
            return 'семьдесят';
            break
        case 8:
            return 'восемьдесят';
            break
        default:
            return 'девяносто';
  
    } 
}

function threeToStr(i) {
    switch (i){
        case 1:
            return 'сто';
            break
        case 2:
            return 'двести';
            break
        case 3:
            return 'триста';
            break
        case 4:
            return 'четыреста';
            break
        case 5:
            return 'пятьсот';
            break
        case 6:
            return 'шестьсот';
            break
        case 7:
            return 'семьсот';
            break
        case 8:
            return 'восемьсот';
            break
        default:
            return 'девятьсот';
  
    } 
}

function numToStr(i){
    let numStr = ``;
    if (i <0) {
        numStr = `минус `
    } else if (i === 0) {
        return 0;
    }
    let iStr = String(i);
    if (Math.abs(i) < 20){
        numStr += oneToStr(Math.abs(i));
    } else if (20 <= Math.abs(i) && Math.abs(i) < 100) {
        numStr += `${twoToStr(Math.floor(Math.abs(i) / 10))} ${oneToStr(Math.abs(i) % 10)}`;
    } else {
        numStr += `${threeToStr(Math.floor(Math.abs(i) / 100))} ${twoToStr(Math.floor(Math.abs(i) / 10) % 10)} ${oneToStr(Math.abs(i % 10))}`;
    }
    return numStr;
}

orderNumberField.innerText = orderNumber;
answerField.innerText = numToStr(answerNumber).length <20 ? `Вы загадали число ${numToStr(answerNumber) }?` : `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    gameRun = true;
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
    minValue = minValue < -999 ? -999 : minValue;
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
    maxValue = maxValue > 999 ? 999 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
    answerField.innerText = numToStr(answerNumber).length <20 ? `Вы загадали число ${numToStr(answerNumber) }?` : `Вы загадали число ${answerNumber }?`;
    })

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue > maxValue){
            let phraseRandom = Math.round( Math.random());
            let answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom = Math.round( Math.random() * 2);
            let answerPhrase = numToStr(answerNumber).length <20 ? `Вы загадали число ${numToStr(answerNumber) }?` : `Вы загадали число ${answerNumber }?`;;
            if (phraseRandom === 2){
                answerPhrase = numToStr(answerNumber).length <20 ? `Неужели число ${numToStr(answerNumber) }?` : `Неужели число ${answerNumber }?`;
            } else if (phraseRandom === 1) {
                answerPhrase = numToStr(answerNumber).length <20 ? `Ставлю свою виртуальную жизнь, что это ${numToStr(answerNumber) }` : `Ставлю свою виртуальную жизнь, что это ${answerNumber }`;
            }
            answerField.innerText = answerPhrase;
            }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue > maxValue){
            let phraseRandom = Math.round( Math.random());
            let answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue + 1) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom = Math.round( Math.random() * 2);
            let answerPhrase = numToStr(answerNumber).length <20 ? `Вы загадали число ${numToStr(answerNumber) }?` : `Вы загадали число ${answerNumber }?`;;
            if (phraseRandom === 2){
                answerPhrase = numToStr(answerNumber).length <20 ? `Неужели число ${numToStr(answerNumber) }?` : `Неужели число ${answerNumber }?`;
            } else if (phraseRandom === 1) {
                answerPhrase = numToStr(answerNumber).length <20 ? `Ставлю свою виртуальную жизнь, что это ${numToStr(answerNumber) }` : `Ставлю свою виртуальную жизнь, что это ${answerNumber }`;
            }
            answerField.innerText = answerPhrase;
            }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round( Math.random() * 2);
        let answerPhrase = `Лучший лучший! \u{1F973}`;
        if (phraseRandom === 2){
            answerPhrase = `Да, я хорош \u{1F60E}`;
        } else if (phraseRandom === 1) {
            answerPhrase = `Ванга - мое второе имя \u{1F92B}`;
        }
        answerField.innerText = answerPhrase
        gameRun = false;
    }
})

