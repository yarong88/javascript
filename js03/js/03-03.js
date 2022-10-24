let temper = Number(prompt('지금 온도를 입력해주십시오.'))
let condition
let check01
let check02
let check03
let check04
let check05

if (temper >= 32) {
    condition = '정상온도를 벗어났습니다.', check05 = '체크', check03 = "", check04 = "", check01 = "", check02 = ""
} else if (temper >= 28) {
    condition = '다소 갑갑합니다.', check04 = '체크', check01 = "", check02 = "", check03 = "", check05 = ""
} else if (temper >= 22) {
    condition = '보통입니다.', check03 = '체크', check04 = "", check01 = "", check02 = "", check05 = ""
} else if (temper >= 16) {
    condition = '시원합니다.', check02 = '체크', check04 = "", check01 = "", check03 = "", check05 = ""
} else {
    condition = '정상온도를 벗어났습니다.', check01 = '체크', check04 = "", check02 = "", check03 = "", check05 = ""
}

let table = "";
table += `<table>`
table += `   <tr>`
table += `       <th>16미만</th>`
table += `       <th>16이상 22미만</th>`
table += `       <th>22이상 28미만</th>`
table += `       <th>28이상 32미만</th>`
table += `       <th>32이상</th>`
table += ` </tr>`
table += `   <tr>`
table += `       <td class="temper01">${check01}</td>`
table += `       <td class="temper02">${check02}</td>`
table += `       <td class="temper03">${check03}</td>`
table += `       <td class="temper04">${check04}</td>`
table += `       <td class="temper05">${check05}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>정상온도를 벗어났습니다.</td>`
table += `       <td>시원하네요</td>`
table += `       <td>보통이에요</td>`
table += `       <td>다소 갑갑하네요.</td>`
table += `       <td>정상온도를 벗어났습니다.</td>`
table += `   </tr>`
table += `</table>`

alert(`지금 온도는 ${temper}도 이며, ${condition}`)

document.write(`지금 온도는 ${temper}도 이며, ${condition}`)

document.write(table)
