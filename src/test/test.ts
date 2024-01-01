import * as T from 'node:test';

T.test('hello', () => {
    throw new Error('hello')
});
