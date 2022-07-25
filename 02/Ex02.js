const sandwich = {
  bread: '더치 크런치',
  meat: '참치',
  cheese: '스위스',
  toppings: ['상추', '토마토', '머스타드'],
};

let { berad, meat } = sandwich;

bread = '마늘';
meat = '칠면조';

console.log(bread); // 마늘
console.log(meat); // 칠면조

// sandwich 객체는 상수이기 때문에 본래의 값은 변하지 않는다.
console.log(sandwich.bread, sandwich.meat); // 더치 크런치 참치
