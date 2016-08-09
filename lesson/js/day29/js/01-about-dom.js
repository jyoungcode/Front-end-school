/*! about-dom.js @jyoungcode, 2016 */

// DOM
// [선택] 현재 선택한 대상 el
// - id 속성으로 대상(요소노드)을 선택 document.getElementById('id_name')
// - 요소노드의 이름으로 대상(요소노드)을 선택 .getElementsByTagName('tag_name')
// - class 속성으로 대상(요소노드)을 선택
// - 특정 속성으로 대상(요소노드)을 선택

// [탐색] 부모노드 el.parentNode
// [탐색] 첫번째자식노드 el.firstChild
// [탐색] 마지막자식노드 el.lastChild
// [탐색] 이전형제노드 el.previousSibling
// [탐색] 다음 형제 노드 el.nextSibling
// [탐색] 자식 노드들 el.childNodes

// 탐색을 많이 쓰지 않는 이유는 우리가 찾는게 꼭 dom이 아닐지도 
// jquery 등장으로 함수핵을 많이 사용한다.

var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;
// parent_el 변수에 참조된 객체의 자식 노드들을 수집
console.log(parent_el_child_nodes)
console.log('수집된 parent_el의 자식 노드의 개수:', parent_el_child_nodes.length);

// 콘솔 패널 화면에 각 수집된 parent_el_child_nodes의 노드 유형을 출력해보세요.

// 방법1
// var pl = parent_el_child_nodes
// for(var i=0; i<pl.length; i++) {
//     console.log(parent_el_child_nodes[i].nodeType);
// }

// 방법2 ( item() 보다 [0]를 쓰자 
// console.log(0, parent_el_child_nodes.item(0).nodeType);

// 방법3 
// console.log(0, parent_el_child_nodes[0].nodeType);
// console.log(1, parent_el_child_nodes[1].nodeType);
// console.log(2, parent_el_child_nodes[2].nodeType);
// console.log(3, parent_el_child_nodes[3].nodeType);
// console.log(4, parent_el_child_nodes[4].nodeType);
// console.log(5, parent_el_child_nodes[5].nodeType);
// console.log(6, parent_el_child_nodes[6].nodeType);
// console.log(7, parent_el_child_nodes[7].nodeType);
// console.log(8, parent_el_child_nodes[8].nodeType);
// console.log(9, parent_el_child_nodes[9].nodeType);
// console.log(10, parent_el_child_nodes[10].nodeType);
// console.log(11, parent_el_child_nodes[11].nodeType);
// console.log(12, parent_el_child_nodes[12].nodeType);

// 미리보는 자바스크립트의 반복 구문
// while, do ~while, [for], for ~ in, for ~ of, forEach

// 미리보는 자바스크립트의 조건 구문
// if ~ else if~ else, switch case default break, 3항식

// for (var i=0; i<9; i=i+1) {
// 	if ( parent_el_child_nodes[i].nodeType === 1) {
// 		console.log('%c current node is ELEMENT_NODE', 'background: #222; color: #bada55');
// 	}else{
// 		console.log('%c current node is TEXT_NODE','background: #222; color: #fc414b');
// 	}
// }

// %c를 통해서 개발자도구에서 CSS를 넣을 수 있다. - 크롬에서만!
 // $0 : 개발자 도구>html요소 클릭후>$0 하면 그 요소를 찾는다.

/**
 * --------------------------------------------------------
 * #parent .child:first-child 요소의 자식노드들 순환하여 노드 유형 로그하기
 * --------------------------------------------------------*/
 /*var parent_el_first_child_el;
 var test_list = parent_el_first_child_el.childNodes;
 var test_list_len = test_list.length;

 for(var k=0; k<test_list_len; k++){
 	node_type = test_list[k].nodeType;
 	if(node_type === 1){
 		console.log('#c current node is ELEMENT_NODE.', 'color: #7045cf');
 	}
 	if(node_type === 3){
 		console.log('#c current node is TEXT_NODE.', 'color: #987637');
 	}
 	if(node_type === 8) {
 		console.log('#c current node is COMMENT_NODE.', 'color: #7DD000');
 	}
 }*/

// childNodes 대신 children 많이 쓴다.
// 왜? TEXT_NODE 말고 ELEMENT_NODE만 찾아준다.


// function len(dc){
// 	 var 
// 	return test_list.length-dc 
// }


