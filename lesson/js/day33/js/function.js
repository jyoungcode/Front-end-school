// function fn(){} // hoisting 개념은 scope에서 해석시 함수와 변수를 상단에 끌어올려서 실행하게 되는걸 말한다. 그래서 function은 위에 정의해두는게 좋다.

/*! function.js @jyoungcode, 2016 */

/* hoisting 개념에 의거한 상단 함수선언 예시 */
// var fn2 = function(){};
// fn(); // 실행
// fn2(); // 오류
// document.onclick = function(){
// 	this.onclick = null;
// };

// 1. 함수 선언문(Function Declaration)
// 함수 블록문 뒤에 세미콜론(;)을 사용하면 안됨.
// 키워드로 시작하는 구문은 세미콜론 안붙인다. 
// 함수이름은 카멜케이스 방식을 쓴다. 가급적 구분을 위한 관례
// 쓰지 말라는게 아니라 사용하면 위에 끌어 올려서 가독성 좋게 해주는게 좋다.

// ex) if(){} , while(){}, for(){}
// function 함수이름(){}

// 2. 함수 표현식(Function Expression)
// 함수 블록문 뒤에 세미콜론(;)을 사용해야됨.
// 익명함수는 변수에 담지 않으면 사라진다(garbage collector에 의해서)
// var 변수(함수이름) = function(){};

// 3. 함수 생성자 함수를 사용하여 함수를 생성하는 방법. ( 사용 잘 안함 )
// ** new 형태의 Object, String, Number 등 사용 안한다.** 
// 그리고 new Array 는 JS 내부 설계상 문제가 있다.
// 'new 설계는 전문가들은 잘못된 설계다' 라고 이야기도 한다. Java 따라한거.
var logIdentity = new Function('console.log("this is function object.")');

// 함수를 참조하고 있는 변수 이름을 통해서 호출 (실행 연산자 '()' 사용)
// 실행시 ()띄어쓰기 하면 안된다.
// 객체로 묶어주는 ()와 함수실행()를 착각하지 말자.
// 함수실행 (); 세미콜론 꼭 있어야함. 왜냐면 압축시에 다른것과 붙게됨.
logIdentity();

// 객체의 프로퍼티(변수)에 함수 참조
// obj.onclick = function() {};

// 함수, 변수에 참조
// var myFn = new Function();

// -------------------------------------------------------

// 변수의 특징
// 하나의 변수에는 하나의 데이터 값만 담을 수 있다.

var favorite_item_01 = '커피';
var favorite_item_02 = '에어컨';
var favorite_item_03 = '선풍기';
var favorite_item_04 = '깐풍기';

// 배열 <- 자료형
// 배열의 특징
// 집합 ( 데이터들을 묶을 수 있다. )
// 여러 개의 변수를 만들지 않고도
// 하나의 변수에 배열 데이터를 참조함으로서
// 다수의 데이터를 관리 할 수 있다.
// 권장하지 않는 방법 ,  js 내부 설계상 오류를 범한다.
// var favorite_items = new Array('커피', '에어컨', '선풍기', '깐풍기');
// var favorite_items = new Array();
// favorite_items[0] = '커피';
// favorite_items[1] = '에어컨';
// favorite_items[2] = '선풍기';
// favorite_items[3] = '깐풍기';

var favorite_items = ['커피', '에어컨', '선풍기', '깐풍기'];

// JS는 다른 언어와 다르게 배열은 배열이 아니다.
// 이유는 객체를 가지고 배열처럼 보이게 꾸민 내부적 특성.

var temp = [];
temp[0] = true;
temp[1] = 'coffee';
temp[2] = function(){console.log('oh~');}
temp[3] = [1,2,3];

// Array의 오류 
new Array(9) // [undefined x 9] => 이건 배열의 공간을 증가 시키는 거다. 그래서 이렇게 하고 싶다면 [9] 이렇게  하자.
// 위에 것과 차이 
new Array(9, 10) // [9, 10] 


// 객체 
// 자바스크리트의 언어 중 null과 undefined만 객체가 아니다. (toString()확인)
NaN.toString() // "NaN" 이라는 숫자 객체

// 객체.프로퍼티 값으로 설정되는 함수는 메소드

// 객체의 속성을 지우는법 
 // air === window.air
 // delete 

 // 정보 유형 파악하기 1
 // typeof
 // typeof()는 함수아니다 
 // typeof() 

 /**
  * ------------------------------------------------------------
  * 자바스크립트 데이터 유형 체크
  * 1. typeof 키워드를 사용하는 방법
  * ----------------------------------------------------------*/

  // 데이터 유형별 변수 선언 및 값(리터럴) 할당
  // 변수 선언
  var num, str, boo, fnc, arr, obj;

  // 선언된 변수에 각각 데이터를 리터럴 표현식으로 복사/참조
  // 원시 데이터 유형
  num = 1203;
  str = 'hey, jude';
  boo = !0;

  // 자료형 데이터 (참조)
  fnc = function(){}
  arr = [];
  obj = {};

