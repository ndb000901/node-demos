import * as C from 'crypto';
/*
AES（Advanced Encryption Standard）支持多种加密模式，其中一些常见的包括：

ECB（Electronic Codebook）模式： 这是最简单的模式，将明文分成块，并对每个块单独加密。这种模式的问题在于相同的明文块会产生相同的密文块，因此可能存在安全性问题。

CBC（Cipher Block Chaining）模式： 在这个模式中，每个明文块在加密之前都会与前一个密文块进行异或运算，从而引入了块之间的依赖性。这有助于隐藏相同的明文块产生相同的密文块的问题。

CFB（Cipher Feedback）模式： 类似于CBC，但是在这种模式下，加密器的输出被反馈到输入中，而不是使用前一个密文块。这允许逐位加密，而不是逐块。

OFB（Output Feedback）模式： 与CFB类似，但是在这种模式下，加密器的输出用于生成密钥流，而不是反馈到输入中。密钥流然后与明文进行异或运算以产生密文。

CTR（Counter）模式： 在这个模式中，一个计数器被用作块的输入，而不是使用反馈。每个块都使用相同的密钥，但是计数器值不同，以确保生成不同的密文块。

*/
// const algorithm = 'aes-256-cbc';
// const key = C.randomBytes(32);
// const iv = C.randomBytes(16);
// function encrypt(data: string): string {
//     const encipher = C.createCipheriv(
//         algorithm,
//         Buffer.from(key),
//         iv
//     );
//     let ret = encipher.update(data, 'utf8', 'hex');
//     ret += encipher.final('hex');
//     return ret;
// }

// function decrypt(data: string): string {
//     const decipher = C.createDecipheriv(
//         algorithm,
//         Buffer.from(key),
//         iv
//     );
//     let ret = decipher.update(data, 'hex', 'utf8');
//     ret += decipher.final('utf8');
//     return ret;
// }

// const data = 'hellocvrtghrwtgcwe fersdgcergertverwff';

// const encryptData = encrypt(data);
// console.log('encryptData: ', encryptData);

// const decryptData = decrypt(encryptData);
// console.log('decryptData: ', decryptData);

 //////////////


const key = C.generateKeySync('aes', {
    length: 256
});
const iv = C.randomBytes(16);

const data = 'dbsyfgweuifn berhc fuihefhjhjkfvhufhjkvb';

console.log('key: ', JSON.stringify(key, undefined, '    '));

const encipher = C.createCipheriv('aes-256-cbc', key, iv);
const encryptData = encipher.update(data, 'utf8', 'hex') + encipher.final('hex');

console.log('encryptData: ', encryptData);
const decipher = C.createDecipheriv('aes-256-cbc', key, iv);
const decryptData = decipher.update(encryptData, 'hex', 'utf8') + decipher.final('utf8');

console.log('decryptData: ', decryptData);

