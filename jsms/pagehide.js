let start=''
let end= ''
console.log(!1 == !"1",'!1 == !"1"');
console.log(!!"1",'!!"1"');

window.addEventListener('pageshow',()=>{
    // let start = JSON.stringify()
    start=new Date().getTime()
    localStorage.setItem('starttime',start+'')
})
window.addEventListener('pagehide',()=>{
    end=new Date().getTime()
    localStorage.setItem('endtime',end+'')
    localStorage.setItem('time',new Date(start-end)+'')

})
let time = new Date(start-end)
console.log(time,'time');