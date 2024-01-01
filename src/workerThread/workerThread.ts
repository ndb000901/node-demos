import * as WT from 'worker_threads';

// console.log('isMainThread: ', WT.isMainThread);
// console.log('share_env: ', WT.SHARE_ENV);
// console.log('parentPort: ', WT.parentPort);
// console.log('resourceLimits: ', WT.resourceLimits);
// console.log('threadId: ', WT.threadId);
// console.log('workerData: ', WT.workerData);

if (WT.isMainThread) {
    console.log('main threadId: ', WT.threadId);
    
    const worker = new WT.Worker(`${__dirname}/workerThread.js`);
    worker.once('message', (msg) => [
        console.log('main: ', msg)    
    ]);
    worker.postMessage({
        message: 'hello worker'
    });
    worker.on('exit', (code) => {
        console.log('worker exit: ', code);
        
    })
}
else {
    console.log('worker id: ', WT.threadId);
    WT.parentPort?.once('message', (msg) => {
        console.log('work: ', msg);
    });

    WT.parentPort?.on('close', () => {
        console.log('parentPort close');
        
    })

    WT.parentPort?.postMessage({
        message: 'hello main'
    });

    
}




