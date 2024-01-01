import * as WT from 'worker_threads';
console.log('hello');

console.log('worker threadId: ', WT.threadId);

WT.parentPort?.postMessage(
    {
        message: 'hello main'
    }
);
