import * as P from 'perf_hooks';
const obs = new P.PerformanceObserver((items) => {
    console.log(items.getEntries()[0].duration);
    performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'], buffered: true });
performance.measure('Start to Now');
  
performance.mark('A');
console.log();

performance.mark('B');

performance.measure('A - B: ', 'A', 'B');
// doSomeLongRunningProcess(() => {
//     performance.measure('A to Now', 'A');
//     performance.mark('B');
//     performance.measure('A to B', 'A', 'B');
// });
