// 在调用 new 的过程中会发生以上四件事情：

//（1）首先创建了一个新的空对象。

// （2）设置原型，将对象的原型设置为函数的 prototype 对象。

// （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）

//（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
export function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  console.log(constructor, "constructor");
  // 判断是否为函数
  if (typeof constructor !== "function") {
    console.log("error");
    return;
  }
  console.log(2, "2");
  // 新建一个空对象 将对象的原型为构造函数的prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将this 指向新建的对象
  result = constructor.apply(newObject, arguments);
  // 判断返回队形
  let flag = result && (typeof result === "object" || typeof result === "function");
  // 判断返回对象
  return flag ? result : newObject;
}
export function myNew(Fun, ...args) {
  // 1创建一个新对象
  let obj = {};
  // 2.把新对象的原型指针指向构造函数的原型属性
  obj.__proto__ = Fun.prototype;
  // 3 改变this的指向 并执行构造函数内部的代码
  let res = Fun.apply(obj, args);
  // 判断函数执行结果的类型
  if (res instanceof Object) {
    return res;
  } else {
    return obj;
  }
}
