import * as TE from 'trace_events';

const t1 = TE.createTracing({ categories: ['node.async_hooks'] });
const t2 = TE.createTracing({ categories: ['node.perf'] });
const t3 = TE.createTracing({ categories: ['v8'] });

t1.enable();
t2.enable();


console.log(TE.getEnabledCategories());