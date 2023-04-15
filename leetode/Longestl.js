function lengthOfLongestSubstring(s){
    const occ = new Set()
    const n = s.length
    let rk = -1;ans = 0

    for(let i=0;i<n;i++){
        if(i!=0){
            occ.delete(s.charAt(i-1))
        }
        while(rk+1<n&&!occ.has(s.charAt(rk+1))){
            occ.add(s.charAt(rk+1))
            ++rk

        }
        ans = Math.max(ans,rk-i+1)
    }
    return ans
}
var lengthOfLongestSubstr = function(s) {
    let res = []
    let max = 0
    for (let str of s) {
      while (res.includes(str)) {
        res.shift()
      }
      res.push(str)
      max = Math.max(max,res.length)
    }
    return max
  };

let s ="abcabcbb"
console.log(lengthOfLongestSubstring(s),'lengthOfLongestSubstring');
console.log(lengthOfLongestSubstr(s),'lengthOfLongestSubstr');
/**
 * 回文字符串
 */
function hw(s){
    let res=""
    for(let i=0;i<s.length;i++){
        let s1 =pa(s,i,i)
        let s2 =pa(s,i,i+1)
        res = res.length>s1.length?res:s1
        console.log(res,'res');
        res = res.length>s2.length?res:s2
        console.log(res,'res2');
    }
    return res
}
function pa(s,l,r){
    while(l>=0&&r<s.length&&s[l]==s[r]){
        l--;r++
    }
    return s.slice(l,r)
}
console.log(hw('123321'));