let boolean = prompt("값을 입력하세요.");
let table = "";
table += `<table>`
table += `   <tr>`
table += `       <th>boolean</th>`
table += `       <th colspan="2">논리연산자</th>`
table += `       <th>결과</th>`
table += ` </tr>`
table += `   <tr>`
table += `       <td>${boolean}</td>`
table += `       <td>&&</td>`
table += `       <td>false</td>`
table += `       <td>${boolean && false}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${boolean}</td>`
table += `       <td>&&</td>`
table += `       <td>false</td>`
table += `       <td>${boolean && true}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${boolean}</td>`
table += `       <td>||</td>`
table += `       <td>false</td>`
table += `       <td>${boolean || false}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${boolean}</td>`
table += `       <td>||</td>`
table += `       <td>true</td>`
table += `       <td>${boolean || true}</td>`
table += `   </tr>`
table += `</table>`

document.write(table);