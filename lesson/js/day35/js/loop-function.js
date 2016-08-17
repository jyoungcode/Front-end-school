/*! loop-function.js @jyoungcode, 2016 */

// 자바스크립트 반복문
// 1.1. while
// 1.2. do ~ while
// 1.3. for 
// 1.4. for ~ in [Object]
// 1.5. forEach [Array] ECMAScript 5 Edition
// 1.6. for ~ of [Array] ECMAScript 2015

// DEMO:
// forEach 구문
var movielist = [];
movielist.push('터널');
movielist.push('덕혜공주');
movielist.push('부산행');
movielist.push('서울역');

console.log(movielist); 

// for문
for(var i=0, l=movielist.length; i<l; i+=1){
	console.log(movielist[i]);
}

// for ~ in문
for(var index in movielist){
	if(movielist.hasOwnProperty(index)){
		console.log('for-in문 결과: ',movielist[index]);
	}
}

// for ~ of문
for(var moive of movielist){
	// console.log('for - of 문의 결과: ', movie);
}

// 앞으로 배열에서 권장하는 법
// forEach에 파라미터 순서는 언어자체에서 정의된 규칙이다. 
// 배열 객체(Array)의 메소드: .forEach(원소, 순서, 배열)
// .forEach() 문은 반환 값이 없다. (undefined)
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// movielist.forEach(function(item, index, arr){
// 	console.log('item: ', item);
// 	console.log('index: ', index);
// 	console.log('arr: ', arr);
// });

movielist.forEach(function(item, idx){
	console.log('item '+idx + ': ', item);
	// return 하더라도 반환 값이 없다.
	// return 'item '+ idx +': ' + item;
});

// console.log('movielist.forEach() 결과: ', each_movielist);

// 배열 객체(Array)의 메소드: .map(원소, 순서, 배열)
// .map()의 반환 값은 수정된 배열을 반환한다.
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var new_movielist = movielist.map(function(item, index, arr) {
  // console.log(item + '은 ' + index + '번째 원소입니다.');
  return item + '은 ' + index + '번째 원소입니다.';
  // console.log('item' + index + ':', item);
  // if ( index === movielist.length - 1 ) {
  //   console.log('arr:', arr);
  // }
});

console.log('movielist.map() 결과: ', new_movielist);

// -----------------------------------------------------------
// 자바스크립트 함수 
// -----------------------------------------------------------

// 함수의 특징
// 상위 영역(Scope)과 구분되는 별도의 독립적인 영역을 생성한다.
// 함수 내부에 'var' 키워드, 'function' 키워드로 정의된 데이터 값은 외부 영역에서 접근이 불가능하다.
// 함수 내부는 독립된 공간이기에 내부에 'var' 키워드, 'function' 키워드로 정의된 데이터는 호이스트(hoist) 된다.

// 호이스트(영역 최상단으로 끌어 올려진다.)
// 'function' 으로 정의된 함수는 몸체가 전부 끌어올려진다.
// 'var' 키워드로 정의된 변수는 변수 이름만 끌어 올려질 뿐, 할당되는 데이터(값)는 원래 정의된 곳에서 이루어진다.(값은 끌어올려지지 않는다는 의미)

// DEMO: 
// 선언식 (함수 이름으로 정의하는 방법)
// function scopeFn() { ... }

// 표현식 (함수 값(리터럴)을 변수에 할당하는 방법)
var scopeFnExpression = function() {
  // console.log(this); // window 객체
  // 외부와 단절된 독립된 공간이 형성된다.
  // let movielist;
  if (movielist) {
    inScopeFnc();
    console.log('if 내부:', movielist);
    // ※ ES2015에 표준으로 추가된 let 키워드를 사용한 변수는 호이스트 되지 않는다.
    // let movielist = null;
    // var 키워드로 정의된 변수는 호이스트되어 함수 영역의 최상단으로 끌어올려진다.
    movielist = ['영화 짱 좋아', '진짜 짱 좋아'];
    function inScopeFnc() {
      console.log('this is inScopeFnc.');
    }
  }
  console.log('함수 내부:', movielist);
};
// 함수 실행
// 함수를 실행시킨 컨텍스트 객체? === window 객체
scopeFnExpression(); // window.scopeFnExpression()와 같다.

console.log('함수 외부:', movielist);

// 함수 정의
// 매개변수 parameter
// function 함수이름(매개변수1, 매개변수2, ...) {
// ....
// }

// 함수 호출
// 전달인자 argument
// 함수이름(전달인자1, 전달인자2, ...);

