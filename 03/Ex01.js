/*
함수형이란 무엇인가?

1급 시민 first class citizen 
함수가 1급 시민이 되려면 변수에 함수를 대입할 수 있고,
함수를 다른 함수에 인자로 넘길 수 있으며,
함수에서 함수를 만들어서 반환할 수 있어야 한다.

자바스크립트에서는 함수가 1급 시민
일급 시민이라는 말은 정수나 문자열 같은 다른 일반적인 값과 마찬가지로 함수를 취급할 수 있다는 뜻이다.
*/

var log = function (message) {
  console.log(message);
};

log('자바스크립트에서는 함수를 변수에 넣을 수 있습니다.');