import * as C from 'crypto';

// const md2 = C.createHash('md2');
// console.log('md2: ', md2.update('123456').digest('hex'));

// const md4 = C.createHash('md4');
// console.log('md4: ', md4.update('123456').digest('hex'));

const md5 = C.createHash('md5');
console.log('md5: ', md5.update('123456').digest('hex'));

const sha1 = C.createHash('sha1');
console.log('sha1: ', sha1.update('123456').digest('hex'));

const sha256 = C.createHash('sha256');
console.log('sha256: ', sha256.update('123456').digest('hex'));

const sha384 = C.createHash('sha384');
console.log('sha384: ', sha384.update('123456').digest('hex'));

const sha512 = C.createHash('sha512');
console.log('sha512: ', sha512.update('123456').digest('hex'));



