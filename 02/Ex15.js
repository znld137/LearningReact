const morning = {
  breakfast: '미역국',
  lunch: '삼치구이와 보리밥',
};

const dinner = '스테이크 정식';

const backpackingMeals = {
  ...morning,
  dinner,
};

console.log(backpackingMeals);
