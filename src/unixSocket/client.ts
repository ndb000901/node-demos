import * as Net from 'net';

const client = Net.connect({
    path: './demo.sock'
});

client.on('connect', () => {
    console.log('connect');
    
});
client.on('data', (data) => {
    console.log('data: ', data.toString('utf8'));
    
});

client.on('error', (err) => {
    console.log('error: ', err);
});


client.on('end', () => {
    console.log('end');
    
});
client.on('close', (hadError) => {
    console.log('close: ', hadError);
    
});
client.write('hello');
