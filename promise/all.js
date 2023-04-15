function myAll(promises){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)){
            throw new error('请输入数组')
        }
        let result =[]
        let num = promises.length
        let index=0
        for(let i= 0;i<num;i++){
        Promise.resolve(promises[i]).then(value=>{
            index++
            result[i]=value
            if(index==num){
               return resolve(result)
            }
        },error=>{
           return reject(error)
        })
        }
    })
}
const p1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1)
        },1000)
    })
}
const p2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2)
        },2000)
    })
}      

myAll([p1(),p2()]).then(res=>{
    console.log(res,'ree');
})