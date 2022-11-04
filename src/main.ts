import './style.css';

import { pipe } from 'lodash/fp';

const text = '    JavaScript    ';

const toLower = (input: string) => input.toLowerCase();
const trim = (input: string) => input.trim();
const putInElement = (element: string) => (input: string) => `<${element}>${input}</${element}>`;

const output = trim(toLower(text));
const transform = pipe(trim, toLower, putInElement('div'));

console.log(output);
console.log(transform(text));

// --------------------------------------

const personA = { name: 'Anna', address: { street: 'Alter Weg', town: 'Altstadt' } };
const personB = { ...personA, name: 'Bob' };
personB.address.street = 'Neuer Weg';

console.log('personA', JSON.stringify(personA.address.street));
console.log('personB', JSON.stringify(personB.address.street));