// var 키워드를 한 번만 사용하는 패턴 
// (var singleton pattern)
var num = 9;
	str = ' ';
	boo = true,
	fnc = function(){},
	arr = [],
	obj = {};

// 치명적인 설계 오류로 쓸모가 없다.
typeof arr // object ( js 설계 오류!!! )
typeof undefined
typeof NaN
typeof null // object( js 설계 오류!!! )
typeof /\s/


/** 
 * -----------------------------------------
 * 자바스크립트 데이터 유형 체크
 * 2. instanceof 키워드를 사용하는 방법
 * ---------------------------------------*/
 // 역할: 생성자 함수(객체를 생성하는 자)를 통해 생성된 객체(인스턴스) 인가?
 // 객체 instanceof 생성자

arr instanceof Array; // true: typeof의 설계 오류 문제점을 해결할 수 있다!

// 약점: 원시 데이터 유형(리터럴 방식)의 경우는 올바른 대답을 해주지 않는다.
'primitive' instanceof String; // false
new String('primitive') instanceof String; // true

/** 
 * -----------------------------------------
 * 자바스크립트 데이터 유형 체크
 * 3. constructor 속성을 사용하는 방법
 * ---------------------------------------*/
// * 객체 유형의 데이터에서는 완벽한 결과를 반환한다. 
`primitive`.constructor === String; // true
(new String('primitive')).constructor === String; // true

// 단... 객체가 아닌 유형에서는 오류를 발생시킨다. 
// Uncaught TypeError: Cannot read property 'constructor' of null(..)
// 이유는... constructor 속성은 객체만이 가지는 속성이기 때문이다.
// (null).constructor; //null, undefined는  객체가 아니기 때문에 속성이 없다.


// var doll_message = ['안녕','밥 먹었나?','공부는 잘하고?','결혼은 언제','아이는 몇명?'];
// var count=0;
// // 한번 실행 할때마다 계속 count가 더해져서 인덱스 탐색이 된다.
// doll_message [ count++ %doll_message.length ]; 

// for(var count=0, messages = doll_message.length; count < messages; count++){
// 	console.log(doll_message[ count % messages ]); 
// }

// 증가(감소) 연산
var check_fact = 100;

console.log(check_fact); // 100
console.log(check_fact++); //100
console.log(check_fact); // 101
console.log(--check_fact); // 100
console.log(check_fact); // 100
console.log(check_fact--); // 100
console.log(check_fact); // 99
console.log(++check_fact); // 100


// var start = 0;
// while(++start < 10){
// 	console.log(start);
// }

// var i = 0;
// while( document.querySelectorAll('a')[i++]){ }


// 조건문
// if문
// 대입연산자

// 
function display(value){
	// 앞에 false면 뒤에꺼 실행 true면 앞에꺼 실행
	value= value || 'block';
	if( !value ){
		value = 'block';
	}
	return value;
}
// &&: false면 뒤에 실행 x , true면 뒤에 실행 O
// || : false면 뒤에 실행 O , true면 앞에 실행 O

// && 객체의 true라면 뒤에꺼를 실행하라. 
// this.config.aria && this.setARIA();
// confit.aria가 있다면 뒤에꺼를 실행하고 없으면 실행하지 마라 

function equal(data1, data2){
	return data1 == data2;
}
function strictEqual(data1, data2){
	return data1 === data2;
}

// condition 삼항식

// 다중삼항 조건 식

// 오늘은 무슨 요일 일까?
// 0,1,2,3,4,5,6
var today = new Date().getDay();
// var today_is = today === 0 ? '일' :
// 				today === 1 ? '월' : 
// 				today === 2 ? '화' : 
// 				today === 3 ? '수' : 
// 				today === 4 ? '목' : 
// 				today === 5 ? '금' : 
// 				today === 6 ? '토' : false;

// console.log('오늘은' + today_is + '요일 입니다.' : '장난하냐');

// switch, case, default
// switch(조건){
// 	case 값: 코드 실행;
// 	case 값: 코드 실행;
// 	case 값: 코드 실행;
// 	default: 위의 상황(case)이 아니면 최종 실행;
// }

var today_is, today = 1;
switch(today){
	case 0: today_is = '일';
	case 1: today_is = '월';
	case 2: today_is = '화';
	case 3: today_is = '수';
	case 4: today_is = '목';
	case 5: today_is = '금';
	case 6: today_is = '토';
	default: today_is = false;
}
console.log( today_is ? '오늘은' + today_is + '요일 입니다.' : '장난하냐');

// switch ~ case 문 응용
// var event_type = 'click';
// var callback;
// switch(event_type) {
// 	case 'click';
// 		callback = function() {
// 			console.log('clicked object');
// 		};
// }

