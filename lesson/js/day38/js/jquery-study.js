// jQuery는 $별칭을 사용하여 jQuery() 팩토리 함수를 참조한다.
// 그런데 위와 같은 $별칭을 사용할 경우, 다른 자바스크립트 라이브러리와 충돌이 날 가능성이 크다.
// console.log('$ 별칭은 jQuery의 소유이다.', window.$ === window.jQuery);

// 문서객체모델이 완성된 다음 코드가 실행될 수 있도록 이벤트를 사용해야 한다.
// ( body가 불러오지도 않았는데 jquery에서 body를 찾을 수 없기 때문에 )
// window.onload를 대체할 수 있는 window.addEventListener('DOMContentLoaded') 이벤트를 
// 추상화한 jQuery(document).ready() 구문을 지원한다.

// jQuery(document).ready(function(){
// 	// $ 별칭 충돌을 방지하기 위한 다양한 방법
// 	// jquery, javascript 등 라이브러리를 여러 가지에서 가져오면 $에서 충돌이 발생 할 수 있다. ( jquery, prototype, mootool? )
// 	// 팀원이 사용하더라도 충돌이 생기지 않게 해줘야한다.
// 	// jquery
// 	// 방법1. $를 사용하지 않고, jQuery 키워드만 사용한다.
// 	jQuery('body').css('background', '#7045cf');
// });

// --------------------------------------------------------------------------------
// 방법 2. $를 사용하지 않고,
// jQuery.noConflict() 메소드 사용으로 jQuery를 참조하는 새로운 변수를 생성한다.
// $ 별칭을 포기하게 된다.
// var $jq = jQuery.noConflict();

// 선생님은 방법 1,2 모두 사용하지 않는다.

// console.log('$ 별칭은 jQuery의 소유이다.', window.$ === window.jQuery);

// console.log('$jq는 jQuery의 새로운 별칭이 된다.', window.$jq === window.jQuery);

// $jq('body').first().css('font-size', '+=100');


// --------------------------------------------------------------------------------
// 방법 3. jQuery.noConflict()를 사용하여 $, window.jQuery를 모두 포기한다. 
// jQuery.noConflict(true); true를 넣으면 모두 포기한다.

// console.log('포기 전:',this.$, this.jQuery);

// var $$ = jQuery.noConflict(true); // this.$, this.jQuery 모두 포기

// console.log('포기 후:',this.$, this.jQuery);

// console.log('$$:', this.$$);

// --------------------------------------------------------------------------------
// 방법 4. IIFE 패턴을 사용하는 방법 ( 권장 ) - IIFE 안에서 만큼은 $를 써도 충돌이 생길 일이 없다.
(function(global, $){
  'use strict';
  // console.log(global.$ === global.jQuery);
})(this, this.jQuery);

// 또 다른 방법
// jQuery(function($) {

// });
// jQuery.noConflict(); // $를 포기
// jQuery.noConflict(true); // jQuery 까지 포기

// --------------------------------------------------------------------------------
// 방법 5. jQuery() 팩토리 함수에 함수를 전달한 후, 인자 값을 $로 받는다. ( 조금 무책임한 방법이 될 수 있다. )
// var $j = jQuery.noConflict(true); // 결과는 함수가 반환된다.

// 반환된 함수를 실행
// $j(function($) {
//   console.log($ === window.$j);
// });

// 이 안에서는 $를 사용 할 수 있다.
// jQuery.noConflict(true)(function($) {
// 	// 이 안에서 실행 
// 	// 이럴때는 다른 팀원들이 잘 모르면 jquery를 불러 왔는데 왜 작동이 안하는지 알 수 없다.

// });

// jQuery는 특이하게
// jQuery.prototype.jquery 로 버전 확인 가능. Angularjs는 안그렇다.

// 충돌 문제 참고
// http://learn.jquery.com/using-jquery-core/avoid-conflicts-other-libraries/
// http://mootools.net/

// --------------------------------------------------------------------------------

// $와 $()는 다르다.
// jQuery 와 jQuery() 결과는 다르다.
// jQuery는 `함수`이다.
// jQuery() `함수 실행 결과`는 `jQuery {} 인스턴스 객체`가 반환된다.

(function($){
	'use strict';
	// 함수.속성
	// 정적 메소드 (Static Method)
	// jQuery.type = function(data) { return Object.prototype.toString.call(data).slice(8,-1).toLowerCase(); }
	// console.log($.type( $ )); // 함수
	// console.log($.type( $() ), $().jquery); // 객체

	// jQuery 생성자가 만들어낸 객체의 메소드
	// 인스턴스 메소드
	// jQuery.prototype.css = function(prop, value){
	//  this === jQuery 인스턴스 객체
	//  this.each(function(index, el) { // 순환하면서 CSS 코드를 처리 });
	// }

$('body :first-child, body :last-child').css({
	'color': 'red',
	'line-height': 1.4
});

})(this.jQuery);

// each문 사용 
// $.each({
// 'color': 'red',
// 'line-height': 1.5
// }, function() {
//     console.log(arguments); // ["color", "red"] / ["line-height", 1.5]
// });

// // Object {color: "red", line-height: 1.5} // 출력 결과


