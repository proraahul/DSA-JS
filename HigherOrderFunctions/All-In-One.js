const currentYear = 2023;
const ageLimit = 25;

const peopledata = [{
    name: 'A',
    birthYear: 1996,
},
{
    name: 'B',
    birthYear: 1997,
},
{
    name: 'C',
    birthYear: 1998,
},
{
    name: 'D',
    birthYear: 1999,
},
{
    name: 'E',
    birthYear: 2000,
},{
    name: 'F',
    birthYear: 1995,
},{
    name: 'G',
    birthYear: 1994,
}];

const result = peopledata
.map(item => currentYear - item.birthYear)
.filter(item => item>= ageLimit)
.reduce((total, item) => total += item);


console.log(result);