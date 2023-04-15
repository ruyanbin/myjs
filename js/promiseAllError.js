/**
 * promise.all 中出现错误如何获取结果
 * 使用promise.all 实现promise.allSettled
 */

export function promiseAllError(promises){
        return Promise.all(
      promises.map(function (promise) {
        return promise()
          .then(function (value) {
            return { state: 'fulfilled', value: value }
          })
          .catch(function (reason) {
            return { state: 'rejected', reason: reason }
          })
      }),
    )

}

