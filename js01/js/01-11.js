let number = prompt("값을 입력하세요.");
let table = "";
table += `<table>`
table += `   <tr>`
table += `       <th>증감연산자</th>`
table += `       <th>설명</th>`
table += `       <th>예제 let number = ${number}</th>`
table += `       <th>순서</th>`
table += ` </tr>`
table += `   <tr>`
table += `       <td>변수++</td>`
table += `       <td>기존의 변수 값에 1을 더합니다. (후위)</td>`
table += `       <td>alert(number++) = ${number++}</td>`
table += `       <td>1</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>++변수</td>`
table += `       <td>기존의 변수 값에 1을 더합니다. (전위)</td>`
table += `       <td>alert(++number) = ${++number}</td>`
table += `       <td>2</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>변수--</td>`
table += `       <td>기존의 변수 값에 1을 뺍니다. (후위)</td>`
table += `       <td>alert(number--) = ${number--}</td>`
table += `       <td>3</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>변수++</td>`
table += `       <td>기존의 변수 값에 1을 뺍니다. (전위)</td>`
table += `       <td>alert(--number) = ${--number}</td>`
table += `       <td>4</td>`
table += `   </tr>`
table += `</table>`

document.write(table);