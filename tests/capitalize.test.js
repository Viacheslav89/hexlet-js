import { capitalize } from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }
assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');

console.log('Все тесты пройдены!');

