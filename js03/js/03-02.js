let score = Number(prompt('점수를 입력해주세요. (0~100)'));

if (score == 100) {
    alert('A+학점입니다.')
} else if (score >= 90) {
    alert('A학점입니다.')
} else if (score >= 80) {
    alert('B학점입니다.')
} else if (score >= 70) {
    alert('C학점입니다.')
} else if (score >= 60) {
    alert('D학점입니다.')
} else {
    alert('F학점입니다.')
}

if (score >= 80) {
    alert('합격입니다.')
}

if (score == 100) {
    document.write("A+학점입니다.")
}
if ((score < 100) && (score >= 90)) {
    document.write("A학점입니다.")
}
if ((score < 90) && (score >= 80)) {
    document.write("B학점입니다.")
}
if ((score < 80) && (score >= 70)) {
    document.write("C학점입니다.")
}
if ((score < 70) && (score >= 60)) {
    document.write("D학점입니다.")
}
if ((score < 60)) {
    document.write("F학점입니다.")
}
