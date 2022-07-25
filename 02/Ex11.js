// Array.reverse() 메서드는 원래의 배열을 변경한다.

const peaks = ['대청봉', '중청봉', '소청봉'];
const [last] = peaks.reverse();

console.log(last);
console.log(peaks.join(', '));
