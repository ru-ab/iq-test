export const tests = [
  {
    id: 'sex',
    type: 'radio',
    question: 'Ваш пол:',
    answers: [
      { id: 'male', label: 'Мужчина' },
      { id: 'female', label: 'Женщина' },
    ],
  },
  {
    id: 'age',
    type: 'radio',
    question: 'Укажите ваш возраст:',
    answers: [
      { id: '<18', label: 'До 18' },
      { id: '18-28', label: 'От 18 до 28' },
      { id: '29-35', label: 'От 29 до 35' },
      { id: '>36', label: 'От 36' },
    ],
  },
  {
    id: 'wrong',
    type: 'radio',
    question: 'Выберите лишнее:',
    answers: [
      { id: 'house', label: 'Дом' },
      { id: 'hovel', label: 'Шалаш' },
      { id: 'bungalow', label: 'Бунгало' },
      { id: 'bench', label: 'Скамейка' },
      { id: 'hut', label: 'Хижина' },
    ],
  },
  {
    id: 'number',
    type: 'radio',
    question: 'Продолжите числовой ряд:\n18  20  24  32',
    answers: [
      { id: '62', label: '62' },
      { id: '48', label: '48' },
      { id: '74', label: '74' },
      { id: '57', label: '57' },
      { id: '60', label: '60' },
      { id: '77', label: '77' },
    ],
  },
  {
    id: 'color1',
    type: 'color',
    question: 'Выберите цвет, который\nсейчас наиболее Вам\n приятен:',
    answers: [
      { id: 'gray', label: '#A8A8A8' },
      { id: 'blue', label: '#0000A9' },
      { id: 'green', label: '#00A701' },
      { id: 'red', label: '#F60100' },
      { id: 'yellow', label: '#FDFF19' },
      { id: 'brown', label: '#A95403' },
      { id: 'black', label: '#000000' },
      { id: 'purple', label: '#850068' },
      { id: 'cyan', label: '#46B2AC' },
    ],
  },
  {
    id: 'color2',
    type: 'color',
    question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам\nприятен:',
    answers: [
      { id: 'gray', label: '#A8A8A8' },
      { id: 'cyan', label: '#46B2AC' },
      { id: 'brown', label: '#A95403' },
      { id: 'green', label: '#00A701' },
      { id: 'black', label: '#000000' },
      { id: 'red', label: '#F60100' },
      { id: 'purple', label: '#850068' },
      { id: 'yellow', label: '#FDFF19' },
      { id: 'blue', label: '#0000A9' },
    ],
  },
  {
    id: 'city',
    type: 'radio',
    question: 'Какой из городов лишний?',
    answers: [
      { id: 'Washington', label: 'Вашингтон' },
      { id: 'London', label: 'Лондон' },
      { id: 'Paris', label: 'Париж' },
      { id: 'New York', label: 'Нью-Йорк' },
      { id: 'Moscow', label: 'Москва' },
      { id: 'Ottawa', label: 'Оттава' },
    ],
  },
];
