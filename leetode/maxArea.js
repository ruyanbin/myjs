function maxArea(height){
 let maxArea = 0
 let left=0
 let right=height.length-1

 while(left<right){
    const current = (right-left)*Math.min(height[left],height[right])
    console.log(current,'current');
     maxArea=Math.max(current,maxArea)
     if(height[left]<height[right]){
        left++
     } else {
        right--
     }
}
return maxArea
}
let arr=[1,8,6,2,5,4,8,3,7]

console.log(maxArea(arr),'maxArea(arr)');