function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    
    // Задание №1.1. Оповещение о добавлении в корзину

    let message// создайте переменную message
    message = title; // присвойте переменной message значение переменной productName

    message +=' ' ;// добавьте в конец переменной message пробел

    message += 'за' ; // добавьте в конец переменной message текст 'за'
    message +=' ' ; // добавьте в конец переменной message пробел

    message += price ; // добавьте в конец переменной message значение переменной productPrice
    message +=' '; // добавьте в конец переменной message пробел

    message += 'теперь в корзине!'; // добавьте в конец переменной message текст 'теперь в корзине!'
    
    console.log(productName);
    console.log(productPrice);
    console.log(message);


    // выведите переменную message в консоль
    
    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;
    let newValue = (value + 1);

    console.log(newValue + 1);
    console.log(oldValue);
    console.log(newValue);

    // создайте переменную newValue
    // присвойте ей значение oldValue
    // увеличьте значение newValue на 1

    // Конец решения задания №1.2.

    return newValue;
}


function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    let newSum = (oldSum + difference);
    let newSumText = (newSum + ' ₽');

    // Задание №1.3. Увеличение суммы в корзине

    // создайте переменную newSum и присвойте ей сумму oldSum и difference
    // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    // замените склеивание, используемое в newSum Text на шаблонную строку

    // Конец решения задания №1.3.

    return newSumText;
}

