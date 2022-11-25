document.addEventListener("DOMContentLoaded", () => {
    const div01 = document.createElement('div')
    const div02 = document.createElement('div')
    const hr01 = document.createElement('hr')
    const h01 = document.createElement('h1')
    const h02 = document.createElement('h1')
    const h03 = document.createElement('h1')

    document.body.appendChild(div01)
    document.body.appendChild(hr01)
    document.body.appendChild(div02)
    div01.appendChild(h01)
    div02.appendChild(h02)

    div01.setAttribute('id','first')
    div02.setAttribute('id','second')

    h01.textContent = '첫 번째 div 태그 내부'
    h02.textContent = '두 번째 div 태그 내부'
    h03.textContent = '이동하는 h1 태그'
    h03.style.color = 'red'

    
const div_on =_=> {
    div01.appendChild(h03)
    setTimeout(div_off,1000)
}
const div_off =_=> {
    div02.appendChild(h03)
    setTimeout(div_on,1000)
}
div_on()
})
