// 배열 구조 분해하기

const [firstAnimal] = ['캥거루', '웜뱃', '코알라'];
const [, secondAnimal] = ['캥거루', '웜뱃', '코알라'];
const [, , thirdAnimal] = ['캥거루', '웜뱃', '코알라'];

console.log(firstAnimal); // 캥거루
console.log(secondAnimal); // 웜뱃
console.log(thirdAnimal); // 코알라
