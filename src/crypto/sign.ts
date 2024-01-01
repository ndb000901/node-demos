import * as C from 'node:crypto';

const {
    publicKey,
    privateKey,
} = C.generateKeyPairSync(
    'rsa', 
    {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
);

console.log('publicKey: ', publicKey);
console.log('privateKey: ', privateKey);

const data = 'hello';
const sign = C.createSign('RSA-SHA256');
const signature = sign.update(data).sign(privateKey, 'hex');

console.log('signature: ', signature);

const verify = C.createVerify('RSA-SHA256');
verify.update(data);
const result = verify.verify(publicKey, signature, 'hex');
console.log('result: ', result);

