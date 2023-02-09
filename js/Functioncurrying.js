export function curryes5(fn, args) {
  //获取函数需要的参数长度
  let length = fn.lengtha;
  args = args || [];
  return function () {
    let subArgs = args.slice(0);
    // 拼接的到现有的所有参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }
    // 判断参数长度是否满足函数所需参数的长度
    if (subArgs.length >= length) {
      //如果满足
      return fn.apply(this, subArgs);
    } else {
      // 不满足
      return curryes5.call(this, fn, subArgs);
    }
  };
}
export function curryes6(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curryes6.bind(null, fn, ...args);
}
