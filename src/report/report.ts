
process.report!.reportOnUncaughtException = true;
function test(): void {
    const a = 1;
    const b = 2;
    throw new Error('hello');
    const c = a + b;
}

test();
