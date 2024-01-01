import * as Https from 'https';
import * as FS from 'fs';
const cert = FS.readFileSync('./cert/server-cert.pem');
const req = Https.request(
    {
        hostname: '192.168.43.51',
        port: 10000,
        method: 'GET',
        pathname: '/hello',
        cert,
        ca: cert,
        rejectUnauthorized: false
    },
    (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk.toString();
        });

        res.on('end', () => {
            console.log('data: ', data);
        });

        res.on('error', (err) => {
            console.log('error: ', err);
            
        })
    }
);

req.write('client hello');
req.end();