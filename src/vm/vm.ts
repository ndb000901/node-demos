import { log } from 'console';
import * as VM from 'vm';

const a = 11;
const context: any = {
    a: 10
};
VM.createContext(context);
const code = `
    a += 10;
    var b = 1;
    let c = 11;
`;
VM.runInContext(code, context);

console.log('context.a: ', context.a);
console.log('context.b: ', context.b);
console.log('context.c: ', context.c);


console.log('a: ', a);

const script = new VM.Script(`console.log('hello')`);
script.runInThisContext();

console.log('isContext: ', VM.isContext(context));



(async () => {
    console.log(
        'measureMemory: ',
        JSON.stringify(
            await VM.measureMemory({
                mode: 'summary',
                execution: 'eager'
            }),
            undefined, 
            '    '
        )
    );
})();