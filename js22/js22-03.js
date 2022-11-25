document.addEventListener("DOMContentLoaded",() => {
    const Light_cover = document.createElement('div')
    const green_light = document.createElement('div')
    const yellow_light = document.createElement('div')
    const red_light = document.createElement('div')
    const button_st = document.createElement('button')
    const button_end = document.createElement('button')

    document.body.appendChild(Light_cover)
    Light_cover.appendChild(green_light)
    Light_cover.appendChild(yellow_light)
    Light_cover.appendChild(red_light)
    document.body.appendChild(button_st)
    document.body.appendChild(button_end)

    Light_cover.style.width = `100px`
    Light_cover.style.height = `300px`
    Light_cover.style.backgroundColor = 'black'
    green_light.style.width = `100px`
    green_light.style.height = `100px`
    green_light.style.backgroundColor = 'gray'
    green_light.style.borderRadius = '50px'
    yellow_light.style.width = `100px`
    yellow_light.style.height = `100px`
    yellow_light.style.backgroundColor = 'gray'
    yellow_light.style.borderRadius = '50px'
    red_light.style.width = `100px`
    red_light.style.height = `100px`
    red_light.style.backgroundColor = 'gray'
    red_light.style.borderRadius = '50px'

    button_st.textContent = '시작'
    button_end.textContent = '정지'

    green_light.setAttribute('id','green_light')    
    yellow_light.setAttribute('id','yellow_light')    
    red_light.setAttribute('id','red_light')    
    button_st.setAttribute('onclick','light_green()')
    button_end.setAttribute('onclick','reset_b()')
    // button.addEventListener('click',fn)
    
})


const light_green =_=> {        
    green_light.style.backgroundColor = 'green'
    yellow_light.style.backgroundColor = 'gray'
    red_light.style.backgroundColor = 'gray'
    this.green = setTimeout(light_yellow01,5000)
}
const light_yellow01 =_=> {        
    green_light.style.backgroundColor = 'gray'
    yellow_light.style.backgroundColor = 'yellow'
    red_light.style.backgroundColor = 'gray'
    this.yellow01 = setTimeout(light_red,2000)
}
const light_red =_=> {        
    green_light.style.backgroundColor = 'gray'
    yellow_light.style.backgroundColor = 'gray'
    red_light.style.backgroundColor = 'red'
    this.red = setTimeout(light_yellow02,3000)
}
const light_yellow02 =_=> {        
    green_light.style.backgroundColor = 'gray'
    yellow_light.style.backgroundColor = 'yellow'
    red_light.style.backgroundColor = 'gray'
    this.yellow02 = setTimeout(light_green,2000)
}

const reset_b =_=> {
    clearTimeout(this.green)
    clearTimeout(this.yellow01)
    clearTimeout(this.red)
    clearTimeout(this.yellow02)
}