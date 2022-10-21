let boolean = prompt("true 혹은 false를 입력하세요.");

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
table += `       <td>${false && boolean}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${boolean}</td>`
table += `       <td>&&</td>`
table += `       <td>true</td>`
table += `       <td>${true && boolean}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${boolean}</td>`
table += `       <td>||</td>`
table += `       <td>false</td>`
table += `       <td>${false || boolean}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${boolean}</td>`
table += `       <td>||</td>`
table += `       <td>true</td>`
table += `       <td>${true || boolean}</td>`
table += `   </tr>`
table += `</table>`

// 논리 연산 중 순서가 중요한데 왜 그런지는 아직 정확하게 이해 못함..

document.write(table);