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
    id: 'numbers',
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
];
