// 객체의 필드에 접근하기 위해 점(.)과 필드 이름을 사용하는 대신,
// regularPerson에서 필요한 값을 구조 분해로 가져올 수도 있다.

const lordify = ({ firstname }) => {
  console.log(`켄터베리의 ${firstname}`);
};

const regularPerson = {
  firstname: '성수',
  lastmane: '박',
};

lordify(regularPerson);
