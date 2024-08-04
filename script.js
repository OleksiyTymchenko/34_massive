"use strict;"

/*1. Створи об'єкт, що описує автомобіль 
(виробник, модель, рік випуску, середня швидкість, 
обсяг паливного баку, середня витрата палива на 100 км., водії), 
і наступні методи для роботи з цим об'єктом:
*/
//1 Метод, який виводить на екран інформацію про автомобіль.
const drivers_list = {
        driver1: 'Alex Tim',
        driver2: 'Jack Jonhson',
        driver3: 'Jack Sparow',
        driver4: 'Michel Jakson'
}

const car_information = {
        producer: 'Ford',
        model: 'Escort',
        'year of production': 2016,
        'everage speed': '110 km/h',
        'the volume of the fuel tank': '60 liters',
        'average fuel consumption per 100 km': '5 liters',
        drivers(){ 
                return `${drivers_list.driver1},
                ${drivers_list.driver2},
                ${drivers_list.driver3},
                ${drivers_list.driver4}
        `},
        fullinformation(){
                return `${this.producer},
                 ${this.model},
                 ${this["year of production"]},
                 ${this["everage speed"]},
                 ${this["the volume of the fuel tank"]},
                 ${this["average fuel consumption per 100 km"]},
                 ${this.drivers()}`
        },
        nameInTheList: function(){
                switch(drivers_name){
                        case 'Alex':
                        alert(`The Alex Tim is in the list.`);
                        break;
                        case 'Jack':
                        alert(`This Jack Jonhson is in the list.`);
                        break;
                        case 'Sparow':
                        alert(`This Jack Sparow is in the list.`);
                        break;
                        case 'Michel':
                        alert(`This Michel Jakson is in the list.`);
                        break;
                        case 'Valeriy':
                        alert(`This Valeriy Timchenko is in the list.`);
                        break;
                }
        },
        patrol: function(){
                let patrolValue = (user_distance/100)*5;
        },
        time: function(){
                let resultOfRoad;
                let timeValue = (user_distance/110);
                if (timeValue > 4) {
                        let additionalTime = timeValue/4; 
                       return Math.floor(resultOfRoad = timeValue + additionalTime);
                } 
        }
}

alert(car_information.fullinformation());

//2 Додавання ім’я водія у список
drivers_list.driver5 = 'Valeriy Timchenko';

for (const key in drivers_list) {
        alert(`${key} = ${drivers_list[key]}`);
        console.log(`${key} = ${drivers_list[key]}`);
}
//3 Перевірка водія на наявність його ім’я у списку

const drivers_name = prompt('Please, enter drivers name');

car_information.nameInTheList();

//4 Підрахунок необхідного часу та кількості 
//палива для подолання переданої відстані з середньою швидкістю. 
//Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const user_distance = prompt('Please enter the distance');

alert(car_information.time());
