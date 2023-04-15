var findGCD = function (nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    f(max,min)
    return run(max, min)
  };
  function run (a, b) {
    if (a % b === 0) return b
    return run(b, a % b)
  }
  const arr=[2,5,6,9,10]
  const nums = [7,5,6,8,3]
  function f(m , n){
    return m % n == 0 ? (n) : (f( n , m % n )) ;
}
  console.log(findGCD(arr));
  console.log(findGCD(nums));
