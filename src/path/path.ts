import * as Path from 'path';

console.log(Path.basename('C:\\hello\\haha.txt'));
console.log(Path.posix.basename('C:\\hello\\haha.txt'));
console.log(Path.win32.basename('C:\\hello\\haha.txt'));

console.log('sep: ', Path.sep);
console.log('isAbsolute: ', Path.isAbsolute('/cdcd/'));
console.log('isAbsolute: ', Path.isAbsolute('./cdcd/'));

console.log('dirname: ', Path.dirname('/jiji/haha'));
console.log('extname: ', Path.extname('/haha/jiji.txt'));
console.log('join: ', Path.join('ddc', 'sdsdfsd', 'wdwsd'));
console.log('relative: ', Path.relative('/home/jiji/haha', '/home/jiji'));
console.log('normalize: ', Path.normalize('/homne/////jiji//'));
console.log('resolve: ', Path.resolve('csdcsd', 'dsss'));

console.log('toNamespacedPath: ', Path.toNamespacedPath('/home/jiji'));







