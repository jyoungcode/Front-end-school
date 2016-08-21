// .demo-navigation 선택합니다.
// 내부에서 a요소를 모두 수집합니다.
// 수집된 a 요소를 사용자가 클릭하면
// 클릭된 a 요소의 수집될 당시의
// 인덱스 넘버를 콘솔에 기롭합니다.


var demo_nav = query('.demo-navigaion');
var demo_nav_links = queryAll('a', demo_nav);
var i=0, l=demo_nav_links.length;

// 클로저 함수를 반환하는 래퍼 함수를 만드는 일은 많은 비용이 든다.
function showMeIndexWrapper(index){
	function showMeIndex(){
		// index??
		console.log("my index number is ", index+1);
	}
	return showMeIndex;
}

// 비용을 절감하는 형태로 클로저 함수를 만드는 방법
// 모던 자바스크립트 패턴 중 이 패턴이 가장 많이 사용되는 패턴
// IIFE 패턴 (즉시 실행되는 함수)
// 일반적인 함수의 호출과정과 달리 이름이 없는 함수를 즉시 호출하는 것을 말한다.

/// 권장하지 않는 방법 
// +function(){}();
// ~function(){}();
// !function(){}();
// (function(){})();

// 권장 방법 
// (function(){
// 	// 외부와 단절된 독립된 공간이 형성
// 	// 캡슐화
// }());

// IIFE 즉시실행함수 예제
// 여러 사람과 선언식을 사용하여 재사용 할 경우는 IIFE 방식을 쓰지 않는다. 
// 즉 경우에 따라 적합한 것을 사용하자.
// var countDown10_minus_2 = (function(){
// 	var _num = 10;
// 	return function(){
// 		return _num -=2; // _num = _num - 2; 
// 	};
// }())

// for(; i<l; i++) {
//   // 클로저 사용 예시
//   demo_nav_links[i].onclick = (function(count){
//     return function() {
//       console.log(count);
//     };
//   }(i));
// }


for(; i<l; i++){
	// demo_nav_links는 각각의 a를 가르킨다.
	// 위에 function이 실행되면서 index값(i)는 여기 실행문에서 메모리 되어진다.
	demo_nav_links[i].onclick = showMeIndexWrapper(i);

	// i는 반복문이 끝난 전역의 4만 출력이 된다. 
	// 왜냐면 for문 내에서 onclick 이벤트에 담긴거지 아직 function 실행이 되지 않은거다.
	// demo_nav_links[i].onclick = function(){ console.log(i); }
}



// var demo_navigation = query('.demo-navigation');
// var ul = elementsCollection('ul');

// for(var i=0; i < ul.length-1; i++){
// 	elementsCollection('ul')[i].firstElementChild;
// }

