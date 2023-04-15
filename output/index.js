// const promise = new Promise((resolve,reject)=>{
//     console.log(1);
//     console.log(2);
// })
// promise.then(()=>{
//     console.log(3);
// })
// console.log(4);
// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise1')
//     resolve('resolve1')
//   })
//   const promise2 = promise1.then(res => {
//     console.log(res)
//   })
//   console.log('1', promise1);
//   console.log('2', promise2);

// console.log('a');
// let a=new Date()
// setTimeout(()=>{
//     console.log('b');
// },1000)

// while(new Date()-a<1000){}

// console.log('c');
// setTimeout(()=>{
// console.log('d');
// },0)
// new Promise((resolve,reject)=>{
//     console.log('e');
//     // fa.b('21323')
//     resolve()
// }).then(()=>{
//     console.log('f');
// })
// console.log('g');
// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 1000)
  })
  const promise2 = promise1.then(() => {
    throw new Error('error!!!')
  })
  console.log('promise1', promise1)
  console.log('promise2', promise2)
  setTimeout(() => {
    console.log('promise1', promise1)
    console.log('promise2', promise2)
  }, 2000)