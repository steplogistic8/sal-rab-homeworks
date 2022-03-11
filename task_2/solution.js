function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; 
      
    
   
    // Задание №2.1. Рассчитать доставку
       
     
    
      //если productsSum равно 0 или если productsSum Больше или равна freeShippingMinSum,
      //то shippingSum присвоить значение 0
    if(productsSum == 0 || productsSum >= freeShippingMinSum)  {              
        shippingSum = 0;
       
    } else {
           
      shippingSum = shippingPrice;                        
                           
    } 
        // если productsSum больше 0 и меньше freeShippingMinSum,
    //то shippingSum присвоить значение sippingPrice
  
    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
        
    let discountPart = discount; // величина скидки в процентах
        
    let discountSum  // создайте переменную discountSum

        // Задание №2.2. Рассчитать скидку

    if(productsSum >= discountMinSum) {   // если productsSum больше или равно discountMinSum,
       discountSum = (productsSum * discountPart / 100)
        // то присвойте discountSum значение 
    } else {                                // discountPart процентов от productsSum,
        
        discountSum = 0;
        

    } 
    
    // иначе присвойте discountSum значение 0

    // Конец решения задания №2.2.

    return discountSum
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);
    let totalSum;

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum

    totalSum = productsSum; // присвойте totalSum значение productsSum
    totalSum = (productsSum - discountSum) // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum = (totalSum + shippingSum); // прибавьте к totalSum значение shippingSum

    let freeShipping; // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
   
        freeShipping = shippingSum === 0 // если shippingSum равно нулю, то freeShipping должна быть равна true, 
    //иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
