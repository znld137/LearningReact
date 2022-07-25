const name = '탈락';
const elevation = 9738;

const print = function () {
  console.log(`${this.name} 산의 높이는 ${this.elevation} 피트입니다.`); // 객체의 키에 접근하기 위해 this 사용
};

const funHike = { name, elevation, print };

funHike.print(); // 탈락 산의 높이는 9738 피트입니다.
