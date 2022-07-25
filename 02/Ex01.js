/*
구조 분해
*/

const sandwich = {
  bread: '더치 크런치',
  meat: '참치',
  cheese: '스위스',
  toppings: ['상추', '토마토', '머스타드'],
};

const { bread, meat } = sandwich;

console.log(bread, meat); // 더치 크런치 참치
