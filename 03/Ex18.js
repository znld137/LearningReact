const schools = ['Yorktown', 'Washington & Lee', 'Wakefield'];

const cutSchool = (cut, list) => list.filter((school) => school !== cut);

console.log(cutSchool('Washington & Lee', schools).join(', '));

console.log(schools.join('\n'));
