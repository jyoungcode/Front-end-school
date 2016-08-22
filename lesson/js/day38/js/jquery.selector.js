/*! jquery.selector.js © yamoo9.net, 2016 */

// http://codylindley.com/jqueryselectors/

// CSS 1-3 Selector 모두 지원
// e.g) $('html a:not(:first-child)')
// E      (타입 선택자)
// E E    (하위(자손) 선택자)
// E > E  (자식 선택자)
// #id    (아이디 선택자)
// .class (클래스 선택자)
// :nth-child(fomular)
// :nth-of-type(fomular)
// :only-child

// jQuery  CSS
// 개별적일때 : inline style로 적용 ( ex. 텍스트 사이즈 증가 )
// 여러 속성 일때 : class를 토글 방식으로 처리하는게 좋다.

$(document).ready(function(){
	$('.demo-box').eq(0).on('mouseenter', function(){
		var $this = $(this); // .demo-box
		if( $this.hasClass('secondary') ){
			$this.css('font-size', '+=10');
		}
		$this.addClass('primary');
	})
	.on('mouseleave', function(){
		var $this = $(this); // .demo-box.primary
		$this.removeClass('primary');
		$this.addClass('secondary');
	});
})