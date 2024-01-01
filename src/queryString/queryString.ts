import * as QS from 'querystring';

const str = 'a=123&a=333&b=222';
const data = QS.parse(str);
console.log(JSON.stringify(data, undefined, '    '));


const obj = {
    k1: 1111,
    k2: [
        222,333
    ]
};
console.log(QS.encode(obj));
const data1 = QS.escape(str);
console.log('data1: ', data1);

console.log('data2: ', QS.unescape(data1));

