let radius = prompt("반지름의 길이(m)를 적으십시오.");


let table = "";
table += `<h3>원의 둘레와 넓이를 구해보자.</h3>`
table += `<h4>반지름 = ${radius}m</h4>`
table += `<table>`
table += `   <tr>`
table += `       <th colspan="2"></th>`
table += `       <th>수식</th>`
table += `       <th>결과</th>`
table += ` </tr>`
table += `   <tr>`
table += `       <td><div class="diameter"></div></td>`
table += `       <td>원의 둘레</td>`
table += `       <td>2*&pi;*r</td>`
table += `       <td>${2*3.14*Number(radius)}m</td>`
table += `   </tr>`
table += `   <tr>`
table += `       <td><div class="circle"></div></td>`
table += `       <td>원의 넓이</td>`
table += `       <td>&pi;*r<sup>2</sup></td>`
table += `       <td>${3.14*Number(radius)*Number(radius)}m<sup>2</sup></td>`
table += `   </tr>`
table += `</table>`
table += `<h3>원의 둘레는 ${2*3.14*Number(radius)}m이며 넓이는 ${3.14*Number(radius)*Number(radius)}m<sup>2</sup>입니다.</h3>`

document.write(table);