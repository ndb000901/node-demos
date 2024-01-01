import * as FS from 'fs/promises';

async function test(): Promise<void> {
    // cp ./stdout.log ./stdout.log1
    // await FS.cp('./stdout.log', './stdout.log1');
    // rm ./stderr.log
    // await FS.rm('./stderr.log');

    // FS.appendFile('./stdout.log1', 'haha');
    try {
        await FS.access('/etc/passwd', FS.constants.W_OK);
    }
    catch (error) {
        console.log('access: ', error);
    }
    // chmod 666 ./stdout.log
    // await FS.chmod('./stdout.log', '666');
    //
    // await FS.chown('./stdout.log', 0, 0);
    // await FS.copyFile('./stdout.log', './stdout.log2');
    // FS.lchown()

    // await FS.link('./stdout.log', './stdout.log3');

    const stat1 = await FS.lstat('./stdout.log3');
    console.log('stat1: ', stat1);

    await FS.lutimes('./stdout.log3', 1000, 1000);
    const stat2 = await FS.lstat('./stdout.log3');
    console.log('stat2: ', stat2);

    // mkdir hello
    // await FS.mkdir('hello');

    // 
    // await FS.mkdtemp('')

    // const data = await (await FS.open('./stdout.log')).read();
    // console.log('data: ', data);
    
    // const dir = await FS.opendir('./');
    // for await (const item of dir) {
    //     console.log(item.name);
        
    // }
    // console.log('dir: ', dir);

    // const data = await FS.readFile('./stdout.log');
    // console.log('data: ', data);

    // 
    // const data = await FS.readdir('./');
    // console.log('data: ', data);

    // const data = await FS.readlink('./stdout.log');
    // console.log('data: ', data);
    
    // const data = await FS.realpath('./');
    // console.log('data: ', data);
    
    // await FS.rename('./stdout.log3', './stdout.log4');

    // const stat = await FS.stat('./stdout.log');
    // console.log('stat: ', stat);

    // const statfs = await FS.statfs('./stdout.log');
    // console.log('statfs: ', statfs);
    
    // await FS.symlink('./stdout.log', './stdout.log4', 'file');

    // await FS.truncate('./stdout.log', 1024);

    // await FS.unlink('./stdout.log');

    // const watcher = await FS.watch('./stdout.log1');
    // for await (const item of watcher) {
    //     console.log(item.filename);
        
    // }

    await FS.writeFile('./stdout.log', 'hhhh');
}
(async () => {
    await test();
})();