let korean_score = Number(prompt('국어점수를 입력해주십시오.'))
let math_score = Number(prompt('수학점수를 입력해주십시오.'))
let science_score = Number(prompt('국어점수를 입력해주십시오.'))

alert('평균점수는 '+ ((korean_score+math_score+science_score)/3) + '점 입니다.')

if ((korean_score>=70) && (math_score>50) && (science_score>=80)) {alert("축하합니다!합격입니다!")};
if (((korean_score>=70) && (math_score>50) && (science_score>=80)) == false) {alert("안타깝습니다.불합격입니다.")};

let pass = ""
pass += `<h3>입력하신 점수는 아래와 같습니다.</h3>`
pass += `<table><tr><th>과목</th><th>점수</th><th>평균</th></tr><tr><td>국어</td><td>${korean_score}점</td><td rowspan="3">${(korean_score+math_score+science_score)/3}점</td></tr><tr><td>수학</td><td>${math_score}점</td></tr><tr><td>과학</td><td>${science_score}점</td></tr></table>`
pass += `<h3>국어 점수가 70점이상, 수학 점수가 50점 이상 <br> 그리고 과학 점수가 80점 이상입니까?</h3>`
pass += `<h2>${(korean_score>=70) && (math_score>50) && (science_score>=80)}</h2>`
// pass += `<h2>${notice}</h2>`

document.write(pass)

// let good = ""
// good += `<h2>축하합니다! 합격입니다!!</h3>`

// if ((korean_score>=70) && (math_score>50) && (science_score>=80)) {document.write(good)}

// let sad = ""
// sad += `<h2>안타깝습니다... 불합격입니다.</h3>`

// if ((korean_score>=70) && (math_score>50) && (science_score>=80) == false) {document.write(sad)}