// DOM.properties 
// node.nodeType
// 노드(Node)의 유형/이름/값을 출력하는 방법.
// 1. nodeType
// 	ELEMENT_NODE = 1
// 	TEXT_NODE = 3
// 	COMMENT_NODE = 8
//   DOCUMENT_NODE = 9
// 2.  nodeName
// 	ELEMENT_NODE의 경우는 요소 이름을 대문자로 반환
// 	TEXT_NODE의 경우는 '#text' 반환
// 3. nodeValue
// 	TEXT_NODE의  경우만 접근이 가능
// 	ELEMENT_NODE의 경우는 null 반환
// (ex. document.body.nodeName.toLowerCase();)

// 텍스트 node와 텍스트 content 차이
// 텍스트노드: document.getElementsByTagName('p').children[0].firstChild
// 텍스트콘텐트: document.getElementsByTagName('p').children[0].firstChild.nodeValue

// 결국 우리가 안에 콘텐트를 출력하고 싶을때 nodeValue를 붙인다.

//자식 노드를 찾을 때 nodeValue를 붙였어야 하는데 ie9이상 부터 지원되는 
//프로퍼티가 있다.
// firstElementChild, lastElementChild
// document.getElementsByTagName('div').firstElementChild

// ex)
// $0.firstElementChild 
// <div class="children">Children 1</div>
// $0.firstChild
// #text

/**
 * ---------------------------------------------------
 * DOM API
 * Traversal Properties
 * .firstChild             -> .firstElementChild
 * .lastChild             -> .lastElementChild
 * .previousSibling   -> .previousElementSibling
 * .nextSibling         -> .nextElementSibling
 * .parentNode         -> .parentElement
 ------------------------------------------------------*/

// ------------------------------
// NODE Information
// ------------------------------
// HTML DOM 방식의 속성 접근 방법
// 웹의 초창기 때부터 존배하던 속성들
// id, class, title, ...
// console.log('parent_el 요소노드의 id 속성: ', parent_el.id); //parent
// console.log('parent_el 요소노드의 class 속성: ', parent_el.className);
// console.log('parent_el 요소노드의 title 속성: ', parent_el.title);

// 새롭게 등장한 속성들
// data-*, aria-*, role, ...

// console.log('parent_el.role: ', parent_el.getAttribute('role'));
// console.log('parent_el.data-container: ', parent_el.getAttribute('data-container'));
// console.log('parent_el.aria-hidden: ', parent_el.getAttribute('data-container'));
// console.log('parent_el.aria-hidden: ', parent_el.['aria-hidden']);  // 안쓰는 방식


// // 사실상
// // var child, i 이렇게 위로 빠지는 거다. 변수를 위에다가 선언하면 따로 떨어지기때문에.
// l=parent_childs.length 해서 i<l 하는것은 메모리에 올려두고 리터럴값만 찾으면 되는건데 i<parent_childs.length을 하게 되면 리터럴을 다시 찾고 다시 조건을 찾게 되고 하는 과정을 for문이 계속해서 성능이 저하 된다. 

// var parent = document.getElementById('parent');
// var parent_childs = parent.getElementsByTagName('div');

// for(var child, i=0; i<parent_childs.length; i++){
// 	child = parent_childs[i];
// 	if( !child.hasChildNodes()) {
// 		console.log(child);
// 	}
// }

/**
 * ----------------------------------------------------------------
 * 클래스 속성 값으로 문서 객체 대상 선택하기
 * IE 9+ 지원. 근데 거의 안씀 querySelector 사용(IE8 부터 지원)
 * --------------------------------------------------------------*/
 // document.links; // HTMLCollection 이거 대신 NodeList 방식으로 쓴다.
 // NodeList 방식 
 // var childs = document.getElementsByClassName('child');
 // console.log(childs, childs.length);

 // var container = document.getElementsByClassName('child');
 // console.log(container, container.length);

/** 
 * -----------------------------------------------------------------
 * CSS 선택자를 통해 문서 객체를 선택하는 방법
 * IE 8+ 지원
 * multiclass 에서 순서 바뀌어도 상관없다. 
 * .querySelector('#id .class');
 * .querySelectorAll('#id .class'); 
 * .querySelector() === .querySelectorAll()[0]
 * -----------------------------------------------------------------*/

// parent.childNodes
// parent.getElementsByClassName('children').childNodes

