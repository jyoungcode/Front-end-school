/*! js-anim.js © yamoo9.net, 2016 */

// -----------------------------------
// ToDoList
// -----------------------------------
// 1. 문서에서 `.demo-box` 요소를 선택한다.
// 2. `.demo-box` 요소를 사용자가 클릭하면
// 3. 움직이는 함수(movingBox)를 호출한다.
// 4. 애니메이션이 종료되면 콜백 함수를 실행한다.

// .demo-box 요소를 선택
var demo_box = query('.demo-box');

// ES6 
// function movingBox(position ={x:0}, callback = null) {}
function movingBox(box, position, callback) {
	 // 데이터 검증
  if ( isntElNode(box) ) {
    errorMsg('요소 노드여야만 합니다.');
  }
  // 초기 값 설정
  // position에 값이 설정되거나 없으면 뒤에꺼 값 
  position = position || { 'x': 0, 'y': 0 };
  // 아래 movingBox() postion은 객체로 x, y값을 담고 뒤에 function을 정해줘야 
  // callback이 true가 된다. 아니면 false로 뒤에 빈 function이 실행되서 아무일도 일어나지 않는다.
  // callback = typeof callback === 'function' ? callback : function() {};

 // console.dir(box);
  var current = {
    'x': box.offsetLeft,
    'y': box.offsetTop
  };

  // 목표 점
  // console.log('distance x', position.x - current.x);
  // console.log('distance y', position.y - current.y);

  var target_x = current.x + 100;

  var interval_id = setInterval(function() {
    if (current.x <= target_x) {
      current.x += 10;
      box.style.left = current.x + 'px';
    } else {
      clearInterval(interval_id);
      // 애니메이션 종료!!!!
      if (callback && typeof callback  === 'function') {
        callback();
      }
    }
    // box.style.top = current.y + 10 + 'px';
  }, 200);
}

// ---------------------------------------------------------------------------------
// 스크롤과 상관 없이 브라우저 뷰포트의 좌측 상단에서의 위치
// ---------------------------------------------------------------------------
// MouseEvent.clientX은 event가 발생한 지점의 클라이언트에서의 X 좌표를 참조 할 수있는 읽기 전용 속성입니다.
// 화면의 왼쪽에서 클릭하면 페이지의 가로 스크롤 위치에 관계없이 그 값은 0입니다.
// MouseEvent.clientX
// MouseEvent.clientY

demo_box.onclick = function(event) {
  // event는 mouseEvent 이다.
  // console.log('clicked demo box.');
  // this.style.left = '300px';
  movingBox(this, { // this = demo_box
    'x': event.clientX, // clientX, clientY는 mouseEvent 속성
    'y': event.clientY 
  }, function() {
    alert('애니메이션 끝났다구!!!');
  });
};