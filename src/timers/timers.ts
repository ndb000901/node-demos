import { log } from "console";
import { setMaxIdleHTTPParsers } from "http";

const timeout = setTimeout(() => {
    console.log('timeout');
}, 1000);
const interval = setInterval(() => {
    console.log('setInterval');
}, 1000);
const immediate = setImmediate(() => {
    console.log('setImmediate');
});

clearTimeout(timeout);
clearInterval(interval);
clearImmediate(immediate);


