/*
스프레드 연산자 Spread Operator

3개의 점(...)으로 이뤄진 연산자

1. 스프레드 연산자를 사용해 배열의 내용을 조합할 수 있다.
    ex) 두 배열이 있다면, 두 배열의 원소가 들어간 세 번째 배열을 만들 수 있다.
*/

const peaks = ['대청봉', '중청봉', '소청봉'];
const canyons = ['천불동계곡', '가야동계곡'];
const seoraksan = [...peaks, ...canyons];

console.log(seoraksan.join(', '));
