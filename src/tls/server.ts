import * as T from 'tls';
import * as FS from 'fs';

const cert = FS.readFileSync('./cert/server-cert.pem');
const key = FS.readFileSync('./cert/server-key.pem');

const server = T.createServer(
    {
        cert,
        key,
        ca: cert,
        rejectUnauthorized: false
    },
    (socket) => {
        socket.on('secureConnect', () => {
            console.log('secureConnect');
            
        });

        socket.on('OCSPResponse', (response) => {
            console.log('OCSPResponse: ', response.toString());
            
        });

        socket.on('keylog', (line) => {
            console.log('keyLog: ', line.toString());
            
        });

        socket.on('session', (session) => {
            console.log('session: ', session.toString());
            
        });


        socket.on('error', (err) => {
            console.log('error: ', err);
            
        });

        socket.on('data', (data) => {
            console.log('data: ', data.toString());
    
        });

        socket.on('end', () => {
            console.log('end');
            
        });

        socket.write('server: hello');
    }
)

server.listen(
    10000,
    '192.168.43.51',
    () => {
        console.log('start server');
        
    }
);
