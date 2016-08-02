/*! bom.js @jyoungcode, 2016 */

// DOM, BOM 에서 OM은 무슨말인가?
// Model = 가계도 html에서 header 부모에 div자식이 있다.
// 이러한 관계들을 말한다.
// DOM = html root가 있고 HTMLach

// JS 특징
// 함수는 동사형태이며 ()를 사용한다.
// 객체.함수() 이런식으로 . 으로 연결
// 브라우저에서 JS엔진을 가지고 있다.


// 자바스크립트 변수는 변수 이름 앞에 
// var 키워드를 붙인다.

// var device_pixel_density;
// [카멜 케이스(camelCase) 표기식]
// 음절+음절 맡다을 때 뒷 음절의 첫글자가 대문자가 되는 것을 말한다.

// var device_pixel_density;
var dp = window.devicePixelRatio;

// 웹 브라우저의 콘솔(Console) 패널에 기록(Log)을 남긴다.
// console.log('기기의 픽셀 농도:', dp);

// 조건문
// @if dp == 1 {
// 	@debug "고해상도 디스플레이의 픽셀 농도를 가집니다.";
// } @else {
// 	@debug '일반 디스플레이의 픽셀 농도를 가집니다.';
// }

// JavaScript 조건문
// ' ', " " 둘다 가능하나 ' ' 선호
if (dp == 1) {
	// console.log("고해상도 디스플레이의 픽셀 농도를 가집니다.");
} else {
	// console.log("일반 디스플레이의 픽셀 농도를 가집니다.");
}

/**
 * ---------------------------------------------
 * window의 화면 가로 폭
 * --------------------------------------------- */
// window_height가 viewport의 height가 되는 것이다.

var window_w = window.innerWidth;
var window_h = window.innerHeight;

// console.log('window_w:', window_w);
// console.log('window_h:', window_h);

/**
 * ---------------------------------------------
 * window.scrollX
 * window.pageXOffset
 * window.scrollY
 * window.pageYOffset
 * --------------------------------------------- */
// 브라우저 스크롤이 된 수치
// 패스트캠퍼스 페이지처럼 스크롤 이용 기법
// window.scrollY, window.scrollTop, window.pageYOffset 등 값이 동일하다.
// window.scrollY == window.pageYOffset / true 
// 브라우저마다 하나씩만 지원할 수도 있어서 잘 알고 사용.  크롬은 둘다 지원.
// 그래서 크로스브라우징을 위해서 함수를 만들어 둔다.


var window_scrollX = window.scrollX;
var window_scrollY = window.scrollY;

// console.log('window_scrollX:', window_scrollX);
// console.log('window_scrollY:', window_scrollY);

// 변수 선언만 하는 경우. 즉, 값이 대입(할당)되지 않은 경우
// undefined 값이 기본으로 할당되어 있다.

// 이 값은 0이 나올 수 밖에 없다. 문서가 완료 event를 써서 문서가 완료 됬을때 scrollY 값을 불러와야 실시간으로 받아올 수 있다. 
var scroll_Y; // undefined

// * 이미 객체의 속성이 정해진 값을 사용자가 덮어쓰게 된다면,
// 덮어쓴 값이 출력된다. (자바스크립트의 약점. 태생적 한계)
// 초창기 자바스크립트 환경에서는 문법이 엄격할 수가 없었다.

// window 전역 객체의 속성 중에 scrollTop이 있는가 확인?
// scrollTop을 지원 한다는 것은 구형 IE를 감지하는 것이다.
if (window.scrollTop) {
	// type of (window.scrollTop) == undefined // true의 암묵적 방식이다. 그래서 조건문이 true면 scroll_Y에 담아서 비교.
	// = 연산자는 "할당(대입) 연산자"이다.
	// scrollTop 속성이 window 전역 객체에 존재한다면 (조건이 참(true))
	// scrollY 변수에 window.scrollTop이 가리키는 값을 할당한다.
	scroll_Y = window.scrollTop;
}
// 그렇지 않다면..( 위 조건이 거짓(false)인 경우) 
else {
	// scrollY 변수에 window.scrollY이 가리키는 값을 할당한다.
	scroll_Y = window.scrollY;
}

/** 
 * -------------------------------------------------
 * window 객체의 매소드(함수)
 * 메소드(Method)란?
 * 객체가 소유하고 있는 함수를 가르킨다.
 *  -------------------------------------------------*/
// window.alert('다이얼로그 창을 띄움으로서 사용자에게 메시지를 보여준다.')
// var is_youngman = window.confirm('당신은 청년입니까?');

// console.log('is_youngman:', is_youngman);

// if (is_youngman){
// 	alert("나는 청년입니다.");
// }else {
// 	alert("청년 아닙니다.");
// }

// 사용자의 입력 값을 받아 왔다면, 이를 기억해두기 위해서 변수가 필요하다.

// var user_name = window.prompt('당신의 이름은 무엇입니까?', '예) 아무개');
// window.alert(user_name + '님 반갑습니다.');

// 창을 열때 사용
// window.open("http://naver.com");
// 오늘날 크롬의 경우는 적용 안됨. 사파리는 가능.
// 요즘에는 거의 안씀. 사용할만한 인터렉션이 아니다.
// 절대적은 브라우저 크기를 축소 확대가 가능하다.
// window.resizeTo(400, 400);
// 상대적인 값 현재 브라우저 크기에서 100을 더 늘려준다는 개념.
// window.resizeBy(100, 100); 

// 크롬 적용 안됨. 안쓰는게 좋다.
// window.moveBy()
// window.moveTo()

// To 절대값으로 이동, By는 상대적값 지정해서 이동.
// window.scrollTo()
// window.scrollBy()

// 시간 제어 
// window.setInterval()
// window.setTimeout()


/** 
 * -----------------------------------------------
 * 시간을 제어하는 window 객체의 메소드
 * window.setInterval()
 * window.setTimeout()
 * ------------------------------------------------ */
// window.setInterval(할일(함수), 시간(밀리초)); // 주기마다 계속 반복
// window.setTimeout(할일(함수), 시간(밀리초)); // 1회

// Sass 함수
// $count: 10;
// @function countDown() {
// 	$count: $count - 1;
// 	@return $count;
// }

// 자바스크립트 함수
var count = 10;

function countDown() {
	count = count -1;
	console.log(count);
	return count;
}

// 주기(시간) 마다 수행되는 일을 처리할 경우에
// 아래와 같은 구문을 사용할 수 있다.
// countDown() : 즉시실행이다.
// setInterval(countDown()) 하면 setInterval을 하지 못한다.
// 그래서 이런 이벤트에는 ()를 넣지 않는다.

// 이벤트라는 것은 브라우저에 내장된 DOM의 API라고 볼 수 있고
// 이벤트마다 브라우저에서 실행 순서들이 다 정의 되어있다!

// countDown() 하면 console에는 9가 나온다.
// window.setInterval(countDown(), 1000);

// countDown 하면 9, 8 ,7, 6.... 하고 계속 이어진다.
window.setInterval(countDown, 1000);

// 컴퓨터에게 일을 반복적으로 수행하도록 시켰으나,
// 이를 멈출 수 있는 장치를 마련하지 않고 사용하면 안된다.

