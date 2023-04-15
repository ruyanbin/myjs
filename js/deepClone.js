export function deepClone(obj){
    return new Promise((resolve,reject)=>{
        const {port1,port2} = new MessageChannel()
        port1.postMessage(obj)
        port2.onmessage = (msg)=>{
            resolve(msg.data)
        }
    })
}