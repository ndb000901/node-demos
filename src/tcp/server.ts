import * as Net from 'net';

const server = Net.createServer((socket) => {
    socket.on('connect', () => {
        console.log('connect');
        
    });

    socket.on('data', (data) => {
        console.log('data: ', data.toString('utf8'));
        socket.write('world')
    });

    socket.on('close', (error) => {
        console.log('close: ', error);
        
    });

    socket.on('end', () => {
        console.log('end');
    });

    socket.on('error', (err) => {
        console.log('error: ', err);
    });
});
server.listen(
    10000,
    '192.168.43.51',
    () => {
        console.log('start server');
    }
);