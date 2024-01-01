import * as Net from 'net';
import * as FS from 'fs';

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

const socketPath = './demo.sock';
if (FS.existsSync(socketPath)) {
    FS.rmSync(socketPath)
    console.log('rm: ', socketPath);
    
}

server.listen(
    socketPath,
    () => {
        console.log('start server');
        
    }
)
