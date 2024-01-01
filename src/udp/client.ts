import * as D from 'dgram';

const client = D.createSocket('udp4');

client.on('close', () => {
    console.log('close');
    
});

client.on('connect', () => {
    console.log('connect');
    
});

client.on('error', (error) => {
    console.log('error: ', error);
    
});

client.on('listening', () => {
    console.log('listening');
    
});

client.on('message', (msg, rInfo) => {
    console.log('msg: ', msg.toString('utf8'), ' rInfo: ', JSON.stringify(rInfo)); 
});

client.send(
    'hello',
    10000,
    '192.168.43.51'
);