/*! javascript-core.js @jyoungocde, 2016 */

/* 
 * - Hoist
 * - callback  pattern
 * - closure
 * - loop + closure
 * - IIFE(Immediately Invoked Function Expression) -> Module Patter ( Client-Side, Front-End )
 * ( ES6에서 모듈 지원, )
 */

 // IIFE에서 !function은 압축과정에서(용량을 줄일때 사용) - 압축은 자동화 처리라서 바뀐다.

// 전역
// var yamoo9; // 다른 이의 작성된 코드와 충돌이 날 확률 가능성이 있다.

// // 코드를 작성하기 위한 공간을 생성 : IIFE 패턴
// (function(global){
// 	'use strict';
// 	var yamoo9; //지역변수 (전역과 충돌 x)
// 	console.log(yamoo9) // undefined
// 	// global.y9 = yamoo9;

// 	// 스크립트를 사용해 오늘이 무슨 요일인지 알 수 있다.
// 	// 주중, 주말인지를 구분하여 콘솔에 출력한다.
// 	// 주중이라면... "아... 출근이여.." 라고 출력.
// 	// 주말이면... "아싸! 주말이다. 놀자!" 라고 출력.

// 	// (new Date())는 var time=new Date() -> time.getDay()를 그냥 편하게 객체(괄호)로 묶어서 처리 
// 	var today = (new Date()).getDay();
// 	// 단, 임의로 요일을 조정할 수 있다. 
// 	// today = 6; // 0 ~ 6
// 	// console.log(today);
// 	// 주중, 주말인지를 구분하여 콘솔에 출력한다.
// 	switch(today){
// 		case 0:
// 		case 6:
// 			console.log('주말이다~');
// 		break;

// 		default:
// 			console.log("주중이다...");
// 	}
// })(this);

// console.log(yamoo9); // [ERROR] yamoo9 is not defined

// 간혹 앞코드 끝에 세미콜론 안붙일때 
// ;(function)으로 되는 경우도 있다.

(function(global){
	'use strict';

	//.button-set을 선택
	var button_set = query('.button-set');
	//.button-set [CONTEXT] 내부에서 .button 을 모두 수집 [NODELIST]
	var buttons = makeArray(queryAll('.button', button_set));
	// console.log(buttons, isType(buttons));
	// 수집된 [NODELIST]를 순환하여 (코드의 흐름 제어)클릭 이벤트에 함수(이벤트 핸들러)를 연결한다.
	for( var button, i=0, l=buttons.length; i<l; i+=1){
		button = buttons[i];
		// 객체.속성을 추가하여 for문이 돌 때 마다 각 버튼 객체의 index 속성에 i값을 할당한다.
		button.index = i;

		// button.onclick = (function(){
		// 	// this 키워드 컨텍스트를 참조하는 변수
		// 	// this를 사용하여 각 버튼 객체의 index 속성 값에 접근하여 출력한다.
		// 	console.log(this.index);
		// });

		   // 예시 2) 자바스크립트 클로저를 사용하여 문제를 해결하는 방법
		button.onclick = (function(index){
		return function() {
			console.log(index);
		};
		})(i);
	}

	  // ------------------------------------------------------------
 
	// forEach() 예시
	// buttons.forEach(function(button, index, buttons){
	// 	// arguments 함수 내부에서만 접근 가능한 매개변수(전달인자들을 묶어놓은 집합 객체)
	// 	// console.log(arguments); // 유사배열객체
	// 	button.onclick = function() {
	// 		console.log(index);
	// 	}
	// });
	// 각 버튼을 사용자가 클릭할 경우, 자신의 순환 인덱스 숫자를 콘솔에 출력한다.
})(this);

(function(global){
	'use strict';
	// 생성자 함수 : 증거 대문자와 this
	// 생성자 역할 수행하는 함수
	// 이름 짓는 관례 상 첫글자가 대문자로 작성된다.
	function Navigation(name){
		this.name = name;
		// return 객체를 생성해서 반환한다.(new 사용시 보이지 않지만)
	}

	var gnb = new Navigation('글로벌 내비게이션 바');
	var unb = new Navigation('유틸리티 내비게이션 바 ');
	var lnb = new Navigation('로컬 내비게이션 바 ');
})(this);

(function(global){
	'use strict';

	// 숫자 객체 생성자를 사용하여  숫자 1부터 10까지를 변수 num1~num10에 생성하여라.
	// 단, num1 ~ num10에는 숫자 값이 담겨야 한다.

	global.num1 = (new Number(true)).valueOf();
	global.num2 = (new Number(false)).valueOf();
	global.num3 = (new Number(true)).valueOf();
	global.num4 = (new Number(false)).valueOf();
	global.num5 = (new Number(true)).valueOf();
	global.num6 = (new Number(false)).valueOf();
	global.num7 = (new Number(true)).valueOf();
	global.num8 = (new Number(false)).valueOf();
	global.num9 = (new Number(true)).valueOf();
	global.num10 = (new Number(false)).valueOf();

	// boolean 객체 생성자를 사용하여 boolean true, false로 연속되는 변수 boo1~boo10에 생성하여라.
	// 단, boo1 ~ boo10에는 boolean 값이 담겨야 한다.
	global.boo1 = (new Boolean(true)).valueOf();
	global.boo2 = (new Boolean(false)).valueOf();
	global.boo3 = (new Boolean(true)).valueOf();
	global.boo4 = (new Boolean(false)).valueOf();
	global.boo5 = (new Boolean(true)).valueOf();
	global.boo6 = (new Boolean(false)).valueOf();
	global.boo7 = (new Boolean(true)).valueOf();
	global.boo8 = (new Boolean(false)).valueOf();
	global.boo9 = (new Boolean(true)).valueOf();
	global.boo10 = (new Boolean(false)).valueOf();

})(this);