// 크롬은 text를 감소 시키는데 제한이 있다. 일정 크기보다 작아지면 더이상 적용안된다.

// 문서에서 선택한 요소노드(객체) 참조
var page_header  = query('.page-header');
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');
var change_text = 10;
var limit_up = 46;
var limit_down = 12;


function changeTextSize() {
  // page_header의 글자 크기를 키운다.
  // 글자 크기를 연산이 가능하도록 변경
  // console.log(this); // 클릭한 해당 요소를 가르킨다.
  // console.log(this.firstChild); // "+" , "-"
  // console.log(this.firstChild.nodeValue); // + , -

  var operator = this.firstChild.nodeValue;
  var _change_text = change_text;

  // var current_size = parseInt(page_header.style.fontSize);
  var current_size = parseInt( getStyle(page_header, 'font-size') );

  if (operator === '+') {
    _current_text = current_size + change_text;
  } else {
    _current_text = current_size - change_text;
  }
  // 글자 크기를 변경(키움)하여 해당 요소에 설정
  if ( _current_text > limit_up || _current_text < limit_down) {
    _current_text = current_size;
  }

  page_header.style.fontSize = _current_text + 'px';
  // console.log(page_header.style.fontSize);
};


// page_header 요소 객체의 글자 크기 초기화
// page_header.style.fontSize = '16px';

// 버튼에 이벤트 핸들링(핸들러 - 바인딩)
increase_btn.onclick = changeTextSize;
decrease_btn.onclick = changeTextSize;


// decrease_btn.onclick = function() {
//   // page_header의 글자 크기를 줄인다.
//   var current_size = parseInt(page_header.style.fontSize);
//  page_header.style.fontSize = current_size + -5 + 'px';
// };

// ------------------------------------------------
// 대괄호 표기법
// ------------------------------------------------
// getStyle(el, 'outline')

// 펜.색상
// 펜.길이
// 펜.용도
// 펜.가격
// 펜.종료

// 속성 = '색상';

// 펜[속성]


