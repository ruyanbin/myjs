function multiply(num1,num2){
let arr1 = num1.split('')
let arr2 = num2.split('')

let l1 = arr1.length
let l2 = arr2.length
let res = new Array(l1 + l2).fill(0)

console.log(l1,'arr2',l2);
for(let i=l1-1;i>=0;i--){
    for(let j=l2-1;j>=0;j--){
        let mul=arr1[i]*arr2[j]
        let index1 = i+j
        let index2 = i+j+1
        let sum = mul + res[index2]
        res[index1] += Math.floor(sum / 10)
        res[index2] = sum % 10
    }
}
if (res[0] === 0) res.shift()
return res.join("")
}
// console.log(multiply('2','3'));
console.log(multiply('123','456'));
