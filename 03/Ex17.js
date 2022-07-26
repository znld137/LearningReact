const schools = ['Yorktown', 'Washington & Lee', 'Wakefield'];

console.log(schools.join(', '));

const wSchools = schools.filter((school) => school[0] == 'W');

console.log(wSchools);
