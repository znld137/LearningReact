let schools = [
  { name: 'Yorktown' },
  { name: 'Stratford' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' },
];

const editNth = (n, name, arr) =>
  arr.map((item, i) => (i === n ? { ...item, name } : item));

let updatedSchools2 = editNth(2, 'Mansfield', schools);

console.log(updatedSchools2[2]);
console.log(schools[2]);
