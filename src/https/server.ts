import * as Https from 'https';
import * as FS from 'fs';
import * as URL from 'url';

const cert = FS.readFileSync('./cert/server-cert.pem');
const key = FS.readFileSync('./cert/server-key.pem');

const server = Https.createServer(
    {
        cert,
        key,
        rejectUnauthorized: false
    },
    (req, res) => {
        const method = req.method;
        const u = URL.parse(req.url ?? '', true);
        const pathname = u.pathname;
        res.write(JSON.stringify({
            message: 'ok',
            method,
            pathname
        }));
        res.end();
    }
);

server.listen(
    10000,
    '192.168.43.51',
    () => {
        console.log('start server');
        
    }
)