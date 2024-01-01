import * as T from 'tty';

console.log('isatty: ', T.isatty(process.stdin.fd));
console.log('isatty: ', T.isatty(process.stdout.fd));
console.log('isatty: ', T.isatty(process.stderr.fd));

