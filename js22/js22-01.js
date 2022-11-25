document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement('h1');
    document.body.appendChild(header);
    header.textContent = '다음 html 형식을 JS로 작성하시오.';

    const div01 = document.createElement('div');
    document.body.appendChild(div01);
    div01.setAttribute('class', 'c1');

    const span01 = document.createElement('span');
    div01.appendChild(span01);
    span01.textContent = '1.문서 객체 생성하기'
    const span02 = document.createElement('span')
    div01.appendChild(span02)
    span02.textContent = '그리고 추가하기'

    const div02 = document.createElement('div')
    document.body.appendChild(div02)
    div02.setAttribute('class', 'c2')

    const ul01 = document.createElement('ul')
    div02.appendChild(ul01)

    const li01 = document.createElement('li')
    ul01.appendChild(li01)
    li01.textContent = '생성하고'
    const li02 = document.createElement('li')
    ul01.appendChild(li02)
    li02.textContent = '추가하고'
    const li03 = document.createElement('li')
    ul01.appendChild(li03)
    li03.textContent = '문서읽고'

    const span03 = document.createElement('span')
    document.body.appendChild(span03)
    const a01 = document.createElement('a')
    span03.appendChild(a01)
    a01.setAttribute('href', 'www.naver.com')
    a01.innerHTML = `네이버링크<br>`

    const span04 = document.createElement('span')
    document.body.appendChild(span04)
    const a02 = document.createElement('a')
    span04.appendChild(a02)
    a02.setAttribute('href', 'www.daum.net')
    a02.textContent = '다음링크'

    const div03 = document.createElement('div');
    const div04 = document.createElement('div');
    const div05 = document.createElement('div');
    const div06 = document.createElement('div');
    const div07 = document.createElement('div');
    const div08 = document.createElement('div');

    document.body.append(div03,div04,div05,div06,div07,div08)
    div03.textContent = '안'
    div04.textContent = '녕'
    div05.textContent = '하'
    div06.textContent = '세'
    div07.textContent = '요'

    const ul02 = document.createElement('ul')
    const li04 = document.createElement('li')
    const li05 = document.createElement('li')
    const li06 = document.createElement('li')
    div08.appendChild(ul02).append(li04,li05,li06)
    li04.textContent = '굿'
    li05.textContent = '나'
    li06.textContent = '잇'
})