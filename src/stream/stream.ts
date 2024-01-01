import * as FS from 'fs';
import * as S from 'stream';

const input = FS.createReadStream('./stderr.log');
const output = FS.createWriteStream('./stdout.log');
const tran = new S.Transform({
    transform(chunk, encoding, callback) {
        console.log(chunk.toString('utf-8'));
        callback(null, Buffer.from(chunk.toString('utf-8').toUpperCase()));
    }
});
const p = S.pipeline(
    input,
    tran,
    output,
    (err) => {
        if (err) {
            console.log(err);
            
        }
        else {
            console.log('pipeline ok');
            
        }
    }
);
setInterval(() => {}, 1000)


const writeStream = FS.createWriteStream('./stderr.log');
writeStream.on('drain', () => {
    console.log('drain');
});
while (true) {
    const flag = writeStream.write('hhhhhhhhchhhhhhhhhhh');
    if (!flag) {
        console.log('flag: ', flag);
        break;
    }
}

