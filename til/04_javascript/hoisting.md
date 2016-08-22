###함수

 - 명령문의 묶음이며, 재사용 가능
 - 호출을 하여 사용한다
 - `function fnName1() {...}` : 함수 선언식
 - `var fnName2 = function() {...}` : 함수 리터럴


```javascript
var fn0 = new Function('console.log("쓰지말자!!")');
fn0()

// 1. 함수 선언문
function fn1() {
	console.log('선언되 함수가 실행 됐다');
}
fn1();

// 2. 함수 표현식
var fn2 = function() {
	console.log('표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.');
}
fn2();
```

####Hoisting(호이스팅)

 - 선언된 함수는 스코프 최상단으로 올라간다
 - 선언된 변수는 선언 부분만 스코프 최상단으로 올라간다. 할당은 이후에 할당된다.

```javascript
fn1(); //오류가 나지 않고 함수가 실행되는 이유는 아래 함수 선언문이 위로 올라가기 때문이다
function fn1() {
	console.log('선언되 함수가 실행 됐다');
}

fn2(); // 에러가 일어난다. var fn2만 스코프 최상단으로 올라가고 undefined를 호출하기 때문에
var fn2 = function() {
	console.log('표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.');
}
```

####Scope(스코프)

 - `if`, `while`, `for` 등은 지역 변수를 가질 수 없다.(ES6에서는 지원)
 - `function(함수)`만 지역 변수를 가질 수 있다.
 - 함수는 외부에 접근이 가능하지만, 외부에서는 함수 내부로 접근할 수 없다.
 - 스코프 체이닝 순서 : `지역` - `매개변수` - `상위 스코프`

```javascript
var king = '전역의 왕';

function kingdomNorth() {
	console.log(king) // 전역의 왕
}
function kingdomSouth() {
	function inKingdomSouth() {
		console.log(king)
	}
	inKingdomSouth();
}
// 다만 스코프 체이닝을 한단계정도 거치는 것은 괜찮지만, 여러 단계를 거치는 것은
// 성능 저하의 원인이 되므로 가능하면 현재 스코프에서만 탐색하도록 설계한다
```