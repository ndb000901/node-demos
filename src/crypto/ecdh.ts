import * as C from 'crypto';

const a = C.createECDH('secp256k1');
const aKey = a.generateKeys();
console.log('akey: ', aKey.toString('hex'));


const b = C.createECDH('secp256k1');
const bKey = b.generateKeys();
console.log('bKey: ', bKey.toString('hex'));

const aPrivate = a.computeSecret(bKey);
const bPrivate = b.computeSecret(aKey);

console.log('aPrivate: ', aPrivate.toString('hex'));
console.log('bPrivate: ', bPrivate.toString('hex'));


