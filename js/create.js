// 1. 手写 Object.create
// 思路：将传入的对象作为原型
export function create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
