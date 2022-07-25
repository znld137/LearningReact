/*
async/await

async 키워드는 함수를 비동기 함수로 만들어 준다.
비동기 함수에서는 코드를 더 진행하기 전에 프라미스가 완료될 때까지 기다릴 수 있다.
프라미스 호출 앞에 await 키워드를 붙이면, 프라미스가 완료될 때까지 기다렸다가 함수가 진행된다.
*/

const getFakePerson = async () => {
  let res = await fetch('https://api.randomuser.me/?nat=US&results=1');
  let { results } = res.json();
  console.log(results);
};

getFakePerson();
