import * as T from 'tls';
import * as FS from 'fs';

const cert = FS.readFileSync('./cert/client-cert.pem');
const key = FS.readFileSync('./cert/client-key.pem');

const client = T.connect(
    10000,
    '192.168.43.51',
    {
        cert,
        key,
        ca: cert,
        rejectUnauthorized: false
    },
    () => {
        console.log('start client');
    }
);

client.on('secureConnect', () => {
    console.log('secureConnect');
    
});

client.on('OCSPResponse', (response) => {
    console.log('OCSPResponse: ', response.toString());
    
});

client.on('keylog', (line) => {
    console.log('keyLog: ', line.toString());
    
});

client.on('session', (session) => {
    console.log('session: ', session.toString());
    
});

client.on('error', (err) => {
    console.log('error: ', err);
    
});

client.on('data', (data) => {
    console.log('data: ', data.toString());

});
client.write('client: hello');

