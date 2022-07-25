// 스프레드 연산자를 사용하여 원본 배열을 복사했기 때문에, 원본 배열을 변경하지 않는다.

const peaks = ['대청봉', '중청봉', '소청봉'];
const [last] = [...peaks].reverse();

console.log(last);
console.log(peaks.join(', '));
