Function.prototype.myApply=(context)=>{
//  if(typeof this !== 'function'){
//     throw  error("Error");
//  }
 let result = null
 context = context || window

 context.fn = this
 if(arguments[1]){
   result = context.fn(...arguments[1])
 } else {
  result=  context.fn()
 }
 delete context.fn
 return result 
}

let a=0
function test (){
    console.log(this.a)
}
function d (){
    console.log(this.a);
}
var o = {}
o.a=1
o.m = test
o.m.myApply(o)