import test from 'ava'
import reverser from '../src/index.js'

test('reverse', t => {
  t.is(reverser('hello'), 'olleh', 'No match')
  t.is(reverser('goodbye'), 'eybdoog')
})