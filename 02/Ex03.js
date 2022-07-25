// 객체를 분해해서 함수의 인자로 넘길 수 있다.

const lordify = (regularPerson) => {
  console.log(`캔터베리의 ${regularPerson.firstname}`);
};

var regularPerson = {
  firstname: '성수',
  lastmane: '박',
};

lordify(regularPerson);
