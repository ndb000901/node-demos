process.on('message', (message, handler) => {
    console.log('message: ', message);
});

// process.send('hello' + Date.now());

setTimeout(() => {
    process.disconnect();
}, 1000);