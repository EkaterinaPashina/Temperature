//Создание массивов
cities = ["Барселона", "Валенсия", "Мадрид", "Пальма", ];
temperature = [];

//Цикл для запросов температуры для городов и погрешных вводов
for (let i = 0; i < cities.length; i++) {
    temperature[i] = prompt(`Введите температуру для города ${cities[i]}`);
    if (temperature[i] === null) {
        alert('Вы отменили ввод');
    }

    if (temperature[i] === '') {
        alert('Вы не указали температуру');
        temperature[i] = prompt(`Введите температуру для города ${cities[i]}`);
    }

};

//Определение места для вставки городов и их температуры
const div = document.getElementById('cities');

//Цикл для вставки строк, содержащих город и температуру
for (let i = 0; i < cities.length; i++) {
    div.insertAdjacentHTML('beforeend', `<p class="city">Температура в городе ${cities[i]}: ${temperature[i]}&deg;C</p>`);
}

//Определение места для вставки максимального и минимального значения температуры
const div1 = document.getElementById('temperature');

//Определение в константы значений 
const max = Math.max(...temperature);
const min = Math.min(...temperature);

//Вставка строк со значением максимальной и минимальной температуры
div1.insertAdjacentHTML('beforeend', `<p class="temperature__value">Максимальная температура: ${max}&deg;C</p>`);
div1.insertAdjacentHTML('beforeend', `<p class="temperature__value">Минимальная температура: ${min}&deg;C</p>`);