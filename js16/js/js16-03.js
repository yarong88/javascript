const id1 = setTimeout(()=>{
    console.log('5초뒤에 실행됨')
},5001)
let count = 0;
const id2 = setInterval(()=>{
    count++
    console.log(`[${count}번째] 1초마다 실행됨`)}
    ,1000)

setTimeout(()=>{
    clearTimeout(id1)
    clearInterval(id2)
},8000)