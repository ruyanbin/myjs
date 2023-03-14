function feth(n) {
    console.log(13);
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(n)
        },2000)
    })
}
function myrequest(urls, num) {
return new Promise((resolve) => {
  if (urls.length === 0) {
    resolve([]);
    return;
  }
  const result = [];
  let index = 0;
  let count = 0;
  // 发送请求
  async function request() {
    if (index === urls.length) return;
    const i = index;
    const url = urls[index];
    index++;
    try {
      const res = await feth(url);
      result[i] = res;
    } catch (err) {
      result[i] = err;
    } finally {
      // 判断完成
      count++;
      if (count === urls.length) {
        resolve(result);
      }
      request();
    }
  }
  const times = Math.min(urls.length, num);
  for (let i = 0; i < times; i++) {
    request();
  }
});
}
const arr = [];
for (let a = 1; a < 100; a++) {
arr.push(a);
}
console.log(arr,'arr')
myrequest(arr, 10).then((res) => {
console.log(res, "res");
});