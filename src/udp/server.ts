import * as D from 'dgram';

const server = D.createSocket('udp4');

server.on('close', () => {
    console.log('close');
    
});

server.on('connect', () => {
    console.log('connect');
    
});

server.on('error', (error) => {
    console.log('error: ', error);
    
});

server.on('listening', () => {
    console.log('listening');
    
});

server.on('message', (msg, rInfo) => {
    console.log('msg: ', msg.toString('utf8'), ' rInfo: ', JSON.stringify(rInfo)); 
    server.send('world', rInfo.port, rInfo.address);
});
server.bind(10000, '192.168.43.51');