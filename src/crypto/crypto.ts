import { log } from 'console';
import * as C from 'crypto';

console.log('checkPrimeSync: ', C.checkPrimeSync(5n));

console.log('generatePrimeSync: ', C.generatePrimeSync(100));

console.log('getHashes: ', C.getHashes());
console.log('getCiphers: ', C.getCiphers());
console.log('getCurves: ', C.getCurves());
console.log('getFips: ', C.getFips());
console.log('randomUUID: ', C.randomUUID());
console.log('randomBytes: ', C.randomBytes(16));

