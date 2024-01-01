import * as C from 'cluster';
import * as OS from 'os';

console.log('isPrimary: ', C.default.isPrimary);
console.log('isWorker', C.default.isWorker);

// console.log('settings: ', C.default.settings);
// console.log('worker: ', C.default.worker);
if (C.default.isPrimary) {
    for (let i = 0; i < OS.cpus.length;i++) {
        C.default.fork();
    }
}
const interval = setInterval(() => {
    console.log('setInterval');
}, 0);
