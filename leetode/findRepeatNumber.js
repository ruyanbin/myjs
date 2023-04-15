const findRepeatNumber=(nums)=>{
 let ans = new Map()
 for(let i of nums){
    if(ans.has(i)){
        return i
    } else {
        ans.set(i,1)
    }
 }
}
let arr = [2, 3, 1, 0, 2, 5, 3]
let a =findRepeatNumber(arr)
console.log(a,'a');

const findNumberIn2DArray=(nums,target)=>{
 let i = nums.length-1
 let j=0
 while(i>=0&&j<nums[0].length-1){
     if(nums[i][j]>target){
        i--
    } else if(nums[i][j]<target){
        j++
    } else return true
 }
 return false
}


let nums=[
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  
console.log(findNumberIn2DArray(nums,5));