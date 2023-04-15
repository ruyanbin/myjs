Function.prototype.myBind=function (context){
    if(typeof this !== 'function'){
        console.log('错误')
        return
    }
    let args = [...arguments].slice(1)
    let fn=this
    return function Fn(){
        return fn.apply(
            this instanceof Fn?this:context,
            args.concat(...arguments)
        )
    }
}
var name = '小王',age="17"
var obj={
    name:"小明",
    myfunction:function(){
        console.log(this.name + ' 年龄'+this.age)
    }
}
console.log(obj.myfunction(),'myfunction')
var bd={
    name:'林克',age:"20"
}
 obj.myfunction.myBind(bd)()