let list = [{ title: '과격한 빨강' }, { title: '잔디' }, { title: '파티핑크' }];

const addColor = (title, array) => array.concat({ title });

console.log(addColor('화려한 녹색', list).length);
console.log(list.length);
