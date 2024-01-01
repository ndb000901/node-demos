import * as Http2 from 'http2';
import * as URL from 'url';

const server = Http2.createServer((req, res) => {
    const method = req.method;
    const u = URL.parse(req.url, true);
    const key = u.query['key'];
    const headers = req.headers;
    const pathname = u.pathname;

    console.log('key: ', key);
    console.log('headers: ', headers);
    console.log('pathname: ', pathname);
    console.log('method: ', method);

    if (method === 'GET' && pathname === '/hello') {
        res.write(JSON.stringify({
            date: Date.now()
        }));
        res.statusCode = 250;
        res.end();
    }
});
server.listen(
    10000,
    '192.168.43.51',
    () => {
        console.log('start server');     
    }
);
