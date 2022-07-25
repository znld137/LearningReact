/* 
객체 리터럴 개선 Object Literal Enhancement

구조 분해의 반대
구조를 다시 만들어내는 과정 또는 내용을 한데 묶는 과정
객체 리터럴 개선을 사용하면 현재 영역에 있는 변수를 객체의 필드로 묶을 수 있다.
 */

const name = '탈락';
const elevation = 9738;

const funHike = { name, elevation };

console.log(funHike); // { name: '탈락', elevation: 9738 }
