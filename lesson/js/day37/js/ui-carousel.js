/*! ui-carousel.js © yamoo9.net, 2016 */

// 자바스크립트가 지원되는 환경임을 식별할 수 있는 모듈
(function(global){
  'use strict';

  // <html> 요소를 찾아서 class 속성에서 'no-js' 값을 'js'로 변경
  global.html = query('html');

  if ( html.classList ) {
    // 신형 방식 IE 10+
    html.classList.remove('no-js');
    html.classList.add('js');
  } else {
    // 구형 방식
    var html_class_attr = html.getAttribute('class');
    // 설정
    html.setAttribute('class', html_class_attr.replace(/no-js/,'js'));
  }

})(this);

// UI Carousel 컴포넌트(Component) 제작
// ( 캐로셀 제작은 어렵지만 나중에 컴포넌트화 시키려고 만드는거다. )
// 누구나 쓸 플러그인이라면 동적생성을 해야한다.

(function(global){
  'use strict';

  // init()이 끝난다음이라 값이 담겨 있다. 그래서 moving..()에서 접근가능하다
  var carousel_contents_wrapper; 
  var content_height;
  var carousel_contents_total;
  // -----------------------------------------------------
  // 1. [절차 지향] 함수 형 방식으로 진행
  // -----------------------------------------------------
  // 1.1 컴퍼넌트 분석
  // 애플리케이션 초기화
  //  해당 요소를 컴포넌트 화
  //  요소의 클래스 설정
  //  버튼을 동적으로 생성
  //  버튼 이벤트 핸들링
  // 핸들러 작성
  //  콘텐츠 래퍼를 이동 기능
  // 1.2 기능 설계
  // 1.3 기능 구현
  // 1.4 테스트
  // 1.5 빌드(배포)

  // 애플리케이션 초기화
  // HTML에 마크업 했지만 초기화 과정을 통해서 동적스크립트로 요소 생성
  function init(selector) {
    // 스타일 식별자 class 속성 설정
    var carousel = query(selector);
    // 기존 carousel 참조 문서 객체의 class 속성 값을 메모리
    // 객체.속성 방식을 사용하여 메모리
    carousel.origin_class = carousel.getAttribute('class') || ' '; //main-ad-area
    carousel.setAttribute('class', (carousel.origin_class + ' ui-carousel').trim() );
    // WAI-ARIA 설정
    carousel.setAttribute('role', 'application');
    carousel.setAttribute('aria-label', 'Demonstration UI Carousel Component');

    // 래핑 요소를 생성
    var carousel_contents_wrapper = createNode('div');
    // 래핑 요소에 클래스 속성 설정
    carousel_contents_wrapper.setAttribute('class', 'ui-carousel--content__wrapper');
    // 래핑 요소에 WAI-ARIA 속성 설정
    carousel_contents_wrapper.setAttribute('role', 'group');

    // 케로셀 콘텐츠 래핑
    // arraylike 형태의 요소들을 배열화 해주자
    var carousel_contents = makeArray( queryAll(selector + '> *') );
    carousel_contents_total = carousel_contents.length;
    carousel_contents.forEach(function(content, index) {
      // console.log(content); //<section></section>
      
      // 자식 요소에 class 속성 설정
      content.setAttribute('class', 'ui-carousel--content');

      // 자식 요소의 내부에서 제목요소를 찾아 class 속성 설정
      var headline = query('h2', content);
      headline.setAttribute('class', 'ui-carousel--content__headline');
      // 래핑 요소에 자식 요소로 삽입
      carousel_contents_wrapper.appendChild(content);
      // console.log(content, index);
    });
    // 캐로셀 컴포넌트의 첫번째 자식 요소로 삽입
    prependChild(carousel, carousel_contents_wrapper);

    // ------------------------------------------------------------
    // 버튼 그룹과 버튼 요소들을 동적으로 생성
    // var button_group = createNode('div');
    // // 버튼 그룹에 class 식별자 설정
    // button_group.setAttribute('class', 'ui-carousel--navigation__buttons');
    // button_group.setAttribute('role', 'group');
    // // 버튼 생성
    // var prev_button = createNode('button');
    // prev_button.setAttribute('type', 'button');
    // var next_button = prev_button.cloneNode();
    // // 각 버튼에 class 식별자를 생성
    // // 이전 버튼 
    // prev_button.setAttribute('class', 'ui-carousel--navigation__prev_button');
    // prev_button.setAttribute('aria-label', 'previous content');
    // // 버튼에 아이콘 폰트 추가
    // prev_button.innerHTML = '<span class="fa fa-angle-up" aria-hidden="true"></span>';
    
    // // 다음 버튼
    // next_button.setAttribute('class', 'ui-carousel--navigation__next_button');
    // next_button.setAttribute('aria-label', 'next content');
    // // 버튼에 아이콘 폰트 추가
    // next_button.innerHTML = '<span class="fa fa-angle-down" aria-hidden="true"></span>';

    // innerHTML 보다 아래에 있으면 innerHTML이 코드를 가라끼워서 parentNode를 null이 된다.
    // css을 사용하기 위해서 parentNode가 필요하다.
    // 콘텐츠 래퍼 문서 객체로부터 첫번째 자식 객체(콘텐트)를 변수에 참조
    var content = firstEl(carousel_contents_wrapper);

    // 콘텐트의 높이를 가져온다.
    var content_height = removeUnit(css(content, 'height'));

    // 템플릿코드를 사용한 innerHTML을 활용한 예시
    var button_group_html_code = [
      '<div class="ui-carousel--navigation__buttons" role="group">',
      '<button aria-label="previous content" type="button" class="ui-carousel--navigation__prev_button">',
            '<span class="fa fa-angle-up" aria-hidden="true"></span>',
      '</button>',
      '<button aria-label="next content" type="button" class="ui-carousel--navigation__next_button">',
            '<span class="fa fa-angle-down" aria-hidden="true"></span>',
      '</button>',
    '</div>'
    ].join(' ');
    carousel.innerHTML += button_group_html_code;

    // 버튼에 이벤트 바인딩을 하고자 한다.
    bindEvent( );
  } // init() - end -

  // ------------------------------------------------------------------
  // 버튼에 이벤트 바인딩
  function bindEvent() {
    var buttons = queryAll('.ui-carousel--navigation__buttons button');
    // console.log(buttons, isType(buttons));
    var len = buttons.length; // 2

    // ++ 보다 --로 빼서 확인하는게 빠르다.
    while( buttons[--len] ) {
      // console.log(buttons[len]);
      buttons[len].onclick = movingCarouselContents;
    }
  } // bindEvent() - end -

  // 버튼에 연결된 함수
  function movingCarouselContents() {
    // console.log(this); // buttons == this
    // 기능 구현 
    // 어떤 버튼을 사용자가 클릭했는지 구분한다.
    var check_class = this.getAttribute('class');

    // console.log(carousel_contents_wrapper); // 클릭시 가능 
    var carousel_contents_wrapper = prevEl(this.parentNode);
    var current_wrapper_top = removeUnit( css(carousel_contents_wrapper, 'top') );
    var changed_wrapper_top;

    // indexOf()에 비해서 정규표현식이 정확해서 좋다.
    // /next/.test('ui-carousel--content__next_button'); // true
    // 콘텐츠 래퍼를 이동시켜 준다.
   if ( /prev/.test(check_class) ) {
        changed_wrapper_top = current_wrapper_top + content_height;
        if ( changed_wrapper_top === content_height ) {
          changed_wrapper_top = -1 * ( content_height * (carousel_contents_total - 1) );
        }
        css(carousel_contents_wrapper, 'top', changed_wrapper_top + 'px');
      } else {
        changed_wrapper_top = current_wrapper_top - content_height;
        if ( changed_wrapper_top === -1 * (content_height * carousel_contents_total) ) {
          changed_wrapper_top = 0;
        }
        css(carousel_contents_wrapper, 'top', changed_wrapper_top + 'px');
      }
    }

    // // 콘텐츠 래퍼를 이동시켜 준다.
    // if( /prev/.test(check_class) ) {
    //   changed_wrapper_top = current_wrapper_top + content_height;
    //   if ( changed_wrapper_top)
    //   // up 버튼이면 top 양수 줘서 사진을 내리는거다. down은 그 반대!
    //   css(carousel_contents_wrapper, 'top', current_wrapper_top + content_height + 'px');
    // } else {
    //   // console.log('next button');
    //   css(carousel_contents_wrapper, 'top', current_wrapper_top - content_height + 'px');
    // }
  //}  movingCarouselContents() - end -

  // 초기화 실행
  init('.main-ad-area');
  // init('.demo-A');
  // init('.demo-B');
  // init('.demo-C');
})(this);


(function(global){
  'use strict';

  // -----------------------------------------------------
  // 2. [객체 지향] 커스텀 객체 형태로 변경
  // -----------------------------------------------------
  // 2.1 객체 생성자 (ES 2015. class 제작)
  // 2.2 객체 생성자의 프로토타입 객체를 통해 공유할 수 있는 기능 정의
  // 2.3 정의된 기능 구현
  // 2.4 테스트
  // 2.5 빌드(배포)

   function Carousel(selector) {
    this.carousel = query(selector);
    this.init();
  }

  Carousel.prototype = {
    'constructor': Carousel,
    'init': function() {

    },
    'bindEvent': function() {

    },
    'movingCarouselContents': function() {

    }
  }

  // 객체 생성
  global.main_ad_area = new Carousel('.main-ad-area');
  global.demo_A = new Carousel('.demo-A');

})(this);