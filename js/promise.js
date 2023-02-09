const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class myPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存储成功的回调
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = (value) => {
      // 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
      if (value instanceof myPromise) {
        return value.then(resolve, reject);
      }
      // 保证代码的执行顺序为本轮事件循环的末尾
      setTimeout(() => {
        // 只有状态为 pending 时才能转变，
        if (this.state === PENDING) {
          // 修改状态
          this.state = RESOLVED;

          // 设置传入的值
          this.value = value;

          // 执行回调函数
          this.onResolvedCallbacks.forEach((callback) => {
            callback(value);
          });
        }
      }, 0);
    };
    let reject = (reason) => {
      // 保证代码的执行顺序为本轮事件循环的末尾
      setTimeout(() => {
        // 只有状态为 pending 时才能转变
        if (this.state === PENDING) {
          // 修改状态
          this.state = REJECTED;

          // 设置传入的值
          this.value = value;

          // 执行回调函数
          this.onRejectedCallbacks.forEach((callback) => {
            callback(value);
          });
        }
      }, 0);
    };
    try {
      console.log(1);
      executor(resolve, reject);
    } catch {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    console.log(onFulfilled, "onFulfilled");
    console.log(onRejected, "onRejected");
    console.log(this.status, "this.status ");

    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}
export default myPromise;
