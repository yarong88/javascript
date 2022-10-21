let a

let table = "";
table += `<table>`
table += `   <tr>`
table += `       <th>자료값</th>`
table += `       <th>Boolean 연산자</th>`
table += `       <th>결과</th>`
table += ` </tr>`
table += `   <tr>`
table += `       <td>0</td>`
table += `       <td>Boolean(0)</td>`
table += `       <td>${Boolean(0)}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>NaN</td>`
table += `       <td>Boolean(NaN)</td>`
table += `       <td>${Boolean(NaN)}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>""</td>`
table += `       <td>Boolean("")</td>`
table += `       <td>${Boolean("")}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>null</td>`
table += `       <td>Boolean(null)</td>`
table += `       <td>${Boolean(null)}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>undefined된 변수, let a undefined</td>`
table += `       <td>Boolean(a)</td>`
table += `       <td>${Boolean(a)}</td>`
table += `   </tr>`
table += `</table>`

document.write(table);