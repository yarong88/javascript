let times_table = prompt('2~9 사이의 숫자를 입력해주십시오.')
// let times_table = Number(prompt('')) : 바로 숫자형으로 받을 수 있게
// alt shift : 여러줄에 같은 위치에서 동시에 수정
// ctrl d 같은 글자를 선택하게 해줌

let a = 1
let b = 1
let table = "";
table += `<h3>${times_table}단 구구단입니다.</h3>`
table += `<table>`
table += `   <tr>`
table += `       <th>단</th>`
table += `       <th>수식</th>`
table += `       <th>결과</th>`
table += ` </tr>`
table += `   <tr>`
table += `       <td rowspan="9">${times_table}단</td>`
table += `       <td>${times_table}X${a++}</td>`
table += `       <td>${Number(times_table)*b++}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${times_table}X${a++}</td>`
table += `       <td>${Number(times_table)*b++}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${times_table}X${a++}</td>`
table += `       <td>${Number(times_table)*b++}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${times_table}X${a++}</td>`
table += `       <td>${Number(times_table)*b++}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${times_table}X${a++}</td>`
table += `       <td>${Number(times_table)*b++}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${times_table}X${a++}</td>`
table += `       <td>${Number(times_table)*b++}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${times_table}X${a++}</td>`
table += `       <td>${Number(times_table)*b++}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${times_table}X${a++}</td>`
table += `       <td>${Number(times_table)*b++}</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td>${times_table}X${a++}</td>`
table += `       <td>${Number(times_table)*b++}</td>`
table += `   </tr>`
table += `</table>`

document.write(table);