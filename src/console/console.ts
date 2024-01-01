// 打印，可传参数
console.log('console.log');
console.info('console.info');
console.debug('console.debug: %d', 5);
console.error('console.error');
console.warn('console.warn');

// 断言
console.assert(false, 'hello');

// 计数
console.count('a');
console.count('a');
console.count('b');
// 重置计数
console.countReset('a');
console.count('a');


// 打印table
console.table([
    {
        a: 1,
        b: 2
    },
    {
        a: 3,
        b: 4
    }
]);

// 
console.dir({
    a: {
        b: {
            c: 1,
            d: 2
        }
    },
    e: 3
});

// 缩进
console.group('hello');
console.groupCollapsed('hello');
console.groupCollapsed('hello');
console.groupEnd();

// 打印耗时
console.time('hello');
console.timeEnd('hello');

console.time('timeLog');
console.timeLog('timeLog');
console.timeLog('timeLog');
console.timeEnd('timeLog');
// 在Inspector 使用
console.timeStamp('hello');

// 在Inspector 使用
console.profile('hello');
console.profileEnd('hello');


// 清空控制台
// console.clear();

console.trace('hello');

import { Console } from 'console';
import * as FS from 'fs';
const stdout = FS.createWriteStream('./stdout.log');
const stderr = FS.createWriteStream('./stderr.log');


// const logger = new Console(stdout, stderr, true);
const logger = new Console(process.stdout, process.stderr, true);
// stdout
logger.log('log');
logger.info('info');
logger.debug('debug');
// stderr
logger.warn('warn');
logger.error('error');