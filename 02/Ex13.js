const lakes = ['경포호', '화진포', '송지호', '청초호'];
const [first, ...rest] = lakes;

console.log(rest.join(', '));
