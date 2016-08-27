/*! jquery.radioClass.js @jyoungocode */

// 네이버 중앙 메인 탭 메뉴 적용가능
(function(global, $){
	'use strict';
	// $.fn === jQuery.prototype 객체
	// jQuery 프로토타입(원형) 객체에 radioClass 메소드가 없다면
	// 조건이 참이되어 radioClass 메소드정의
	if(!$.fn.radioClass){
		$.fn.radioClass = function (class_name) {
			if ( $.type(class_name) !== 'string' ) {
			throw new Error('전달 인자는 문자열이어야 합니다.');
			}
			// this === jQuery 플러그인이 연결된 객체
			// 사용자가 클릭한 <a> 요소의 부모 <li> 요소
			var $activated = this.siblings('.'+class_name);
			if ($activated.length === 0) {
			console.info('전달한 ${class_name}에 해당하는 형제가 없습니다 확인해보세요.');
			}
			$activated.removeClass(class_name);
			this.addClass(class_name);



			// this === jQuery 플러그인이 연결된 객체
			// console.log(this.jquery); // this가 무조건 dom이 아니다 
			// jQuery 객체라는 걸 증명
			// // 클릭한 li의 형제인 li에서 class active를 가져와야 한다. 
			// var $activated = this.siblings('.active');
			// $activated.removeClass('active');
			// this.addClass('active');
			// jQuery 인스턴스 메소드 체이닝을 해야해서 return
			// 왜 인스턴스라고하나? jQuery객체에서 생성된 인스턴스만 사용가능해서
			return this;
		};
	}
})(this, this.jQuery);