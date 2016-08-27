/*! jquery.last.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';

  // ** 인자를 모를 때 출력법 **
$('.gnb').before(function(){
	console.log(arguments);
});

  // 문서에서 .gnb 요소를 선택한 후에 내부에서 li 요소를 찾습니다.
  var $gnb = $('.gnb'); // nav
  var $gnb_list = $gnb.find('li');

  // ------------------------------------------------------------------
  // .eq( index | last_index )
  // https://api.jquery.com/eq/
  // ------------------------------------------------------------------
  var $gnb_list_1st      = $gnb_list.eq(0);
  var $gnb_list_2nd      = $gnb_list.eq(1);
  var $gnb_list_last     = $gnb_list.eq(-1);
  var $gnb_list_last_2nd = $gnb_list.eq(-2);

  // console.log('$gnb_list_1st:', $gnb_list_1st);
  // console.log('$gnb_list_2nd:', $gnb_list_2nd);
  // console.log('$gnb_list_last:', $gnb_list_last);
  // console.log('$gnb_list_last_2nd:', $gnb_list_last_2nd);

  // ------------------------------------------------------------------
  // .not( selector | element | function ) - not()을 제외하고 셀렉트
  // ------------------------------------------------------------------
  // selector
  // $gnb_list.not('[class]').addClass('have-not-class-attribute');

  // function
  // $gnb_list.not(function(index, element){
  //   // 홀수를 제외한 짝수 <li> 필터링
  //   return index % 2 === 0;
  //   // if ( index % 2 === 1 ) {
  //   //   console.log(index);
  //   // }
  // }).addClass('even');

  // $gnb_list.not(':even').addClass('even');

  // ------------------------------------------------------------------
  // .filter( selector | function | element | Selection(jQuery Object) ) - 찾아준다.
  // ------------------------------------------------------------------
  // 1. selector
  // $gnb_list.filter('.first').remove();
  // 2. function
 $gnb_list
  .add('nav, a')
    .addClass('navigation-component')
    .filter(function(index, element) {
      var node_name = element.nodeName.toLowerCase();
      return node_name === 'a' || node_name === 'nav';
    })
    .eq(-1).css('width', '4rem')
    .last().css('width', '4rem')
    .css({
      'width': function(index, current_value) {
        var $current_list = $gnb_list.eq(index);
        if( $current_list.is('.last') ) {
          // console.log($current_list[0]);
          return '4rem';
        }
      }
    });

    // filter로 a와 nav를 빼와서 css를 적용시켰다.

    // attr 보다 getAttribute가 빠르다.

    // ------------------------------------------------------------------
    // filter 와 find의 차이 ( )
    // ------------------------------------------------------------------
    // li find a li 내부에 자식 중 찾는것 
    // li filter a li에서 a를 걸러내는것

    // $('li').each 하면 
    // document.querySelectAll('li')
    // .length
    // 하고 for문을 돌린거다.

    // ------------------------------------------------------------------
    // .each( callback )
    // .each( function(index, element){} )
    // ------------------------------------------------------------------
    $gnb_list.each(function(idx, el) {
      // jQuery
      // $(el).html( $(el).html() + $('<span>').text(idx * idx + 1) );
      // DOM Script
      // el.innerHTML += '<span>' + (idx * idx + 1) + '</span>';
    });

 // FILTER
    // .first()
    // .last()
    // .eq()
    // .filter()
    // .not()
    // .slice()

    // FIND
    // .find()
    // .next()
    // .prev()
    // .parent()
    // .parents()
    // .children()
    // .prevAll()
    // .prevUntil()
    // .nextAll()
    // .nextUntil()

    // add('<p>복제된 요소</p>') 일때 유용

    // andSelf 없어지고 addBack을 사용

    // addBack과 end는 다르다
    // is , has 차이 ( 자신과 내 자식 )
    // filter, find 차이 


    var $gnb_first = $gnb.find(':first');
    console.log( $gnb_first.next().children(':last').prevAll('.first').parents('.gnb') );

})(this, this.jQuery);

//////////////////////////////////////////////////////////////////////////////

(function($){
  'use strict';

  var $gnb = $('.gnb');

  var $selected_el = $gnb.find('p').addClass('this-is-parapgrah').add('li', $gnb);

  $selected_el.each(function() {
    var item = arguments[1];
    console.log(item);
  });

  // $gnb
  //   .find('li:first-child a').clone()
  //     .add('<p>링크 뒤에 나오는 단락</p>')
  //   .appendTo('li:first-child', $gnb);

  // jQuery 팩토리 함수를 통해 문서 객체를 생성할 수 있다.
  // $('<div>')
  //   .addClass('custom-division')
  //   .attr({
  //     'id': 'hi-seoul',
  //     'title': 'hey jude'
  //   })
  //   .text('Hey Division Element')
  //   .on('click', function() {
  //     console.log(this);
  //   })
  //   .appendTo('.gnb');

     // ----------------------------------------------------------------------
     // attr 없이 가능하나 묶어주는게 좋다.
    var $new_div = $('<div>', {
    		'attr': {
    		'id': 'hi-seoul',
    		'class': 'custom-division',
    			'title': 'hey jude'
    		},
    		'text': 'Hey Division Element!!!',
    		'on': {
    			'click' : function() {
    				console.log(this);
    			}
    		}
    }).appendTo('body');

$('.gnb').html(function(index, oldHTML) {
	return '<article>' + oldHTML + '</article>';
});


// ** 중요 **
// input에 attribute 를 가져오는 것 
$('form').find('input').attr('type') // text

// 사용자가 입력한 값
// 동적이 변경이 있을때 prop 사용
$('form').find('input').prop('value') // 사용자 입력한 value
$('form').find('input').val() // 대체 방법

// --------------------------------------------------------------------
var $h2 = $('<h2 id="demo-test-h2">demo heading 2</h2>');
var h3 = document.createElement('h3');
var h3_text= document.createTextNode('new content -heading 3 ');
var gnb = document.querySelector('.gnb');

var $ol = $('ol');

$ol.prependTo('body');
window.setTimeout(function() {
	$ol.before( $h2, [h3, gnb] );
	// $ol.before( [$h2, h3, gnb] ); // 모두 가능하다.
	// $ol.before( [h3, gnb,$h2] );
}, 3000);

// ------------------------------------------------------------------
// 이벤트 바인딩 시에 이벤트 객체에 사용자가 정의한 객체를 합성 [ 객체 합성 ]
// 외부에 변수를 만들지 않고, 이벤트 객체를 통해 조건 처리하는 토글 구문
// ------------------------------------------------------------------
$('p:eq(2)').on('click', {'clicked': false}, function(ev){
	if(!ev.data.clicked){
		console.log('toggle 1');
	} else {
		console.log('toggle 2');
	}
	ev.data.clicked = !ev.data.clicked;
});

})(this.jQuery);


