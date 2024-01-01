import * as $E from 'events';

console.log($E.defaultMaxListeners);

const events = new $E.EventEmitter();
console.log('getMaxListeners: ', events.getMaxListeners());
events.setMaxListeners(20);
console.log('getMaxListeners: ', events.getMaxListeners());


console.log('listenerCount: ', events.listenerCount('hello'));
events.on('hello', () => {});
console.log('listenerCount: ', events.listenerCount('hello'));

events.on('e1', () => {
    console.log('e1');
});
events.emit('e1');
events.emit('e1');
events.once('e2', () => {
    console.log('e2');
});
events.emit('e2');
events.emit('e2');

// events.removeListener()


