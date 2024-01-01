import { log } from "console";

const buf1 = Buffer.from('hello', 'base64');
console.log('buf1', buf1);

for (const [key, value] of buf1.entries()) {
    console.log('key: ', key, 'value: ', value);
}

for (const key of buf1.keys()) {
    console.log('key: ', key);
}