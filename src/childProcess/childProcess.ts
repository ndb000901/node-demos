import * as P from 'child_process';

// 
// const process1 = P.spawn('ls', ['-h']);
// process1.on('close', (code) => {
//     console.log('close: ', code);
// });
// process1.on('exit', (code) => {
//     console.log('exit: ', code);
// });

// process1.on('error', (err) => {
//     console.log('error: ', err);
// });

// process1.on('spawn', () => {
//     console.log('spawn');
// });

// process1.on('disconnect', () => {
//     console.log('disconnect');
// });

// process1.on('message', (message, handler) => {
//     console.log('message: ', message.toString());
// })

// process1.stdout.on('data', (chunk) => {
//     console.log('stdout: ', chunk.toString('utf8'));
// });

// process1.stderr.on('data', (chunk) => {
//     console.log('stderr: ', chunk.toString('utf8'));
    
// });
//


// const p2 = P.execFile('ls', ['-h']);
// p2.stdout?.on('data', (chunk) => {
//     console.log('data: ', chunk.toString());
    
// });

// const p3 = P.execFileSync('ls', ['-h']);
// console.log('p3: ', p3.toString());


const p4 = P.exec('ls');
p4.stdout?.on('data', (chunk) => {
    console.log('data: ', chunk.toString()); 
});