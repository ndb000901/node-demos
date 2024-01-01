import * as D from 'domain';

const myDomain = D.create();

myDomain.on('error', () => {
    console.log('error');
});

myDomain.run(() => {
    console.log('run');
    throw new Error('run error');
    
});

setInterval(() => {
    console.log('interval');
    
}, 1000);
