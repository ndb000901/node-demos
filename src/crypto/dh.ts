import * as C from 'crypto';

const a = C.createDiffieHellman(2048);
const aPublic = a.generateKeys();
console.log('aPublic: ', aPublic);

const b = C.createDiffieHellman(a.getPrime(), a.getGenerator());
const bPublic = b.generateKeys();
console.log('bPublic: ', bPublic);


const aPrivate = a.computeSecret(bPublic, null, 'hex');
const bPrivate = b.computeSecret(aPublic, null, 'hex');

console.log('aPrivate: ', aPrivate);
console.log('bPrivate: ', bPrivate);

