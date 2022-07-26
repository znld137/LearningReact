/*
불변성

함수형 프로그래밍에서는 데이터가 변할 수 없다.
원본 데이터 구조를 변경하는 대신 그 데이터 구조의 복사본을 만들되 그중 일부를 변경한다.
그리고 원본 대신 변경한 복사본을 사용해 필요한 작업을 진행한다.
 */

let color_lawn = {
  title: '잔디',
  color: '#00FF00',
  rating: 0,
};

function rateColor(color, rating) {
  color.rating = rating;
  return color;
}

console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);
