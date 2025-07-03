//input 상자 접근
let uId = document.querySelector('#user-id');
let pw1 = document.querySelector('#user-pw1');
let pwc = document.querySelector('#user-pw2');

//입력상자에 값이 바뀌는 이벤트 발생하면 이벤트 핸들러 연결
uId.onchange = idchc;
pw1.onchange = pwchc;
pwc.onchange = pwcompare;

// id 길이 체크
function idchc() {
  let idlen = uId.value.length;
  if (idlen < 3 || idlen > 10) {
    alert('3글자 이상 10글자 이하 입력하시오.');
    uId.select();
  }
}

//비밀번호 길이 체크
function pwchc() {
  let pwlen = pw1.value.length;
  if (pwlen < 4) {
    alert('4글자 이상 입력하시오.');
    pw1.value = '';
    pw1.focus();
}
}


// 비밀번호가 맞는지 확인
function pwcompare() {
  if(pw1.value != pwc.value){
    alert('비밀번호가 일치하지 않습니다.');
    pwc.value = '';
    pwc.focus();
  }
}