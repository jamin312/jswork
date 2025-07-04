// 입력상자와 버튼에 접근
let btitle = document.querySelector('#book');
let aBtn = document.querySelector('#add');

// 도서 목록 저장 배열 생성
let books = [];

// 추가 버튼에 클릭 이벤트 연결
aBtn.onclick = addBook;

// 배열에 도서 목록 추가
function addBook() {
  if (btitle.value == "") {
    alert('책제목을 입력하세요');
  } else if (books.indexOf(btitle.value) != -1) {
    alert('중복된 책제목입니다');
  } else {
    books.push(btitle.value);
  }
  btitle.value = "";
  btitle.focus();
  show();
}


// 문서에 도서목록 출력(<ul><li>)
function show() {
  let list = `<ul>`;
  for (let i = 0; i < books.length; i++) {
    list += `<li>${books[i]}
    <span class = 'del' id = ${i}>삭제</span>
    </li>`;
  }
  list += `</ul>`;

  document.querySelector('#bookList').innerHTML = list;
  
  let delList = document.querySelectorAll('.del');
  // console.log(delList);
  for(let ele of delList){
    ele.onclick = remove;
  }

}



// 문서에 도서 목록 삭제
function remove() {
 let delNum = this.getAttribute('id');
 books.splice(delNum,1);
 show();
}

