import * as C from 'crypto';

// 创建 Diffie-Hellman Group 对象（使用组 14，2048 位）
const localDHGroup = C.createDiffieHellmanGroup('modp14');

// 生成本地密钥对
const localKeyPair = localDHGroup.generateKeys();


// 在对方处创建 Diffie-Hellman Group 对象
const remoteDHGroup = C.createDiffieHellmanGroup('modp14');

// 生成对方密钥对
const remoteKeyPair = remoteDHGroup.generateKeys();

// 将对方公钥传递给本地

// 本地计算共享密钥
const localSharedKey = localDHGroup.computeSecret(remoteKeyPair, null, 'hex');

// 对方计算共享密钥
const remoteSharedKey = remoteDHGroup.computeSecret(localKeyPair, null, 'hex');

console.log('Local Shared Key:', localSharedKey);
console.log('Remote Shared Key:', remoteSharedKey);
