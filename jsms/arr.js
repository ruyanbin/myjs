/**
 * 改变原数组的方法
 */
const arr=[1,2,3,4,5]
/**
 * push 可以在数组的最后面,添加一个或者多个元素
 * 结构: arr.push(值)
* 返回值:返回的是添加元素后数组的长度
 */
const arrpush=arr.push(6,7)
console.log(arrpush,'push');
/**
 * pop
 * 该方法可以在数组的最后面,删除一个元素
 * arr.pop()
 * 返回的是刚才删除的元素.
 */
const arrpop = arr.pop(2)
console.log(arrpop,'pop');
/**
 * unshift
 * 在数组的最前面,添加一个或者几个元素
 *  arr.unshift(值)
 * 返回的是添加元素后数组的长度
 */
const arrunshift = arr.unshift(8,9)
console.log(arrunshift,'unshift');
/**
 * shift
 * 在数组的最前面,删除一个元素
 *  arr.shift(值)
 * 返回的是添加元素后数组的长度
 */
console.log(arr,'arr-');
const arrshift=arr.shift(2)
console.log(arrshift,'shift');
/**
 * shift
 * 在数组的最前面,删除一个元素
 *  arr.shift(值)
 * 返回的是刚才删除的元素.
 */
/**
 * 不改变原数组的方法
 */
