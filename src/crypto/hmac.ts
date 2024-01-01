import * as C from 'crypto';

const hmac = C.createHmac('sha256', 'key111');
console.log('hmac: ', hmac.update('msg123456').digest('hex'));
 