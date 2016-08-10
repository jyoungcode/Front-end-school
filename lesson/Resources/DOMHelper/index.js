
/*! DOMHelper.js © jyoungcode 2016 */

// <body> 요소 맨 앞에 삽입(추가) 방법
// 방법 1. 표준 DOM API 방법인 insertBefore() 메소드를 활용
// target_node.parentNode.insertBefore(insert_node, target_node)
// var script_in_body = body.querySelector('script'); // IE 8+
// console.log('target_node:', script_in_body);
// var script_parent = script_in_body.parentNode;
// console.log('target_node.parentNode:', script_parent);
// script_parent.insertBefore(modal, script_in_body);


// 방법2
/**
 * prependChild(부모노드, 자식노드)
 * 부모노드의 첫번째 자식노드로 삽입한다.
 * ---------------------------------------------
 * @작성자    yamoo9
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  parent_node 부모노드
 * @param  {ELEMENT_NODE}  child_node  자식노드
 * @return {undefined}
 */
function prependChild(parent_node, child_node) {
  parent_node.insertBefore(child_node, parent_node.firstChild);
}

/**
 * insertAfter(목표노드, 삽입노드)
 * 목표노드 뒤에 삽입노드를 추가한다.
 * After 함수명에 맞게 쉽게 받아들이기위해서 parameter를 설정하기 위해 target_node 뒤에 insert_node를 설정.
 * ---------------------------------------------
 * @작성자    yamoo9
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  target_node  목표노드
 * @param  {ELEMENT_NODE}  insert_node  삽입노드
 * @return {undefined}
 */
function insertAfter(target_node, insert_node) {
// 삽입하고자 하는 노드를 목표 노드 뒤에 추가해주는 헬퍼 함수이다.
  var next_node = target_node.nextSibling;
  var parent_node = target_node.parentNode;
  if ( next_node ) { parent_node.insertBefore(insert_node, next_node); }
  else { parent_node.appendChild(insert_node); }
}

// parameter로 context를 나중에 넣는 이유는 안넣어도 될 파라미터를 나중에 쓰는것 때문에. 
function queryAll(selector_str, context) {
	// 사용자가 올바른 데이터를 전달하였는가?
	if( typeof selector_str !== 'string' ){
		// 조건이 참이 되면 오류 발생
		throw new Error ("문자열로 입력해");
	}
	// context 인자 값을 사용자가 전달하였는가?
	// 사용자가 context 값을 전달하지 않았을 경우는 undefined 이다.
	// if(typeof context === 'undefined')
	if( !context ) { context = document; }
	return context.querySelectorAll(selector_str);
}

function queryAll(selector, context){
	// 유효성검사
	// 문자 데이터인지 확인

	if(typeof selector !== 'string'){throw new Error('전달인자는 문자열만 가능하다')}
	if(!context){context= document;}

	return context.querySelectorAll(selector);
}

function query(selector, context){
	return queryAll(selector, context)[0];
}

function $qOne(selector, context, num){
	if( num === 1 ){
		return querySelectorAll(selector);
	}else if( num === 2){
		return queryAll(selector, context)[0];
	}
}

function $qTwo(selector, hook, context){
	var method;
	if (hook) {
		method = 'query';
	}else{
		method = 'queryAll';
	}
	return window[method]( (selector || '*'), context);
}
// (selector || '*') if문인데 앞에꺼 true면 뒤에꺼실행안됨. 앞에꺼 false면 뒤에꺼실행

// 문서 객체(요소노드)를 제거하는 헬퍼 함수
function removeNode(node) {
	node.parentNode.removeChild(node);
}

// createElement(), createTextNode()
// 2가지 일을 동시에 수행하는 헬퍼 함수
// "요소노드를 생성한 다음 내부에 텍스트노드를 자식 노드로 삽입"

function createNode(el_name, text, attr){
	var el_name = document.createElement(el_name);
	if (typeof text !== 'undefined' && typeof text === 'string') {
		var text_node = document.createTextNode(text);
		el_name.setAttribute('class', attr);
		el_name.appendChild(text_node);
	}
	return el_name;
}


