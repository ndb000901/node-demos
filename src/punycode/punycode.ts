import * as Punycode from 'punycode';

console.log(Punycode.version);

const str1 = Punycode.encode('你好123');
console.log('str1: ', str1);
console.log('str2: ', Punycode.decode(str1));

console.log(Punycode.toASCII('你好123'));
console.log(Punycode.toUnicode(str1));
console.log(Punycode.ucs2);


