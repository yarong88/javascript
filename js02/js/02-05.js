let exchange = prompt('달러의 원화 환률(원)을 적어주십시오.')
let money = prompt('환전할 달러의 액수(달러)를 적어주십시오.')

let table = "";
table += `<h3>달러를 원화로 환전합니다.</h3>`
table += `<table>`
table += `   <tr>`
table += `       <th>달러</th>`
table += `       <th>환률</th>`
table += `       <th>원</th>`
table += ` </tr>`
table += `   <tr>`
table += `       <td>${Number(money)}달러</td>`
table += `       <td>${exchange}</td>`
table += `       <td>${Number(money)*Number(exchange)}원</td>`
table += `   </tr>`
table += `</table>`
table += `<h3>${Number(money)}달러를 ${Number(money)*Number(exchange)}원으로 환전했습니다.</h3>`

document.write(table);