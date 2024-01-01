import * as P from 'child_process';
const p1 = P.fork(`${__dirname}/sub.js`);
p1.send('haha');

p1.on('message', (message, handler) => {
    console.log('message: ', message);
    
})

p1.on('close', (code) => {
    console.log('close: ', code);
    
});

p1.on('error', (code) => {
    console.log('error: ', code);
    
});

p1.on('exit', (code) => {
    console.log('exit: ', code);
});

p1.on('disconnect', () => {
    console.log('disconnect');
});

p1.on('spawn', () => {
    console.log('spawn');
});

p1.send('hhhhh');

