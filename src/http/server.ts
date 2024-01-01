import * as Http from 'http';
import * as U from 'url';

const server = Http.createServer((req, res) => {
    //
    const method = req.method;
    const u = U.parse(req.url ?? '', true);
    const pathname = u.pathname;
    console.log('method: ', method);
    console.log('pathname: ', pathname);

    if (method === 'GET' && pathname === '/hello') {
        res.write(JSON.stringify({
            message: 'OK'
        }));
        res.statusCode = 303;
        res.end();
    }
    
    
});

server.listen(
    10000,
    '192.168.43.51',
    () => {
        console.log('server start');
    }
);