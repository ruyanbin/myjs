export function ParallelRequest(urls,num){
   return new Promise((resolve,reject)=>{
    if(urls.length===0){
        resolve([])
        return
    } 
    const result=[]
    let index=0
    const count=0
    // 发送请求
    async function request(){
        if(index === urls.length) return 
        const i = index
        const url=urls[index]
        index++
        try {
            const res = await fetch(url)
            result[i]=res

        } catch (error){
            result[i] = err
        } finally{
            // 判断完成
            count++
            if(count === urls){
                resolve(result)
            }
            request()
        }
    }
    const times = Math.min(urls.length,num)
    for(let i=0;i<times;i++){
        request()
    }
   }) 
}