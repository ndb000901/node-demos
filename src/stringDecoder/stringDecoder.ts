import * as SD from 'string_decoder';

const strBuf = Buffer.from('你好', 'utf8');
const decoder = new SD.StringDecoder('utf8');

for (const data of strBuf) {
    console.log(data);
    const result = decoder.write(Buffer.from([data]));
    console.log(result);
}

