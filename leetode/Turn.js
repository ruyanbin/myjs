function reverseVowels(s){
    const n = s.length
 const arr = Array.from(s)
 let i=0,j=n-1
 while(i<j){
    while(i<n&&!isVodel(arr[i])){
        i++
    }
    while(j<n&&!isVodel(s[j])){
        --j
    }
    if(i<j){
        swap(arr,i,j)
        ++i
        --j
    }
    return arr.join('');
 }

}
function isVodel(ch){
    return 'aeiouAEIOU'.includes(ch)
}
const swap=(arr,i,j)=>{
    const tmp=arr[i]
    arr[i]=arr[j]
    arr[j]=tmp
}
s = "hello"
console.log(reverseVowels(s));