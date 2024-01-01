import * as C from 'crypto';
import * as FS from 'fs';
console.log(process.cwd());
const data = FS.readFileSync(`./nodejs.cer`);
const cert = new C.X509Certificate(data);
console.log(JSON.stringify(cert, undefined, '    '));
