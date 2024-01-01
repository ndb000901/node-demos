import * as URL from 'url';
const url = new URL.URL('https://hello:passwd@hello.com:80/jiji/haha?xxx=111&xxx=222#yyy');
console.log('hash: ', url.hash);
console.log('host: ', url.host);
console.log('hostname: ', url.hostname);
console.log('href: ', url.href);
console.log('origin: ', url.origin);
console.log('password: ', url.password);
console.log('pathname: ', url.pathname);
console.log('port: ', url.port);
console.log('protocol: ', url.protocol);
console.log('search: ', url.search);
console.log('searchParams: ', url.searchParams);
console.log('toJSON: ', url.toJSON());
console.log('toString: ', url.toString());
console.log('username: ', url.username);
console.log('domainToASCII: ', URL.domainToASCII('中文.com'));
console.log('domainToUnicode: ', URL.domainToUnicode('中文.com'));
console.log('fileURLToPath: ', URL.fileURLToPath('file:/home/h.txt'));
console.log('resolve: ', URL.resolve('dfdf/dfff/', 'ddcdcd'));
console.log('urlToHttpOptions: ', URL.urlToHttpOptions(url));
console.log('format: ', URL.format(url, {
    auth: false
}));
console.log('pathToFileURL: ', URL.pathToFileURL('/home/r.txt'));

