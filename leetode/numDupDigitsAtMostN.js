const numDupDigitsAtMostN=(n)=>{
    const sn=''+n
    dp = new Array(sn.length).fill(0).map(()=>new Array(1<<10).fill(-1))

    const f = (mask,an,i,same)=>{
        if(i===sn.length){
            return 1
        }
        if(!same && dp[i][mask]>=0){
            return dp[i][mask]
        }
        let res =0,t=same?(sn[i].charCodeAt()-'0'.charCodeAt()):9
        for (let k = 0; k <= t; k++) {
            if ((mask & (1 << k)) !== 0) {
                continue;
            }
            res += f(mask === 0 && k === 0 ? mask : mask | (1 << k), sn, i + 1, same && k === t);
        }
        if (!same) {
            dp[i][mask] = res;
        }
        return res;
    };
    return n + 1 - f(0, sn, 0, true);

        
    
}
console.log(numDupDigitsAtMostN(20),'10');
