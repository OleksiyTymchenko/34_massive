"use strict;"

/*1. */
const color_list = ['red', 'white', 'black'];


color_list.push('yellow');
console.log(color_list.shift());
console.log(color_list.shift());
console.log(color_list.shift());
console.log(color_list.unshift('violet'));
console.log(color_list);

for(let i = 0; i < color_list.length; i++){
        console.log(color_list[i]);
}

for (const element of color_list) {
        console.log(element);
}


/*1Створіть масив styles з елементами “Jazz” та “Blues”.
Додайте “Rock-n-Roll” в кінець масиву.
Замініть значення в середині масиву на “Classics”. Ваш код для пошуку медіанного елемента має працювати для будь-яких масивів непарної довжини.
Видаліть перший елемент масиву та покажіть його.
Вставте Rap та Reggae на початок масиву.*/

const styles = ['Jazz', 'Blues'];
console.log(styles);
styles[2] = 'Rock-n-Roll';
console.log(styles);
styles[1] = 'Classics';
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift('Rap');
styles.unshift('Reggae');
console.log(styles);

/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить 
назву продукту, 
кількість і 
куплений він чи ні,
 ціну за одиницю товару, 
 сума. Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний. */

const shopping_list = [
        {
                product_name: 'Orange',
                amount: 30,
                bought: 'yes',
                price: 7.8,
                totally_amount: 234
        },
        {
                product_name: 'Lemon',
                amount: 30,
                bought: 'no',
                price: 1,
                totally_amount: 30
        },
        {
                product_name: 'Carrot',
                amount: 10,
                bought: 'yes',
                price: 5,
                totally_amount: 50
        }
];

const shoppingList = [
        {
          productName: 'Orange',
          amount: 30,
          bought: 'yes',
          price: 7.8,
          totallyAmount: 234
        },
      
      ];
      
      
function printShoppingList(list) {
        
        list.sort((a, b) => (a.bought === 'yes') - (b.bought === 'yes'));
      
        console.log('Список покупок:');
        list.forEach(item => {
          console.log(`* ${item.product_name} (${item.amount}): ${item.bought}, вартість: ${item.totally_amount}`);
        });
      }
      
      // Функція для відмітки продукту як купленного
      function buyProduct(list, productName) {
        const product = list.find(item => item.product_name === productName);
        if (product) {
          product.bought = 'yes';
          console.log(`Продукт '${productName}' відмічено як куплений.`);
        } else {
          console.log(`Продукт '${productName}' не знайдено в списку.`);
        }
      }
      
      // Виведення початкового списку
      printShoppingList(shopping_list);
      
      // Покупка лимонів
      buyProduct(shopping_list, 'Lemon');
      
      // Виведення оновленого списку
      printShoppingList(shopping_list);

      //Норма
      /*Видалення продукту зі списку (видалення повинно проводитися 
      шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім) */
      function deleteProduct(shoppingList, productName) {
       
        const newShoppingList = shoppingList.filter(item => item.product_name !== productName);
      
        return newShoppingList;
      }