const err = new Error('error', { cause: 'cause'});
console.log('name: ', err.name);
console.log('cause: ', err.cause);
console.log('stack: ', err.stack);
console.log('message: ', err.message);
console.log(err);