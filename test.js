const test = require('ava');

const simpleHistogram = require('./index');

test('return the histgram with the top value first', t => {
  const data = ['a', 'a', 'b', 'c', 'c', 'c'];

  t.deepEqual(simpleHistogram(data), [ { c: 3 }, { a: 2 }, { b: 1 } ]);
});