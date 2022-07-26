const obj = {
  message: '함수를 다른 값과 마찬가지로 객체에 추가할 수도 있습니다.',
  log(message) {
    console.log(message);
  },
};

obj.log(obj.message); //함수를 다른 값과 마찬가지로 객체에 추가할 수도 있습니다.

// 함수를 다른 값과 마찬가지로 객체에 추가할 수도 있습니다.
const messages = [
  '함수를 배열에 넣을 수도 있습니다.',
  (message) => console.log(message),
  '일반적인 값과 마찬가지 입니다.',
  (message) => console.log(message),
];

messages[1](messages[0]); // 함수를 배열에 넣을 수도 있습니다.
messages[3](messages[2]); // 일반적인 값과 마찬가지 입니다.
