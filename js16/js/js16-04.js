const id1 = setTimeout(()=>{
    alert('펑!')
},6200)
let count = 6;
const id2 = setInterval(()=>{
    count--
    console.log(`${count}!`)}
    ,1000)

setTimeout(()=>{
    clearTimeout(id1)
    clearInterval(id2)
},6500)