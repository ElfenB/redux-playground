import './style.css';

import { bugAdded, bugRemoved, bugResolved } from './actions';

import { pipe } from 'lodash/fp';
import { store } from './store';

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

// --------------------------------------

console.log('---REDUX---');

const unsubsribe = store.subscribe(() => console.log('State changed', JSON.stringify(store.getState())));

store.dispatch(bugAdded('Bug 1'));

store.dispatch(bugResolved(1));

unsubsribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());
