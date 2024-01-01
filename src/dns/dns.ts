import { log } from 'console';
import * as DNS from 'dns/promises';
const hostname = 'baidu.com';

async function test(): Promise<void> {
    const resolve = await DNS.resolve(hostname);
    console.log('resolve: ', resolve);
    const resolve4 = await DNS.resolve4(hostname);
    console.log('resolve4: ', resolve4);
    // const resolve6 = await DNS.resolve6(hostname);
    // console.log('resolve6: ', resolve6);
    const resolveAny = await DNS.resolveAny(hostname);
    console.log('resolveAny: ', resolveAny);
    // const resolveCaa = await DNS.resolveCaa(hostname);
    // console.log('resolveCaa: ', resolveCaa);
    
    // const resolveCname = await DNS.resolveCname(hostname);
    // console.log('resolveCname: ', resolveCname);
    
    // const resolveMx = await DNS.resolveMx(hostname);
    // console.log('resolveMx: ', resolveMx);
    
    // const resolveNaptr = await DNS.resolveNaptr(hostname);
    // console.log('resolveNaptr: ', resolveNaptr);
    
    // const resolveNs = await DNS.resolveNs(hostname);
    // console.log('resolveNs: ', resolveNs);
    
    // const resolvePtr = await DNS.resolvePtr(hostname);
    // console.log('resolvePtr: ', resolvePtr);
    
    // const resolveSoa = await DNS.resolveSoa(hostname);
    // console.log('resolveSoa: ', resolveSoa);
    
    // const resolveSrv = await DNS.resolveSrv(hostname);
    // console.log('resolveSrv: ', resolveSrv);
    
    const resolveTxt = await DNS.resolveTxt(hostname);
    console.log('resolveTxt: ', resolveTxt);
    
    const getServers = await DNS.getServers();
    console.log('getServers: ', getServers);
    
    
    
    
}

(async () => {
    await test();
})();
