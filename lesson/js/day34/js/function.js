/*! function.js @jyoungcode , 2016 */

// 함수
// with문 오늘날은 안쓴다. console객체와 함께 log를 쓴다는 의미. js garden 찾아보자
// function fn(){
//     with(console){
//       log('1');
//       log('2');
//       log('3');
//     }
// }

// JavaScrip 함수르 작성하는 3가지 방법.

// 함수 내에서 변수 선언시 var 선언시 ES6에서는 오류생기고 
// 그 이하 버전은 오류가 생기지는 않는다. ( 하지만 꼭 var를 붙이자.)

// 0. 사용하지 말아야 할 방법
var fn0 = new Function('console.log("쓰지말자!")');
console.log("fn0(): ", fn0()); 

// 1. 함수 선언문
// 선언식은 Scope hoist ( hoisting ) 개념이 적용된다.
function fn1(){
	console.log('선언된 함수가 실행되었다.', 'font-weight: 900; color: #259758;');
}
console.log("fn1(): ", fn1());

// 2. 함수 표현식
// 표현식은 변수라서 hoisting 개념에서 undefined 가 된다.
// 변수 선언하는 이름만 위로 끌어 올려지기 때문에  
var fn2 = function() { console.log('표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.', 'font-weight: 900; color: #259758;');
};
console.log("fn2(): ", fn2());

// 예전에는 비전문가로 function을 정의해도 맨 위에서 해석되게끔 하려고 JS에서 설계했다. ( hoisting이 생겨난 이유 )


// Scope 
// 전역까지 스코프를 거슬러 올라가게 하면 성능이 저하된다.
// 전역이나 파라미터에서 처리하는게 좋다.
var king = "전역의 왕";

function kingdomNorth() {
	// king은 1번으로 지역변수찾고 2번으로 파라미터를 찾고 3번으로 전역변수을 찾는다. 
	console.log(king);
}

// Scope Chainning (스코프 해석) 
// function은 ()로 실행해야 컨텍스트가 생성된다.
// kingdomSouth() 실행 -> 1번(지역변수) -> 2번(매개변수) -> 3번(전역변수) 

// 3번 
function kingdomSouth() { // 2번 : parameter
	// 1번 
	function inkingdomSouth(){
		console.log(king);
	}
	inkingdomSouth();
}
kingdomSouth();


// hoisting 질문
// var boo = true;

// var inScope = function() { 
// // var boo; // undefined가 되니 아래 if문은 실행이 안된다.
// // 아래 실행 안됨
// 	if(boo){
// 		if(boo){
// 			console.log(boo);
// 			// 이렇게 선언시 var boo는 아래와 같은 형태를 하며 함수내 전역변수처럼 올려진다. 
// 			var boo = false; 
// 			// boo = false;
// 		}
// 		console.log(boo); 
// 	}
// }
// inScope();
// console.log(boo); // true // 그냥 

// Babel 트랜스 파일링
// var boo = true;

// var inScope = function() {
// 	if(boo){
// 		if(_boo){
// 			console.log(boo); // true
// 			var _boo = false;
// 		}
// 		console.log(boo); // true
// 	}
// }
// inScope();
// console.log(boo); // true

// ES6
// var boo = true;

// var inScope = function() {
// 	if(boo){
// 		if(boo){
// 			console.log(boo); // true
// 			let boo = false;
// 		}
// 		console.log(boo); // true
// 	}
// }
// inScope();
// console.log(boo); // true