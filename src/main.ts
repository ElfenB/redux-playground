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
