const regularPerson = {
  firstname: '성수',
  lastname: '박',
  spouse: {
    firstname: '서윤',
    lastname: '이',
  },
};

const lordify = ({ spouse: { firstname } }) => {
  console.log(`켄터베리의 ${firstname}`);
};

lordify(regularPerson);