// -------------------------------------------------------------------------------------

// 인스턴스란?
// var obj1 = {};
// 생성자 함수인 Object가 new 키워드를 만나 아이를 낳았는데 그 아이는 객체(인스턴스)이다.
// var obj2 = new Object();
// var arr1 = [];
// var arr2 = new Array();

// 일반 함수(글로벌 스코프에 정의된 함수)
// function showMe(){
// 	console.log(this); // window
// 	return  this; 
// }

// showMe() === window;

// var fds = {
// 	'callMe' : showMe
// };

// fds.callMe() === fds;

// 자바스크립트 엄격 모드
function strictFn() {
	// 엄격 모드 발동
	// * ECMAScript 2015 버전부터는 기본 설정 값이 "엄격 모드"
	'use strict';
	// 변수 선언 시에 var 키워드를 강제화 한다. (오류 발생)
	var hi_message = "Hello";
	// this 컨텍스트 참조 변수는 더 이상 window 전역 객체가 아닌 undefined 이다.
	console.log(this, hi_message);
}

// 엄격 모드가 아닌, 자바스크립트에서는 전역에서 함수를 호출 할 경우,
// 그 함수의 컨텍스트를 암묵적으로 전역 객체인 window를 가리켰다. (문제발생!!)
// 그래서 위와 같이 'use strict'로 엄격모드 후 실행
strictFn(); // this === undefined

// 반면 엄격 모드에서 명시적으로 특정 객체 
// this 컨텍스트 참조 변수는 
window.strictFn(); // this === window
document.onclick = strictFn;

// ----------------------------------------------------------------------
// 자바스크립트 함수는 일급 객체 (First Class Object)
// ------------------------------------------------------------

// callback === cb (줄임말)
// 인자로 함수가 전달되면 콜백함수라 한다.
// 콜백함수 : Ajax에서 주로 데이터 받아오고 그다음 실행 함수를 쓸때 자주 사용 하는데 ( callback: 호출, 회수 )
// 콜백함수란? 함수가 실행된 다음 실행함수를 말한다.(함수안에 함수를 인자로 넣어서)
var fn = function(cb) {
	// 인자로 함수 데이터 유형이 전달되었다면 함수를 실행하라.
	if (typeof cb === 'function' ) {
		// cb();
		window.setTimeout(cb, 2000);
	} else {
		throw new Error('전달인자는 함수 데이터 유형이어야 한다.'); 
	}
};

// 자바스크립트 함수가 일급 객체인 이유!
// 함수를 다른 함수의 안자로 전달 할 수 있다.
fn( function(){
	console.log('전달된 함수가 실행되었습니다.')
});

// -----------------------------------------------------
// 자바스크립트 클로저 함수란?
// 원래 함수는 return하면 끝나는데 내부에 함수를 넣어놔서 함수가 살아 있게 한다. 
// -----------------------------------------------------
// 자바스크립트 함수는 일급 객체의 요건을 모두 충족한다.
// 인자로서 전달도 가능하며, 값으로서 반환 또한 가능하다.
// 함수가 실행되어 내부에 존재하는 함수를 외부로 반환할 경우
// 클로저가 생성되며, 반환된 함수는 클로저 영역을 참조할 수 있다.
// 이때 반환된 함수를 클로저 함수라 명한다.


// 인자에서 10을 주고 number에 넣어지고 코드 실행하고 내부 변수 함수가 실행된다.
function countDown(number){
	if ( typeof number !== 'number' ) {
		throw new Erro('숫자를 전달하세요.');
	}
	var _num = number;
	// countDown 외부 함수 내부에 존재하는 함수
	// 내부에서 사용한다는 의미에 '_'
	var _countDown = function(){
		// 밖에서는 안에 접근 안되지만 안에서는밖에 변수를 알 수 있다.
		console.log(_num--);
	};
	// 실행을 하면 실행하고 끝이다 그래서 클로저함수가 되려면 return으로 살려야 한다.
	// _countDown();
	return _countDown;
}

// return으로 살아남은 _countDonw이 외부 var countDown10에 들어간다.
var countDown10 = countDown(10);

// 메모리에서 사라짐. 그러나 클로저함수라면 해결방법이됨.
	console.log(_countDown);




// function countDown(target_number) {
// 	function innerCount(){
// 		var i=target_number;
// 		for( ; i > 0 ; i--){

// 		}
// 		return innerCount;
// 	}
// 	return 
// }

// countDown(10);

