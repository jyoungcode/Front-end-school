/*! dom-script.js © yamoo9.net, 2016 */

// 다음 HTML 코드를 동적으로 <body> 요소 내부에 추가해보세요.
// <div class="modal">
//   <h2 class="modal-title">Modal Window</h2>
//   <p class="modal-desc">Modal Window Content....</p>
//   <button class="modal-cta">send message</button>
//   <button class="modal-close" aria-label="close modal window">x</button>
// </div>

// 노드 생성
var modal = document.createElement('div');
// 노드 속성 설정
modal.setAttribute('class', 'modal');
//------------------------------------------
var modal_title = document.createElement('h2');
var modal_title_txt = document.createTextNode('Modal Window');
modal_title.setAttribute('class', 'modal-title');
modal_title.appendChild(modal_title_txt);
//------------------------------------------
var modal_desc = document.createElement('p');
var modal_desc_txt = document.createTextNode('Modal Window Content....');
modal_desc.setAttribute('class', 'modal-desc');
modal_desc.appendChild(modal_desc_txt);
//------------------------------------------
var btn_modal_cta = document.createElement('button');
var btn_modal_cta_txt = document.createTextNode('send message');
btn_modal_cta.setAttribute('class', 'modal-cta');
btn_modal_cta.setAttribute('type', 'button');
btn_modal_cta.appendChild(btn_modal_cta_txt);
// -------------------------------------------------------
// modal 과 버튼 분리 div
var modal_btn_wrap = document.createElement('div');
modal_btn_wrap.setAttribute('class', 'modal_btn_wrap');

//------------------------------------------
var btn_modal_close = document.createElement('button');
var btn_modal_close_txt = document.createTextNode('x');
btn_modal_close.setAttribute('class', 'modal-close');
btn_modal_close.setAttribute('type', 'button');
btn_modal_close.setAttribute('aria-label', 'close modal window');
btn_modal_close.appendChild(btn_modal_close_txt);
//------------------------------------------
var btn_modal_open = document.createElement('button');
var btn_modal_open_txt = document.createTextNode('o');
btn_modal_open.setAttribute('class', 'modal-open');
btn_modal_open.setAttribute('type', 'button');
btn_modal_open.setAttribute('aria-label', 'close modal window');
btn_modal_open.appendChild(btn_modal_open_txt);
// ---------------------------------------------------

// 생성된 모든 노드를 병합
modal.appendChild( modal_title );
modal.appendChild( modal_desc );
modal.appendChild( btn_modal_cta );
modal_btn_wrap.appendChild( btn_modal_close );
modal_btn_wrap.appendChild( btn_modal_open );

// <body> 요소 맨 뒷편에 삽입(추가)
var body = document.body;
body.appendChild(modal);
body.appendChild(modal_btn_wrap);
// prependChild(body, modal);

// <body> 요소 맨 뒷편에 삽입(추가)
var body = document.body;
body.appendChild(modal);
body.appendChild(modal_btn_wrap);
// prependChild(body, modal);

var scripts_in_body = queryAll('script');
var last_script = scripts_in_body[scripts_in_body.length - 1];
insertAfter(last_script, modal);


// modal open, close 
modal_btn_wrap.classList.toggle = function() {
	btn_modal_open

	if ( btn_modal_close )
	btn_modal_close

	var open = btn_modal_open.onclick = function(){
		modal.parentNode.appendChild(modal);
	}
	var close = btn_modal_close.onclick = function(){
		modal.parentNode.removeChild(modal);
	}
}
